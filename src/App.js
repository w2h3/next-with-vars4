import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Staff from "./Pages/staff/Staff";
import Staff1 from "./Pages/staff/1";
import Staff2 from "./Pages/staff/2";
import Staff3 from "./Pages/staff/3";
import Staff4 from "./Pages/staff/4";
import Works from "./Pages/works/Works";
import Services from "./Pages/services/Services";
import Service1 from "./Pages/services/1";
import Service2 from "./Pages/services/2";
import Service3 from "./Pages/services/3";
import Service4 from "./Pages/services/4";
import Products from "./Pages/products/Products";
import Product1 from "./Pages/products/1";
import Product2 from "./Pages/products/2";
import Product3 from "./Pages/products/3";
import Product4 from "./Pages/products/4";
import Product5 from "./Pages/products/5";
import Product6 from "./Pages/products/6";
import Product7 from "./Pages/products/7";
import Product8 from "./Pages/products/8";
import Product9 from "./Pages/products/9";
import Product10 from "./Pages/products/10";
import Product11 from "./Pages/products/11";
import Product12 from "./Pages/products/12";
import Product13 from "./Pages/products/13";
import Contact from "./Pages/contact/Contact";
import Projects from "./Pages/projects/projects";
import Exhibition1 from "./Pages/projects/ex/ex1";
import Exhibition2 from "./Pages/projects/ex/ex2";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/ArsenHovsepyan" element={<Staff1 />} />
        <Route path="/ArmenKhachatryan" element={<Staff2 />} />
        <Route path="/AshotGevorgyan" element={<Staff3 />} />
        <Route path="/KarenGrigoryan" element={<Staff4 />} />
        <Route path="/work" element={<Works />} />
        <Route path="/service" element={<Services />} />
        <Route path="/AutoServices" element={<Service1 />} />
        <Route path="/ITServices" element={<Service2 />} />
        <Route
          path="/MaintenanceOfCommunucationEquipment"
          element={<Service3 />}
        />
        <Route path="/TrainingAndTesting" element={<Service4 />} />
        <Route path="/products" element={<Products />} />
        <Route path="/AutoSpareParts" element={<Product1 />} />
        <Route path="/Helmets" element={<Product2 />} />
        <Route path="/UAV" element={<Product3 />} />
        <Route path="/TrackedVehiclesSpareParts" element={<Product4 />} />
        <Route path="/ArmorPlates" element={<Product5 />} />
        <Route path="/BulletprofVest" element={<Product6 />} />
        <Route path="/Cover" element={<Product7 />} />
        <Route path="/Optics" element={<Product8 />} />
        <Route path="/Accessories" element={<Product9 />} />
        <Route path="/Communication" element={<Product10 />} />
        <Route path="/NightVision" element={<Product11 />} />
        <Route path="/ThermalVision" element={<Product12 />} />
        <Route path="/Robots" element={<Product13 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/exhibition1" element={<Exhibition1 />} />
        <Route path="/exhibition2" element={<Exhibition2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
