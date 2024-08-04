import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

export function AdminLayout() {
  return (
    <>
      <h1>admin</h1>
      <Outlet />
      <Navbar />
      <SideBar />
    </>
  );
}
