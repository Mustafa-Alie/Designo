import { Outlet } from "react-router-dom";
import useScrollToTop from "../utilities/useScrollToTop";

function DesignLayout() {
  useScrollToTop();
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DesignLayout;
