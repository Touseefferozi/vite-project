import Main from "../assets/Done_Transparent_1_1_xkc2dg.png";

function Meet() {
  return (
    <>
      <div className="bg-gradient-to-l from-amber-300 to-emerald-400 h-200 w-full flex flex-col justify-center items-center -mt-35 absolute">
   <div className="flex justify-center mt-2 w-full ml-180 ">
  <div className="flex flex-col justify-center items-center w-1/2 h-full">
    <img src={Main} alt="Team Member 1" className="h-190 object-cover" />
  </div>
</div>

        {/* Heading */}
        <div className="-mt-150 mx-180 flex ml-10 ">
          <h1 className="text-8xl font-bold text-center ">
            Meet The <br />
            <span className="-ml-10">Amazing</span>
            
            <br />
            <span className="-ml-35">Artists</span>
            
          </h1>
        </div>

        <h4 className=" font-bold text-4xl -ml-150 mt-5 ">
          Meet the team with the skillest <br /> hands and most vivid vision.
        </h4>
        <p className=" text-2xl -ml-70 mt-5 px-100 mx-70">
          If you are curious and wish to know more about us, we are one call
          away! Also for any questions about the artists, check FAQ or contac
        </p>
        {/* button */}

        <div className="flex justify-center items-center mt-10 mr-220">
          <button
            className="bg-fuchsia-800 rounded-2xl text-white px-15 py-4 shadow-blue-600 text
            font-bold hover:bg-gradient-to-l from-fuchsia-600 to-fuchsia-950 transition duration-300"
          >
            See The Articts
          </button>
        </div>
      </div>
    </>
  );
}

export default Meet;
