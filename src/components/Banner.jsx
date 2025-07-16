
import React from 'react';
import Home from '../assets/home_i1wlpb.png';
import Green from '../assets/GREENportalImp.new_1_3_3_jykcsl.png';


function Banner () {
  return (
    <div className="banner">
    {/* <div className=" text-white p-4 text-center"> */}
      <h1 className="text-2xl font-bold">Cartoonize <br /> Yourself</h1>
        <p className="mt-2">No generated animations!Enjoy <br /> an artist’s personalized work of you!</p>
       

   <img  src={Home} alt="App Logo" className="b-img w-48 mx-auto" />
   <img  src={Green} alt="App Green" className="b-img image w-48 mx-auto" />

    </div>
    
    // </div>
  );
}
export default Banner;