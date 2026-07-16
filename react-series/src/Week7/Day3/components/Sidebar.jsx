import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Admin Panel</h2>

      <nav>

        <Link to="/">Dashboard</Link>

        <Link to="/users">Users</Link>

        <Link to="/report">Reports</Link>

        <Link to="/settings">Settings</Link>

      </nav>

      <button className="logout-btn">
        Logout
      </button>

    </div>
  );
}

export default Sidebar;