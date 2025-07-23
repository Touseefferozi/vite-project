import { ceil } from "three/tsl";
import LineImg from "../assets/neclace.116d1ed1.png";
import shadow from "../assets/Rectanglebg_utiph0.png";
import circle from "../assets/oval.95fb2cde.png";
import family from "../assets/family.a94526ff.png";
function ThreeD() {
  return (
<>
      <div className=" -mt-50 ml-40 px-40 w-250 ">
        <img src={LineImg} alt="" />
      </div>

      <div className=" -mt-200 ml-115 px-10 w-100 [h-32%] rounded-e-full">
        <img src={shadow} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center -mt-40 w-full bg-black -ml-70">
        <h1 className="text-4xl font-bold text-center -mt-100 ml-140 ">
          How it works?
          <br />
        </h1>

        <p className="text-center  font-bold mt-5 ml-150">
          Working with our team means 100% customer satisfaction. Our english
          speaking team pays attention to every tiny detail until the final
          drawing speaks for itself -
        </p>
        <h1 className="text-3xl font-bold  text-center ml-140 mt-3 ">
          Unlimited Revision Rounds
        </h1>

      </div>


     <div className="flex flex-col justify-center items-center w-full -mt-40 -ml-[301px]">
  <img className="w-30" src={circle} alt="" />


</div>

    <div className="flex flex-col justify-center items-center w-full -mt-50 ml-[301px]">
  <img className="w-30" src={circle} alt="" />


</div>


    <div className="flex flex-col justify-center items-center w-full mt-70 -ml-[40px]">
  <img className="w-30" src={circle} alt="" />


</div>


    <div className="flex flex-col justify-center items-center w-full -mt-80 -ml-[250px]">
  <img className="w-30" src={circle} alt="" />


</div>

    <div className="flex flex-col justify-center items-center w-full -mt-50 ml-[250px]">
  <img className="w-30" src={circle} alt="" />

</div>




    {/* family  */}

    <div className="flex flex-col justify-center items-center w-full -mt-80 -ml-[290px]">
        
        <img className="w-30" src={family} alt="" />

      </div>

          <div className="flex flex-col justify-center items-center w-full mt-20 ml-[280px]">
        
        <img className="w-30" src={family} alt="" />

      </div>

          <div className="flex flex-col justify-center items-center w-full -mt-80 ml-[290px]">
        
        <img className="w-30" src={family} alt="" />

      </div>


          <div className="flex flex-col justify-center items-center w-full mt-70 -ml-[30px]">
        
        <img className="w-30" src={family} alt="" />

      </div>

          <div className="flex flex-col justify-center items-center w-full -mt-80 -ml-[270px]">
        
        <img className="w-30" src={family} alt="" />

      </div>

</>



 
  );
}

export default ThreeD;
