import LineImg from "../assets/neclace.116d1ed1.png";



function Vedio() {
  return (


<>



<div className="flex flex-col justify-center items-center w-full mt-80 -mx-45">
      <h1 className="text-6xl font-bold text-center mt-38 ml-100 ">
     ...and behind the scenes?
        </h1>
      <p className="text-center text-3xl  mt-10 ml-110">
     All Hand Drawn ! No generic software!
We use professional artists to hand-draw your portrait
      </p>
      </div>

    <div className="flex justify-center items-center w-full h-screen  ">
      <video controls
        className="w-170 h-100 object-cover border-2 border-gray-900 z-10"
   src="https://res.cloudinary.com/dapozvnbr/video/upload/v1600085765/Home/work_gpcg9w.mp4"
        autoPlay
        loop
        muted
      />
    </div>

        <div className=" -mt-180 mx-10 px-40 w-320 rotate-180 z-10 ">
            <img src={LineImg} alt="" />
          </div>

{/* right side half circle */}


        <div className="w-80 h-80  rounded-full bg-gradient-to-l from-amber-300 to-emerald-400 -mt-200 -mx-40">

          <div className="flex justify-center items-center h-full"/> 

          </div>


</>








    // text 

    

  );
}

export default Vedio;