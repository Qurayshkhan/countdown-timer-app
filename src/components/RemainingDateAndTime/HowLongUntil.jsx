import { useEffect, useState } from "react";
import DateTimer from "../Dates/DateTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import RightSideContent from "../Content/RightSideContent";

function HowLongUntil({ slug }) {
  console.log("🚀 ~ HowLongUntil ~ slug:", slug);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [arrSlice, setArrSlice] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const urlArray = slug?.split("-");
    if (urlArray) {
      if (urlArray.includes("am") || urlArray.includes("pm")) {
        setArrSlice(urlArray.slice(-3)); // For 12-hour format
      } else {
        setArrSlice(urlArray.slice(-2)); // For 24-hour format
      }
    }
  }, [slug]);

  const [hours, minutes, meridiem] = arrSlice;

  useEffect(() => {
    const targetTime = () => {
      let targetDate = new Date();
      let targetHours = parseInt(hours, 10);

      if (meridiem && meridiem.toLowerCase() === "pm" && targetHours !== 12) {
        targetHours += 12;
      } else if (
        meridiem &&
        meridiem.toLowerCase() === "am" &&
        targetHours === 12
      ) {
        targetHours = 0;
      }

      targetDate.setHours(targetHours, parseInt(minutes, 10), 0, 0);

      if (targetDate < new Date()) {
        targetDate.setDate(targetDate.getDate() + 1);
      }

      return targetDate;
    };

    const calculateRemainingTime = () => {
      if (!hours || !minutes) return;
      const now = new Date();
      const targetDate = targetTime();
      const difference = targetDate - now;

      const remainingHours = Math.floor(difference / (1000 * 60 * 60));
      const remainingMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemainingHours(remainingHours);
      setRemainingMinutes(remainingMinutes);
      setRemainingSeconds(remainingSeconds);
    };

    const interval = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, meridiem]);

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
                    {slug.split("-").join(" ")}
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
                hours={remainingHours}
                minutes={remainingMinutes}
                seconds={remainingSeconds}
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

export default HowLongUntil;
