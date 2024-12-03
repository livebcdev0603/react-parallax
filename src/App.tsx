import layer1 from "./assets/layer-01.png";
import layer2 from "./assets/layer-02.png";
import layer3 from "./assets/layer-03.png";
import layer4 from "./assets/layer-04.png";
import layer5 from "./assets/layer-05.png";
import layer6 from "./assets/layer-06.png";
import layer7 from "./assets/layer-07.png";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";

function App() {
  let element: IParallax | null;
  const [buttonMessage, setButtonMessage] = useState("Down");

  const handleClick = () => {
    // Change the button text to Down and
    // send the the user to the end of the page.
    if (buttonMessage === "Down") {
      setButtonMessage("Up");
      element?.scrollTo(2);
    }
    // Change the button text to Up and
    // send the the user to the top of the page.
    if (buttonMessage === "Up") {
      setButtonMessage("Down");
      element?.scrollTo(0);
    }
  };

  return (
    <div className={"w-full h-full"}>
      <Parallax pages={1.45} ref={(ref) => (element = ref)}>
        {/* Layer 7 */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${layer7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 6 */}
        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 5 */}
        <ParallaxLayer
          offset={0.9999}
          speed={1.5}
          factor={1.1}
          style={{
            backgroundImage: `url(${layer5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 4 */}
        <ParallaxLayer
          offset={0.9999}
          speed={3}
          factor={2.1}
          style={{
            backgroundImage: `url(${layer4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 3 */}
        <ParallaxLayer
          offset={0}
          speed={2}
          factor={4}
          style={{
            backgroundImage: `url(${layer3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 2 */}
        <ParallaxLayer
          offset={0.87}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${layer2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 1 */}
        <ParallaxLayer
          offset={0.9}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${layer1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Button */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          speed={10}
          factor={1}
          onClick={() => handleClick()}
        >
          <div className="w-screen h-screen   flex font-bold items-center justify-center">
            <div className="w-2/6 py-8 text-center rounded backdrop-blur-sm backdrop-grayscale bg-violet/30 border-2 border-white cursor-pointer">
              <h1 className="text-6xl text-violet-600">{buttonMessage}</h1>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
