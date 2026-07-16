import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Report from "./Report";
import Settings from "./Settings";
import "./App.css";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="users" element={<Users />} />
    <Route path="report" element={<Report />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
  );
}

export default App;