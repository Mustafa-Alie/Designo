import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import useSyncTitle from "../utilities/useSyncTitle";
import AppFooter from "../components/AppFooter";
import useScrollToTop from "../utilities/useScrollToTop";

function MainLayout() {
  //custom hook to sync the title:
  useSyncTitle();

  //custom hook to scroll to the top:
  useScrollToTop();

  return (
    <>
      <AppNav />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}

export default MainLayout;
