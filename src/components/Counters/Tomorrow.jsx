import { useEffect, useState } from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
const Tomorrow = () => {
  const month = new Date().toLocaleDateString("default", { month: "long" });
  const date = new Date().getDate() + 1;

  const [remainingHours, setRemainingHours] = useState("");
  const [remainingMinutes, setRemainingMinutes] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState("");

  useEffect(() => {
    const updateDifference = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diffInMs = tomorrow - now;
      const hours = Math.floor(diffInMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      //!! set calculated time here
      setRemainingHours(`${hours.toString().padStart(2, "0")}`);
      setRemainingMinutes(`${minutes.toString().padStart(2, "0")}`);
      setRemainingSeconds(`${seconds.toString().padStart(2, "0")}`);
    };
    const intervalId = setInterval(updateDifference, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mb-2 card-text d-flex align-items-center gap-4">
        <p className="">
          Countdown to Tomorrow
          <strong>
            <Link to={`how-many-days-until-${month?.toLowerCase()}-${date}`}>
              ({month} {date})
            </Link>
          </strong>
        </p>
        <Timer
          hours={remainingHours}
          minutes={remainingMinutes}
          seconds={remainingSeconds}
        />
      </div>
    </>
  );
};

export default Tomorrow;
