import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <div className="navbar">

          <h2>Admin Dashboard</h2>

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        <div className="page">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Layout;