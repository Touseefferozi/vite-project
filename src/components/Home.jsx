import Transform from "./Transform";
import Banner from "./Banner";
import Slide from "./Slide";
import Slider from "./Slider";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <Banner />
      <Transform />
      <Slide />
      <Slider />
      <Gallery />
    </div>
  );
}

export default Home;