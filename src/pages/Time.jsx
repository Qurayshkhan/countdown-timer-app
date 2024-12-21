import { Link, useParams } from "react-router-dom";
import MasterLayout from "@js/layouts/MasterLayout.jsx";
import HowManyDaysUntil from "@js/components/RemainingDateAndTime/HowManyDaysUntil";
import { useState } from "react";
import HowLongUntil from "@js/components/RemainingDateAndTime/HowLongUntil";
import dateLinks from "@js/data/daysLinks.json";
import { Helmet } from "react-helmet";
import DatesLinks from "../components/Links/DatesLinks";
const Time = () => {
  const { slug } = useParams();
  const [showHowManyDaysUntil, setShowHowManyDaysUntil] = useState(
    slug.includes("how-many-days-until")
  );
  const [showHowLongUntil, setShowHowLongUntil] = useState(
    slug.includes("how-long-until")
  );
  const title = slug.split("-").join(" ");

  return (
    <>
      <MasterLayout>
        {/* Seo */}
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {showHowManyDaysUntil && <HowManyDaysUntil slug={slug} />}
        {showHowLongUntil && <HowLongUntil slug={slug} />}

        <DatesLinks />
      </MasterLayout>
    </>
  );
};

export default Time;
