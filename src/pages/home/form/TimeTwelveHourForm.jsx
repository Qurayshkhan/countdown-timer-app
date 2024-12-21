import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twelveHoursList } from "@js/helper";
import { minutesList } from "@js/helper";

const TimeTwelveHourForm = () => {
  const navigate = useNavigate();
  const hours = twelveHoursList();
  const minutes = minutesList();

  const [form, setForm] = useState({
    hours: 12,
    minutes: "00",
    meridiem: "am",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/how-long-until-${form.hours}-${form.minutes}-${form.meridiem}`);
  };

  return (
    <>
      <h4>
        Please select the hour and minute(12-hour clock) to start a countdown
        timer:
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="">Select time</label>
              <div className="row">
                <div className="col-md-3">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    <select
                      name="hours"
                      id=""
                      className="form-select"
                      onChange={handleChange}
                    >
                      {hours &&
                        hours.map((item) => {
                          return (
                            <option
                              value={item}
                              key={item}
                              selected={item == 12}
                            >
                              {item}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    name="minutes"
                    id=""
                    className="form-select"
                    onChange={handleChange}
                  >
                    {minutes.map((item) => {
                      return (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    name="meridiem"
                    id=""
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
                <div className="col-md-3">
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

export default TimeTwelveHourForm;
