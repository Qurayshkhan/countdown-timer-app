import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");
  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  const [day, setDay] = useState(
    new Date().toLocaleDateString("default", { weekday: "long" })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState(new Date().getDate());
  const updateTime = () => {
    const now = new Date();
    const currentTime = [
      now.getHours().toString().padStart(2, "0"),
      ":",
      now.getMinutes().toString().padStart(2, "0"),
      ":",
      now.getSeconds().toString().padStart(2, "0"),
    ].join("");
    setTime(currentTime);
  };
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="mb-2">
      <p className="card-text">
        Current time is <span className="badge text-bg-secondary">{time}</span>.
        Todays date is <span className="mr-2">{day}</span> , {month} {date},{" "}
        {year}
      </p>
    </div>
  );
};

export default CurrentTime;
