import Toni from "../assets/Ellipse_7_uxz08y.png";
import ImagesStyle from "./ImagesStyle";


function Transform() {
  return (
    <div className=" flex flex-col justify-center items-center w-full bg-black text-white py-10 min-h-full">
      <h1 className="text-8xl font-bold text-center mt-38 ml-100 ">
        Let’s transform <br />
      </h1>
      <h1 className="text-8xl font-bold text-center -mt-2 ml-130  ">
        you into art
      </h1>

      <p className="text-center text-4xl font-bold mt-10 ml-110">
        Get yourself a hand-drawn character!
      </p>

      <p className="text-center text-base p-2.5 font-sans font-extrabold mt-8 ml-122 px-10 mb-117">
        What if autenticity isn’t dead? Those emblematic cartoons are famous for
        many reasons and people love them for what they represent, but what if
        we can offer you one more reason to enjoy them? The perfect gift for
        friends, family or yourself - a striking avatar, or just a bit of fun,
        let our skilled artists feed your curiosity and show you how anyone may
        look as a character for one of this animations. Ready? Let’s go!
      </p>

      <div className="mr-[697px] -mt-[956px] bg-amber-300 text-4xl rounded-full object-cover w-[400px] h-[400px] p-2.5 font-sans font-extrabold text-center">
        <img src={Toni} alt="" className="mt-38" />
      </div>

   
    <ImagesStyle/>
  
  
      
    </div>
  );
}

export default Transform;
