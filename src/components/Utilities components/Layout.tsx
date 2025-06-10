import SideBar from "../SideBar";
import { Outlet } from "./Outlet";

export function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow px-4">
        <Outlet />
      </div>
    </div>
  );
}
