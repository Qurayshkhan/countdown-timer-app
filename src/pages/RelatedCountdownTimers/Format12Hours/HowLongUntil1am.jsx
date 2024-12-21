import MasterLayout from "@js/layouts/MasterLayout.jsx";
import HowLongUntil from "@js/components/RemainingDateAndTime/HowLongUntil";
import { useLocation } from "react-router-dom";
function HowLongUntil1am() {
  const location = useLocation();
  const slug = location.pathname;

  return (
    <>
      <MasterLayout>
        <HowLongUntil slug={slug} />
      </MasterLayout>
    </>
  );
}

export default HowLongUntil1am;
