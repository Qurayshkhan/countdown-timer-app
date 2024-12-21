import { useState, useEffect } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
const NextYear = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const calculateCountdown = () => {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const targetDate = new Date(nextYear, 0, 1);
    const timeDifference = targetDate - today;
    if (timeDifference <= 0) return;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const date = targetDate.getDate();
    const month = targetDate.toLocaleDateString("default", { month: "long" });
    const year = targetDate.getFullYear();
    setDate(date);
    setMonth(month);
    setYear(year);
    setRemainingDays(days);
    setRemainingHours(hours);
    setRemainingMinutes(minutes);
    setRemainingSeconds(seconds);
  };
  useEffect(() => {
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-2 d-flex align-items-center gap-4">
        <p className="card-text">
          Countdown to Next Year
          <strong>
            <Link to={`how-many-days-until-${month?.toLowerCase()}-${date}`}>
              ({month} {date}, {year})
            </Link>
          </strong>
        </p>
        <div>
          <Timer
            days={remainingDays}
            hours={remainingHours}
            minutes={remainingMinutes}
            seconds={remainingSeconds}
          />
        </div>
      </div>
    </>
  );
};

export default NextYear;
