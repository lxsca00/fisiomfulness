import { Outlet, Route, Routes } from "react-router-dom";
import MentalHealth from "./components/MentalHeath";
import PhysicalHealth from "./components/PhysicalHealth";
import ServiceContainer from "./ServicesContainer";
import NutritionalHealth from "./components/NutritionalHealth";

const ServicesPage = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route path="mental-health" element={<MentalHealth />} />
      <Route path="physical-health" element={<PhysicalHealth />} />
      <Route path="nutritional-health" element={<NutritionalHealth/>}/>
      <Route index element={<ServiceContainer/>}/>
    </Route>
  </Routes>
);

export { ServicesPage };
