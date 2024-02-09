import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Wrapper = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Wrapper;
