import Transform from "./Transform";
import Banner from "./Banner";
import Slide from "./Slide";
import Slider from "./Slider";
import Gallery from "./Gallery";
import ThreeD from "./ThreeD";
import Vedio from "./Vedio";
import Options from "./Options";
import Meet from "./Meet";
import Discount from "./Descount";
function Home() {
  return (
    <div>
      <Banner />
      <Transform />
      <Slide />
      <Gallery />
      <Slider />
      <ThreeD/>
      <Vedio/>
    <Options/>
    <Meet/>
    <Discount/>    
    

    </div>
  );
}

export default Home;