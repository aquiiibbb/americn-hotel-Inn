import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Baird from "./pages/baird";
import Amenities from "./pages/amenities";
import Contact from "./pages/contact";
import Munday from "./pages/munday";
import Abilene from "./pages/abilene"; // ✅ fixed

import "./App.css";

function Layout() {
  const location = useLocation();

  const hideHeaderRoutes = ["/baird", "/munday", "/abilene"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abilene" element={<Abilene />} />
        <Route path="/baird" element={<Baird />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/munday" element={<Munday />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
