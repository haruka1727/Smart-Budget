import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
