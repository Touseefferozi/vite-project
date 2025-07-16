import { useState } from "react";
import firstImg from "../assets/Simpsons1_uxw7ji.png"; // Replace with your actual image path
import secondImg from "../assets/GREENportalImp.new_1_3_3_jykcsl.png"; // Replace with your actual image path
import thirdImg from "../assets/Ellipse_7_uxz08y.png"; // Replace with your actual image path
import fourthImg from "../assets/turn-me-family_xmefva.png";
import fiveImg from "../assets/turn-me-future_uh7oxf.png"; 
import sixImg from "../assets/turn-me-rick_nb6rpb.png";
import sevenImg from "../assets/turn-me-goku_f1pdnc.png"; // Replace with your actual image path
   
const images = [firstImg, secondImg, thirdImg];
export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="slider-container text-white bg-gradient-to-l from-amber-300 to-emerald-400
            py-10 min-h-screen  flex flex-col items-center justify-center mb-50"
    >
      <div className="  bg-gradient-to-b from-emerald-400 to-amber-400   w-150 h-150 rounded-full mr-80 -mt-30 text-shadow-lg ">
        <div className="slider relative w-[400%] max-w-3xl h-[400px]  rounded-full border-none overflow-hidden bg-Orange-300 pr-35 mt-23 ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-center "
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-100 h-100 shadow-md "
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black px-3  bg-transparent rounded-full hover:bg-gray-300 transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 mr-45 text-2xl text-black px-3   rounded-full hover:bg-gray-300 transition"
          >
            ›
          </button>
        </div>


      </div>

        <div >
          <h2 className="text-black font-bold text-7xl text-nowrap hover:text-amber-200  mr-80 font-stretch-100%  mt-20 ">
            Choose between <br /> popular cartoon styles!</h2>

          <p className="text-2xl mt-10 text-black " >Curious about how the customization is made?</p>
        </div>

            <div className="-mt-10 gap-7 pl-230 absolute flex flex-wrap justify-center items-center">
          <img  src={sevenImg} alt="" />  
          <img  src={sixImg} alt="" />  
          <img  src={fourthImg} alt="" />  
          <img  src={sevenImg} alt="" />  
          <img  className="w-60 h-30" src={fiveImg} alt="" />  
        </div>

        
    </div>
  );
}
