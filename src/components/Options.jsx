import Digi from "../assets/quotes.a635bff8.png";
import shirt from "../assets/shirtDesign.ae2a0493.png";
import phone from "../assets/mobileCover.9c27fff0.png";
import cartoon from "../assets/bookCover.4576bcbd.png";
import Carousel from "../../Reatbits/Carousel/Carousel"; // ✅ Corrected import name

function Option() {
  return (
    <>
      <div className="bg-black text-white p-10 min-h-screen opacity-90 mt-70">
        {/* Gradient Circle */}
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-l from-amber-300 to-emerald-400 ml-28 -mt-20 flex justify-center items-center">
          {/* Optional Inner Content */}
        </div>

        {/* Black Circle with Shadow */}
        <div className="w-[600px] h-[600px] rounded-full bg-black shadow-xl shadow-amber-700/70 ml-220 -mt-40 flex justify-center items-center">
          {/* Optional Inner Content */}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center w-full -mt-90 ml-70">
          <h1 className="text-7xl font-bold text-center mt-10">
            <span className="text-emerald-400">O</span>
            pinions?
          </h1>
          <h1 className="text-5xl font-bold text-center mt-8 ml-40">
            <span className="text-gray-100 text-4xl">
              {" "}
              Sarah. 25 y.o, Architect <br />
              <p className="text-gray-500">
                {" "}
                West Virginia, United States
              </p>{" "}
            </span>
          </h1>
          <p className="text-center text-2xl mt-8 max-w-4xl mx-70">
            Through one of my favorite influencers on Instagram I became aware
            of Toonize. I am very happy with my artwork and would recommend the
            service to others.”
          </p>

     

        </div>

        {/*Image */}

        <div className="flex justify-center items-center mt-20">
          <img
            src={Digi}
            alt="Sarah"
            className=" w-[400px] h-[400px] object-cover -mt-100  -ml-30 opacity-40 "
          />
        </div>

        {/* right side image */}

        <div className="flex justify-center items-center mt-20 -ml-250">
          <img
            src={shirt}
            alt="Sarah"
            className=" w-[450px] h-[450px] object-cover -mt-220  ml-40  "
          />
        </div>


      <div className="flex justify-center items-center mt-100 -ml-250">
          <img
            src={phone}
            alt="Sarah"
            className=" w-[350px] h-[350px] object-cover -mt-220  ml-40  "
          />
        </div>

              <div className="flex justify-center items-center mt-80 -ml-250 ">
          <img
            src={cartoon}
            alt="Sarah"
            className=" w-[350px] h-[350px] object-cover -mt-220  ml-40  "
          />
        </div>


       <div style={{ height: '800px', position: 'relative' , marginTop: '-840px', marginLeft: '700px'}}>
            <Carousel
              baseWidth={500}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>

      </div>
    </>
  );
}

export default Option;
