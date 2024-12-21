import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { monthByNumber, months } from "@js/data/months";
import { useNavigate } from "react-router-dom";

const DateForm = () => {
  const [dates, setDates] = useState([]);
  const [selectMonth, setSelectedMonth] = useState(1);
  const [selectDate, setSelectedDate] = useState(1);
  const navigate = useNavigate();

  const handleGetDaysInMonth = (month, year = new Date().getFullYear()) => {
    const date = new Date(year, month, 1);
    const days = [];

    setSelectedMonth(month);

    while (date.getMonth() === month) {
      const dateString = new Date(date).toLocaleDateString("en-GB");
      days.push(dateString.split("/")[0]);
      date.setDate(date.getDate() + 1);
    }

    setDates(days);
  };

  const handleStartTimer = (e) => {
    e.preventDefault();
    const monthName = monthByNumber[selectMonth];
    navigate(`/how-many-days-until-${monthName}-${selectDate}`);
  };
  return (
    <>
      <h4>Please select the date to start a countdown timer:</h4>
      <form onSubmit={handleStartTimer}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="">Select another date</label>
              <div className="row">
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    <select
                      name="month"
                      id=""
                      className="form-select"
                      onChange={(e) => {
                        handleGetDaysInMonth(Number(e.target.value) - 1);
                      }}
                    >
                      <option value="">Select Month</option>
                      {months &&
                        months?.map((month) => {
                          return (
                            <option value={month?.id} key={month?.id}>
                              {month.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <select
                    name="date"
                    id=""
                    className="form-select"
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="">Select Date</option>
                    {dates.length > 0 &&
                      dates.map((day, index) => {
                        return (
                          <option value={day} key={index}>
                            {day}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DateForm;
