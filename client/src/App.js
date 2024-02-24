import About from "./components/About";
import AboutUS from "./components/AboutUS";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomePage } from "./components/HomePage";
import OurService from "./components/OurService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <About />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/ourservice" element={<OurService />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
