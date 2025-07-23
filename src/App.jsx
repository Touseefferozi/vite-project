import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import SplashCursor from "../Reatbits/SplashCursor/SplashCursor";  // Fixed typo in "Reactbits"
import CircularGallery from "../Reatbits/CircularGallery/CircularGallery";  // Fixed typo in "Reactbits"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SplashCursor />

      {/* <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div> */}
      <Footer />
    </>
  );
}

export default App;