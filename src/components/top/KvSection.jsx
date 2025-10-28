import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cloudImg from "/images/top/kv_cloud.png";

gsap.registerPlugin(ScrollTrigger);

const KvSection = () => {
  const allClouds = [
    { id: 1, top: "2.15%", left: "2.71%", size: 50.77 },
    { id: 2, top: "91.37%", left: "91.46%", size: 89.68 },
    { id: 3, top: "92.9%", left: "18%", size: 101.73 },
    { id: 4, top: "12.31%", left: "63.58%", size: 72.29 },
    { id: 5, top: "20.33%", left: "76.47%", size: 68.73 },
    { id: 6, top: "30.12%", left: "19.43%", size: 99.44 },
    { id: 7, top: "35.8%", left: "69.8%", size: 84.45 },
    { id: 8, top: "75.15%", left: "1.7%", size: 102.71 },
    { id: 9, top: "73.12%", left: "36.44%", size: 112.26 },
    { id: 10, top: "65.5%", left: "75.81%", size: 100.08 },
  ];

  const [clouds, setClouds] = useState(allClouds);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setClouds(
          allClouds
            .slice(0, 10)
            .map(({ id, top, left, size }) => ({
              id,
              top,
              left,
              size: size * 0.6,
            }))
        );
      } else {
        setClouds(allClouds);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".cloud").forEach((cloud, i) => {
      gsap.to(cloud, {
        x: 120 + i * 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".kvSec",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    const section = document.querySelector(".kvSec");
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
        trigger: ".kvSec",
        start: "top bottom",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  

  return (
    <section className="kvSec">
      <div className="kvSec__inner">
        <p className="kvSec__subTtl fade-up">Junior Frontend developer</p>
        <h1 className="kvSec__ttl fade-up">Phoebe</h1>
      </div>
      {clouds.map((c) => (
        <img
          key={c.id}
          className="cloud"
          src={cloudImg}
          style={{
            position: "absolute",
            top: c.top,
            left: c.left,
            width: c.size + "px",
            opacity: 0.8,
          }}
        />
      ))}
    </section>
  )
}

export default KvSection;