import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSyncTitle() {
  const currLocation = useLocation();

  useEffect(() => {
    switch (currLocation.pathname) {
      case "/":
        document.title = "Designo | Home";
        break;

      case "/about":
        document.title = "Designo | About";
        break;

      case "/contact":
        document.title = "Designo | Contact";
        break;

      case "/location":
        document.title = "Designo | Location";
        break;

      case "/design/web-design":
        document.title = "Designo | Web Design";
        break;

      case "/design/app-design":
        document.title = "Designo | App Design";
        break;

      case "/design/graphic-design":
        document.title = "Designo | Graphic Design";
        break;

      default:
        document.title = "Designo";
    }
  }, [currLocation]);
}

export default useSyncTitle;
