import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from '/images/about/about_img.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const section = document.querySelector(".aboutSec");
    if (!section) return;

    const elements = section.querySelectorAll(".fade-up");
    
    gsap.set(elements, { opacity: 0, y: 50, visibility: "hidden" });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.3,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".aboutSec",
        start: "top 60%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="aboutSec">
      <div className="aboutSec__wrapper">
        <div className="aboutSec__side">
          <div className="aboutSec__ttlWrap fade-up">
            <h2 className="aboutSec__ttl">Profile</h2>
          </div>
        </div>
        <div className="aboutSec__inner">
          <div className="aboutSec__innerWrap fade-up">
            <div className="aboutSec__content">
              <div className="aboutSec__nameCont">
                <p className="aboutSec__bigTxt">Phoebe</p>
                <div className="aboutSec__imgWrap">
                  <img src={img} alt="Phoebe Jao" className="aboutSec__img" />
                </div>
              </div>
              <p className="aboutSec__smallTxt">I am a Junior Frontend Web Developer based in the Philippines, born in 2000. I am passionate about building clean, responsive websites and constantly improving my skills in web development.</p>
            </div>
            <a href="/works" className="common__btn aboutSec__btn">See More</a>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default AboutSection;