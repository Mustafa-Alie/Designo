import { createBrowserRouter } from "react-router-dom";

//Layouts:
import MainLayout from "./layout/MainLayout";
import DesignLayout from "./layout/DesignLayout";

//Pages:
import Error from "./pages/Error";
import OurCompany from "./pages/OurCompany";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraghicDesign";

//define React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <OurCompany />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        element: <DesignLayout />,
        children: [
          {
            path: "design/web-design",
            element: <WebDesign />,
          },
          {
            path: "design/app-design",
            element: <AppDesign />,
          },
          {
            path: "design/graphic-design",
            element: <GraphicDesign />,
          },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
