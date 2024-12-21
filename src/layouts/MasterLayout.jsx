import Navbar from "@js/components/navbar/Navbar";
import Footer from "@js/components/Content/Footer";

function MasterLayout({ children }) {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="mt-3">{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MasterLayout;
