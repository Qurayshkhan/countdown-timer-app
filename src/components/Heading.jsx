import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Heading({ heading }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-2">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleLeft}
                      className="text-danger"
                      onClick={() => navigate(-1)}
                    />
                  </a>
                  <p className="card-text text-capitalize">{heading}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
