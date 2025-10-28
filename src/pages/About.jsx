import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/block/PageHeader";
import Timeline from "../components/block/Timeline";
import img from '/images/about/about_img.png';
import linkedin from '/images/about/about_linkedin.png';
import github from '/images/about/about_github.png';
import download from '/images/about/about_download.png';
import view from '/images/about/about_view.png';
import experienceData from "../data/experienceData";
import educationData from "../data/educationData";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      stagger: 0.7,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".aboutSec",
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
    <main className='siteContent aboutPage'>
      <section className="aboutSec">
        <PageHeader
          title='About'
          subtitle='My Profile'
        />
        <div className="aboutSec__inner">
          <div className="aboutSec__imgCont">
            <div className="aboutSec__imgWrap">
              <img src={img} alt="email" className="aboutSec__img" />
            </div>
          </div>
          <div className="aboutSec__content">
            <div className="aboutSec__cont">
              <h2 className="aboutSec__hd fade-up"><span>Junior Frontend Developer</span>Phoebe</h2>
              <p className="aboutSec__txt fade-up">
                Hello, my name is Phoebe Jao, a Junior Frontend Web Developer based in the Philippines. I am passionate about building clean, responsive websites and constantly improving my skills in web development. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning designs into functional digital experiences. I am eager to learn, grow, and contribute to innovative projects while honing my skills.</p>
              <div className="aboutSec__socialCont fade-up">
                <a href="https://www.linkedin.com/in/phoebe-jao-2b1548195" target="_blank" className="aboutSec__socialBtn">
                  <img src={linkedin} alt="linkedin" className="aboutSec__socialBtnImg" />
                </a>
                <a href="https://github.com/Phoebe-Jao" target="_blank" className="aboutSec__socialBtn">
                  <img src={github} alt="github" className="aboutSec__socialBtnImg" />
                </a>
              </div>
            </div>
            <div className="aboutSec__cont">
              <h3 className="aboutSec__ttl">
                <svg>
                  <text x="0%">Experience</text>
                </svg>
              </h3>
              <Timeline items={experienceData} />
            </div>
            <div className="aboutSec__cont">
              <h3 className="aboutSec__ttl">
                <svg>
                  <text x="0%">Education</text>
                </svg>
              </h3>
              <Timeline items={educationData} />
            </div>
            <div className="aboutSec__cont u-bdrTrs">
              <h3 className="aboutSec__ttl">
                <svg>
                  <text x="0%">CV</text>
                </svg>
              </h3>
              <div className="aboutSec__btnCont">
                <a href="/pdf/JAO-PHOEBE-CV-2025.pdf" download="/pdf/JAO-PHOEBE-CV-2025.pdf" target="_blank" className="aboutSec__btn">
                  <img src={download} alt="download" className="aboutSec__btnImg" />
                  Download
                </a>
                <a href="/pdf/JAO-PHOEBE-CV-2025.pdf" target="_blank" className="aboutSec__btn">
                  <img src={view} alt="download" className="aboutSec__btnImg" />
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;