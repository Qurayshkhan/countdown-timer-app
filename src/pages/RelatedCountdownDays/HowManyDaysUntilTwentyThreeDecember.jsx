import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MasterLayout from "@js/layouts/MasterLayout.jsx";
import HowManyDaysUntil from "../../components/RemainingDateAndTime/HowManyDaysUntil";
function HowManyDaysUntilTwentyThreeDecember() {
  const location = useLocation();
  location.pathname;

  return (
    <MasterLayout>
      <HowManyDaysUntil slug={location.pathname} />
    </MasterLayout>
  );
}

export default HowManyDaysUntilTwentyThreeDecember;
