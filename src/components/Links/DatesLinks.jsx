import dateLinks from "@js/data/daysLinks.json";
import { Link } from "react-router-dom";

function DatesLinks() {
  return (
    <section className="other-links">
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <h3>Related Countdown Timers</h3>
            <div className="mt-2">
              <div className="row">
                {dateLinks &&
                  dateLinks?.map((item, index) => {
                    return (
                      <div
                        className="col-md-6 mb-2 border-bottom pb-3"
                        key={index}
                      >
                        <Link to={item.link} target="_blank">
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DatesLinks;
