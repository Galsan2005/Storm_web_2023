import Header from "./Header";
// import Category from "./Category"
// import DetailMain from "./DetailMain";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="w-[1091px] h-fit border-l-[1px] border-solid border-[#E2E8EE]">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
