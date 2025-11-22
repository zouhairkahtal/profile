import { Outlet } from "react-router-dom";

export function Layout() {
  return (
  
      <main className="overflow-y-scroll ">
        <Outlet />
      </main>
   
  );
}