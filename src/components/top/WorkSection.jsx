import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxShowcase from "../ParallaxShowcase";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  useEffect(() => {
    const section = document.querySelector(".workSec");
    if (!section) return;

    const elements = section.querySelectorAll(".fade-up");
    
    gsap.set(elements, { opacity: 0, y: 50, visibility: "hidden" });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.3,
      ease: "power2.out",
      stagger: 0.2,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".workSec",
        start: "top 30%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="workSec">
      <div className="workSec__inner fade-up">
        <h2 className="workSec__ttl">Works</h2>
        <a href="/works" className="common__btn workSec__btn">See More</a>
      </div>
      <ParallaxShowcase />
    </section>
  )
}

export default WorkSection;