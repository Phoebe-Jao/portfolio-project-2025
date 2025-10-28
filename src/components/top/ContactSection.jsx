import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mail from '/images/top/contact_mail.png';

const ContactSection = () => {
  const user = "jaophoebe";
  const domain = "email.com";
  const emailLink = document.querySelector('.js-email');
  if (emailLink) {
    emailLink.href = `mailto:${user}@${domain}`;
  }

  const leftBnr = useRef(null);
  const rightBnr = useRef(null);

  useEffect(() => {
    const leftEl = leftBnr.current;
    const rightEl = rightBnr.current;

    const leftWidth = leftEl.offsetWidth / 2;
    const rightWidth = rightEl.offsetWidth / 2;

    gsap.to(leftEl, {
      x: `-=${leftWidth}`,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % leftWidth),
      },
    });

    gsap.to(rightEl, {
      x: `+=${rightWidth}`,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => {
          const val = parseFloat(x);
          const wrapped = ((val + rightWidth) % rightWidth) - rightWidth;
          return wrapped;
        }),
      },
    });


    const section = document.querySelector(".contactSec");
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
        trigger: ".contactSec",
        start: "top 70%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="contactSec" id="CONTACT">
      <div className="contactSec__inner">
        <span className="contactSec__bnr" ref={leftBnr}>CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT</span>
        <h2 className="contactSec__ttl fade-up">
          <svg>
            <text x="50%">
              Contact
            </text>
          </svg>
        </h2>
        <p className="contactSec__txt fade-up">Want to reach out? Just drop me an email!</p>
        <img src={mail} alt="email" className="contactSec__img fade-up" />
        <a href="mailto:jaophoebe@gmail.com" className="contactSec__btn common__btn js-email fade-up">Email Me</a>
        <span className="contactSec__bnr" ref={rightBnr}>CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT</span>
      </div>
    </section>
  )
}

export default ContactSection;