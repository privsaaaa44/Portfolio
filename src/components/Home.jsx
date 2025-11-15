import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import F3 from "../assets/F3.png";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.svg";
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";
import { MdOutlineEmail } from "react-icons/md";

import muhammadsadiqcv from "../assets/muhammadsadiqcv.pdf";

// Projects
import Card from "react-bootstrap/Card";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

// Icons
import { FiArrowDownLeft } from "react-icons/fi";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const cardData = [
    { tag: "website", title: "E-commerce Store", subtitle: "Furniture Store", img: p1 },
    { tag: "website", title: "IJK MEDIA", subtitle: "Company Site", img: p2 },
  ];

  const skills = [
    { icon: s1 },
    { icon: s2 },
    { icon: s3 },
    { icon: s4 },
    { icon: s5 },
    { icon: s6 },
    { icon: s7 },
    { icon: s8 },
    { icon: s9 },
    { icon: s10 },
    { icon: s11 },
    { icon: s12 },
    { icon: s13 },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="sd-container text-center px-3 px-md-5" data-aos="fade-up">
        <h1 className="name">
          Sadiq
          <span>
            <img className="img1 ms-2 align-middle" src={F3} alt="F" />
            <span className="name ms-2">Siraj</span>
          </span>
        </h1>
        <p className="text-white mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          A front-end developer, UI designer, and all-around doodler who enjoys
          developing accessible, usable, and engaging websites & apps that bring
          your products to life.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a href={muhammadsadiqcv} download>
            <button className="btn btn-outline-light p-2 rounded-pill bac">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="Rw">
        <div className="d-flex justify-content-between align-items-center mt-5 mb-4 flex-wrap">
          <h2 className="text-white">Recent Work</h2>
          <h3 className="text-white">25 - Present</h3>
        </div>

        <div className="cards-grid">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`text-white custom-card custom-card-${index + 1}`}
              style={{ height: "20rem" }}
            >
              <Card.Img src={card.img || p1} alt="Card image" />
              <Card.ImgOverlay className="overlay-text d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <span className="text-white fs-5 bg-secondary rounded-pill py-1 px-3">
                    {card.tag}
                  </span>
                  <a href="#">
                    <FiArrowDownLeft color="gray" className="fs-1" />
                  </a>
                </div>
                <div className="overlay-bg p-2">
                  <Card.Text className="text-dark fw-bold">{card.title}</Card.Text>
                  <Card.Text className="text-dark fs-4 fw-bold">{card.subtitle}</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
          <div className="container">
            <div className="d-flex justify-content-center">
              <a href="#">
                <button className="btn btn-outline-light p-2 rounded-pill mt-4">
                  ALL WORKS
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
<br />
<br />
      {/* Skills Section (Infinite Loop Carousel) */}
      <h2 className="text-secondary fs-3 ml-3 mb-4 text-center mt-3 ">Technologies I work with</h2>

      <div className="skills-carousel-container">
        <div className="skills-carousel">
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="skill-item">
              <img
                src={skill.icon}
                alt={`skill-${idx}`}
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
<div className="d-flex justify-content-center">
  <h4  className="abcdef text-white text-center  fs-5    rounded-pill py-2 px-3 w-10 mt-4">
    Lets Connect
  </h4>

</div>
<h1 className="text-center mt-3">Get In Touch
</h1>
<p className="text-secondary fs-6">I’m always excited to contribute to innovative projects if you’re looking for someone to help bring your vision to life, I’d love to join your team.</p>
   <br />
   <div className="d-flex justify-content-center gap-4">
   <div className="abcdef fs-5 rounded py-2 px-3  mt-4 " style={{height: '200px', width: '380px'}}>
 <div 
  className="bg-secondary  p-2 rounded abcdefgh  "
  style={{ width: "50px", height: "50px" }}
>
  <MdOutlineEmail color="white"  style={{ fontSize: "25px", marginLeft: '4px'}} />
</div>

   </div>

   <div className="abcdef fs-5  rounded py-2 px-3  mt-4 " style={{height: '200px', width: '380px'}}>

   </div>
   <div className="abcdef fs-5  rounded py-2 px-3 mt-4 " style={{height: '200px', width: '380px'}}>

   </div>
   </div>
    </div>

  );
};

export default Home;
