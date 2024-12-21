import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Time from "./pages/Time";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HowManyDaysUntilTwentyThreeDecember from "./pages/RelatedCountdownDays/HowManyDaysUntilTwentyThreeDecember";
import HowLongUntil1am from "./pages/RelatedCountdownTimers/Format12Hours/HowLongUntil1am";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Days Count */}
        <Route
          path="/how-many-days-until-december-23"
          element={<HowManyDaysUntilTwentyThreeDecember />}
        />

        {/* Time Count */}

        <Route path="/how-long-until-1-00-am" element={<HowLongUntil1am />} />
        <Route path="/:slug" element={<Time />} />
      </Routes>
    </>
  );
}

export default App;
