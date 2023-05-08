import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import HomeContainer from "../pages/home/HomeContainer";
import About from "../pages/about/AboutContainer";
import { ServicesPage } from "../pages/services/ServicesPage";

//TODO: Errors Routes

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPublic />}>
          <Route path="/" index element={<HomeContainer />} />
          <Route path="about" element={<About />} />
          <Route path="services/*" element={<ServicesPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
