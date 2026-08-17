import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import DataContextProvider from "../Store/DataContextProvider";

const Portfolio = () => {
  return (
    <DataContextProvider>
      <div className="mainContainer">
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </DataContextProvider>
  );
};

export default Portfolio;
