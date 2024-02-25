import About from "./components/About";
import AboutUS from "./components/AboutUS";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomePage } from "./components/HomePage";
import OurService from "./components/OurService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <>
      <Router>
        <Header />
        <About />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
        <Contact/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
