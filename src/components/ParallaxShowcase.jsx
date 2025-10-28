import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import workData from "../data/workData";

const ParallaxShowcase = () => {
  const showcase = workData.slice(0, 5);
  const circleStyles = [
    { size: 180, bottom: "-50rem", left: "15%" },
    { size: 140, bottom: "-75rem", left: "65%" },
    { size: 220, bottom: "-55rem", left: "77%" },
    { size: 100, bottom: "-60rem", left: "30%" },
    { size: 140, bottom: "-84rem", left: "21%" }
  ];

  return (
    <ParallaxProvider>
      <div className="workSec__parallax">
        {
          showcase.map((work, i) => (
          <Parallax
            key={i}
            speed={15 + i * 2}
          >
            <div
              className="workSec__parallaxCircle u-pcDb"
              style={{
                width: circleStyles[i].size,
                height: circleStyles[i].size,
                bottom: circleStyles[i].bottom,
                left: circleStyles[i].left,
                backgroundImage: `url(/images/work/${work.image})`
              }}
            ></div>
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  )
}

export default ParallaxShowcase;