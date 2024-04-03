import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function AppLayout() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] ">
      <Header />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
