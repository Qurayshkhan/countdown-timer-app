import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twentyFourHoursList } from "@js/helper";
import { minutesList } from "@js/helper";

const TimeTwentyFourHourForm = () => {
  const navigate = useNavigate();
  const hours = twentyFourHoursList();
  const minutes = minutesList();

  const [form, setForm] = useState({
    hours: 0,
    minutes: "00",
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
    navigate(`/how-long-until-${form.hours}-${form.minutes}`);
  };

  return (
    <>
      <h4>
        Please select the hour and minute(24-hour clock) to start a countdown
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
                              selected={item == 0}
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

export default TimeTwentyFourHourForm;
