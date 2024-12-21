import { useState, useEffect } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";

const NextMonth = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [month, setMonth] = useState("");
  const [date, setDate] = useState(0);

  const calculateCountdown = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear =
      currentMonth === 11
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    const nextMonthFirstDay = new Date(nextMonthYear, nextMonth, 1);
    const now = new Date();

    const timeDifference = nextMonthFirstDay - now;

    if (timeDifference <= 0) return;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const date = nextMonthFirstDay.getDate();
    const month = nextMonthFirstDay.toLocaleDateString("default", {
      month: "long",
    });

    // set date time
    setDate(date);
    setMonth(month);
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
          Countdown to Next Month
          <strong>
            <Link to={`how-many-days-until-${month?.toLowerCase()}-${date}`}>
              ({month} {date})
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

export default NextMonth;
