const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <p className="">
        {days && (
          <>
            <span style={{ fontSize: "32px" }} className="text-primary">
              {days}
            </span>
            <span> days </span>
          </>
        )}
        <span style={{ fontSize: "32px" }} className="text-primary">
          {hours}
        </span>
        <span> hours </span>
        <span style={{ fontSize: "32px" }} className="text-primary">
          {minutes}
        </span>
        <span> minutes </span>
        <span style={{ fontSize: "32px" }} className="text-primary">
          {seconds}
        </span>
        <span> seconds </span>
      </p>
    </>
  );
};

export default Timer;
