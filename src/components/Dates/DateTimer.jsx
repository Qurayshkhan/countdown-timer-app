const DateTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="w-100">
      {days != null && (
        <div className="how-many-days d-flex align-items-center justify-content-center text-center mb-4">
          <div className="days-bg p-5 rounded">
            <p className="fs-1">{days}</p>
            <p className="fs-3">Days</p>
          </div>
        </div>
      )}
      <div className="timer text-center">
        <div className="row">
          <div className="col-md-4 time">
            <p className="fs-1">{hours ?? "00"}</p>
            <p>Hours</p>
          </div>
          <div className="col-md-4 time">
            <p className="fs-1">{minutes ?? "00"}</p>
            <p>Minutes</p>
          </div>
          <div className="col-md-4 time">
            <p className="fs-1">{seconds ?? "00"}</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimer;
