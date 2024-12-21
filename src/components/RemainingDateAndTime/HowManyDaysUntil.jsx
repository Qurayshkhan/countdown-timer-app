import React, { useEffect, useState } from "react";
import DateTimer from "../Dates/DateTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { monthByName, monthByNumber } from "@js/data/months";
import { useNavigate } from "react-router-dom";
import RightSideContent from "../Content/RightSideContent";
function HowManyDaysUntil({ slug }) {
  const navigate = useNavigate();
  const urlArray = slug.split("-");
  const monthAndDate = urlArray.slice(1).slice(-2);

  const monthUntilCount = monthByName[monthAndDate[0]];
  const dateUntilCount = monthAndDate[1];
  const monthName = monthByNumber[monthUntilCount - 1];

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSecond] = useState(0);

  const calculateCountdown = () => {
    const currentDate = new Date();
    let targetDate = new Date(
      currentDate.getFullYear(),
      monthUntilCount - 1,
      dateUntilCount
    );
    if (targetDate < currentDate) {
      targetDate.setFullYear(currentDate.getFullYear() + 1);
    }
    const diff = targetDate - currentDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSecond(seconds);
  };

  useEffect(() => {
    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="mb-2">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleLeft}
                      className="text-danger"
                      onClick={() => navigate(-1)}
                    />
                  </a>
                  <p className="card-text text-capitalize">
                    How many days until {monthName} {dateUntilCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <DateTimer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </div>
          </div>
        </div>
        <RightSideContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          assumenda fugit perferendis, dolore saepe culpa perspiciatis
          voluptatibus voluptatem ipsum corrupti quis nisi commodi quasi dolor
          laudantium accusamus sunt. Quos, veniam.
        </RightSideContent>
      </div>
    </>
  );
}

export default HowManyDaysUntil;
