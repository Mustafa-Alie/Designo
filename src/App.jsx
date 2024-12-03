import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DesignLayout from "./layout/DesignLayout";
import OurCompany from "./pages/OurCompany";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraghicDesign";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<OurCompany />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="locations" element={<Locations />} />
          <Route element={<DesignLayout />}>
            <Route path="design/web-design" element={<WebDesign />} />
            <Route path="design/app-design" element={<AppDesign />} />
            <Route path="design/graphic-design" element={<GraphicDesign />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
