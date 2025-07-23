import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import SplashCursor from "../Reatbits/SplashCursor/SplashCursor";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Optional SplashCursor */}
      <SplashCursor />

      {/* Carousel Section */}
     


      <Footer />
    </>
  );
}

export default App;
