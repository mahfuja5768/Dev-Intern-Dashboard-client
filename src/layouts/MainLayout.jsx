import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
        <div className="font-inter relative min-h-screen  bg-[#F8F8F8;]">
      <Sidebar></Sidebar>
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
 
  );
};

export default MainLayout;
