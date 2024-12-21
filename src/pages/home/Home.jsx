import CurrentTime from "@js/components/Counters/CurrentTime";
import Tomorrow from "@js/components/Counters/Tomorrow";
import MasterLayout from "@js/layouts/MasterLayout";
import NextWeek from "@js/components/Counters/NextWeek";
import NextMonth from "@js/components/Counters/NextMonth";
import NextYear from "@js/components/Counters/NextYear";
import { Helmet } from "react-helmet";
import DateForm from "./form/DateForm";
import TimeTwelveHourForm from "./form/TimeTwelveHourForm";
import TimeTwentyFourHourForm from "./form/TimeTwentyFourHourForm";

const Home = () => {
  return (
    <>
      <MasterLayout>
        {/* start seo */}
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        {/* end seo */}
        <section className="mb-5">
          <div className="card">
            <div className="card-body">
              <div className="p-3">
                <p className="card-text">
                  Welcome to Online Countdown Timer, 100% Free.
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <CurrentTime />
                  </div>
                  <div className="col-md-12">
                    <Tomorrow />
                  </div>
                  <div className="col-md-12">
                    <NextWeek />
                  </div>
                  <div className="col-md-12">
                    <NextMonth />
                  </div>
                  <div className="col-md-12">
                    <NextYear />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="card">
            <div className="card-body">
              <DateForm />
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="card">
            <div className="card-body">
              <TimeTwelveHourForm />
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="card">
            <div className="card-body">
              <TimeTwentyFourHourForm />
            </div>
          </div>
        </section>
      </MasterLayout>
    </>
  );
};

export default Home;
