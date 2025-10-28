import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ item, isLast, delay = 0 }) => {
  const itemRef = useRef(null);
  const bulletRef = useRef(null);
  const textRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay,
      });

      tl.from(bulletRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

      tl.from(textRefs.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.15,
        ease: "power2.out",
      });

      tl.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.4,
        ease: "power2.out",
      });

    }, itemRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div className="common__timelineItem" ref={itemRef}>
      <div className="common__timelineBullet" ref={bulletRef} />
      <div className="common__timelineTxtWrap">
        <h4 className="common__timelineTtl" ref={(el) => (textRefs.current[0] = el)}>{item.title}</h4>
        <p className="common__timelineSubTtl" ref={(el) => (textRefs.current[1] = el)}>{item.subtitle}</p>
        <span className="common__timelineTime" ref={(el) => (textRefs.current[2] = el)}>{item.period}</span>
        <p className="common__timelineTxt" ref={(el) => (textRefs.current[3] = el)}>{item.description}</p>
      </div>
      {!isLast && <div className="common__timelineLine" ref={lineRef} />}
    </div>
  )
}

export default TimelineItem;