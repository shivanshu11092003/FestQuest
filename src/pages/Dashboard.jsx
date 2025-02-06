import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar/SideBar";
function Dashboard() {
  const alert = () => {
    toast.error("Hello World");
  };
  return (
    <div className="flex h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
