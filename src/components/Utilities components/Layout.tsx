import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
