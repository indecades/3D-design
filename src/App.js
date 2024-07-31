import Spline from "@splinetool/react-spline";
import Starfield from "react-starfield";
import TopBanner from "./components/banner.tsx";

export default function App() {
  return (
    <div>
      <TopBanner />
      <Spline scene="https://prod.spline.design/7R4H3NSb4rrOWPGi/scene.splinecode" />
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      ></Starfield>
    </div>
  );
}
