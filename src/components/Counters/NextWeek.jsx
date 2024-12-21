import { useState, useEffect } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";

const NextWeek = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState("");

  useEffect(() => {
    const calculateNextMonday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + daysUntilNextMonday);
      nextMonday.setHours(0, 0, 0, 0);
      return nextMonday;
    };

    const nextMonday = calculateNextMonday();

    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextMonday - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Update state
      setDate(nextMonday.getDate());
      setMonth(nextMonday.toLocaleDateString("default", { month: "long" }));
      setRemainingDays(days);
      setRemainingHours(hours);
      setRemainingMinutes(minutes);
      setRemainingSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-2 d-flex align-items-center gap-4">
        <p className="card-text">
          Countdown to Next Week
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

export default NextWeek;
