import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import F3 from "../assets/F3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      role: "Apple"
    },
    {
      text:"First, solve the problem. Then, write the code.",
      author: "Muhammad Sadiq",
      role: "Software Developer"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      role: "Software Architect"
    },
    {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman",
      role: "Tech Lead"
    },
    {
      text: "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin",
      role: "Software Engineer"
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Martin Fowler",
      role: "Chief Scientist"
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
      role: "Developer"
    },
    {
      text: "Programming isn't about what you know; it's about what you can figure out.",
      author: "Chris Pine",
      role: "Software Engineer"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / 70);
      });
    }, 100);

    const quoteInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % quotes.length);
      setProgress(0);
    }, 7000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);
    };
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
    <>
    <div>
      {/* Header Section */}
  <section className="firstsection mt-3">
    <div className="firstdiv">
      <h1 className="text-center h1class mt-2 fw-bold" style={{fontSize: '72px', color: '#CFD0D0'}} >Hi, I'm</h1>
      <h1 className="text-center h2class fw-bold" style={{fontSize: '72px', color: '#767777'}} >Muhammad Sadiq</h1>
      <h1 className="text-center h3class text-white mt-4 fw-lighter" style={{fontSize: '30px'}} >Frontend Developer |</h1>
     <center>
      <hr className="classhr w-25 text-center h-25 fw-bold text-secondary"/>
     </center>
<div className="3col d-flex justify-content-evenly">
  <div className="1col"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >20+</h1></div>
  <div className="2col"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >12+</h1></div>
  <div className="3col"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >100+</h1></div>
</div>
<div className="4col d-flex justify-content-evenly mt-2">
  <div className="4col"><h1 className="text-uppercase" style={{ fontSize: '14px',color: '#787E89'}}>projects completed</h1></div>
  <div className="5col"><h1 className="text-uppercase" style={{fontSize: '14px',color: '#787E89'}}>technologies</h1></div>
  <div className="6col"><h1 className="text-uppercase me-4" style={{fontSize: '14px',color: '#787E89'}}>client satisfaction</h1></div>
</div> 
<div className="d-flex justify-content-center mt-5"> 
  <div className="rounded-4 p-4 shadow-lg border border-secondary card1" style={{ width: '400px', backgroundColor: '#0E1011', minHeight: '350px' }}>
    <div className="mb-4">
      <svg width="40" height="40" fill="#6c757d" viewBox="0 0 24 24" className="mb-3">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
      </svg>
      
      <div style={{ minHeight: '180px' }}>
        <p className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.6' }}>
          "{quotes[currentIndex].text}"
        </p>
        
        <div style={{lineHeight: '0', marginTop: '40px'}}>
          <p className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
            {quotes[currentIndex].author}
          </p>
          <p className="text-secondary" style={{ fontSize: '14px' }}>
            {quotes[currentIndex].role}
          </p>
        </div>
      </div>
    </div>
  <div className="mt-3 bg-secondary rounded-pill overflow-hidden" style={{ height: '4px' }}>
      <div 
        className="h-100"
        style={{ 
          width: `${progress}%`,
          background: 'white',
          transition: 'width 0.1s linear'
        }}
      />
    </div>   
    <div className="d-flex justify-content-between align-items-center mt-2">
      <span className="text-secondary" style={{ fontSize: '14px' }}>
        {currentIndex + 1} / {quotes.length}
      </span>
      <span className="text-secondary" style={{ fontSize: '14px' }}>
        Next in {Math.ceil((100 - progress) / (100 / 7))}s
      </span>
    </div>
    
   
  </div>
</div>
    </div>
  </section>

      {/* Recent Work Section */}
      <div className="Rw" id="projectpage">
        <div className="d-flex justify-content-center">
        <h4 style={{width: "100px"}} className="abcdef text-secondary text-center fs-6 rounded-pill py-2 px-2 w-10 mt-4">
         My Work
        </h4>
      </div>
          <h1 style={{fontSize: "60px"}} className="text-center mt-3 ms-5">Featured Projects
</h1>
        <p className="text-secondary fs-6 text-center px-3 px-md-0">
          I'm always excited to contribute to innovative projects if you're looking for someone to help bring your vision to life, I'd love to join your team.
        </p>

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
      <hr className="bg-light" />
      
      {/* Skills Section (Infinite Loop Carousel) */}
      <h2 className="text-secondary fs-3 ml-3 mb-4 text-center mt-3">Technologies I work with</h2>

      <div className="skills-carousel-container">
        <div className="skills-carousel">
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="skill-item">
              <img
              className="t"
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
      <hr className="bg-white" />
      
      <div className="d-flex justify-content-center">
        <h4 className="abcdef text-white text-center fs-5 rounded-pill py-2 px-3 w-10 mt-4">
          Lets Connect
        </h4>
      </div>
      
      <div id="contactpage">
        <h1 className="text-center mt-3">Get In Touch</h1>
        <p className="text-secondary fs-6 text-center px-3 px-md-0">
          I'm always excited to contribute to innovative projects if you're looking for someone to help bring your vision to life, I'd love to join your team.
        </p>
        <br />
        
        {/* Contact Cards - Responsive Layout */}
        <div className="d-flex justify-content-center gap-4 flex-column flex-md-row px-3 px-md-0">
          <div className="abcdef fs-5 py-2 px-3 mt-4 card-1 w-100" style={{ maxWidth: '400px', height: '240px' }}>
            <div 
              className="bg-secondary p-2 py-2 abcdefgh mt-4"
              style={{ width: "60px", height: "60px", borderRadius: '10px', marginLeft: '20px' }}
            >
              <MdOutlineEmail color="white" className="mt-2" style={{ fontSize: "30px", marginLeft: '6px' }} />
            </div>
            <div className="newone mt-4">
              <h5 className="text-white fs-5 firstone mt-4">Email me</h5>
              <h6 className="text-secondary fs-6 firstone mt-2">Drop me a text anytime</h6>
              <h5 className="text-white fs-5 firston mt-3">sadiqsiraj44@gmail.com</h5>
            </div>
          </div>

          <div className="abcdef fs-5 py-2 px-3 mt-4 card-1 w-100" style={{ maxWidth: '400px', height: '240px' }}>
            <div 
              className="bg-secondary p-2 py-2 abcdefgh mt-4"
              style={{ width: "60px", height: "60px", borderRadius: '10px', marginLeft: '20px' }}
            >
              <LuPhone color="white" className="mt-2" style={{ fontSize: "30px", marginLeft: '6px' }} />
            </div>
            <div className="newone mt-4">
              <h5 className="text-white fs-5 firstone">Call me</h5>
              <h6 className="text-secondary fs-6 firstone mt-2">Call me anytime</h6>
              <h5 className="text-white fs-5 firston mt-3">+92 315 2453522</h5>
            </div>
          </div>

          <div className="abcdef fs-5 py-2 px-3 mt-4 card-1 w-100" style={{ maxWidth: '400px', height: '240px' }}>
            <div 
              className="bg-secondary p-2 py-2 abcdefgh mt-4"
              style={{ width: "60px", height: "60px", borderRadius: '10px', marginLeft: '20px' }}
            >
              <FiMapPin color="white" className="mt-2" style={{ fontSize: "30px", marginLeft: '6px' }} />
            </div>
            <div className="newone mt-4">
              <h5 className="text-white fs-5 firstone">Visit me</h5>
              <h6 className="text-secondary fs-6 firstone mt-2">Come say hello</h6>
              <h5 className="text-white fs-5 firston mt-3">Pakistan, karachi</h5>
            </div>
          </div>
        </div>
        
        <br />
        <h3 className="text-center text-white mt-3" style={{ fontSize: '35px' }}>Connect on Social Media</h3>
        
        {/* Social Media Cards - Responsive Layout */}
        <div className="d-flex justify-content-center gap-4 flex-column flex-md-row px-3 px-md-0">
          <div className="abcdef fs-5 py-2 px-3 mt-4 card-1 w-100" style={{ maxWidth: '460px', height: '100px' }}>
            <a href="https://github.com/privsaaaa44" target="_blank" rel="noopener noreferrer">
              <div className="d-flex">
                <div 
                  className="bg-secondary p-2 py-2 abcdefgh mt-3"
                  style={{ width: "60px", height: "60px", borderRadius: '10px', marginLeft: '20px' }}
                >
                  <FiGithub color="white" className="mt-2" style={{ fontSize: "30px", marginLeft: '6px' }} />
                </div>
                <div className="newone mt-4 smallone">
                  <h5 className="text-secondary fs-6">Github</h5>
                  <h6 className="text-white fs-6 mt-2">@privsaaaa44</h6>
                </div>
                <div>
                  <BsBoxArrowUpRight color="gray" className="fs-6" style={{ marginTop: '35px' }} />
                </div>
              </div>  
            </a>
          </div>
          
          <div className="abcdef fs-5 py-2 px-3 mt-4 card-1 w-100" style={{ maxWidth: '460px', height: '100px' }}>
            <a href="https://github.com/privsaaaa44" target="_blank" rel="noopener noreferrer">
              <div className="d-flex">
                <div 
                  className="bg-secondary p-2 py-2 abcdefgh mt-3"
                  style={{ width: "60px", height: "60px", borderRadius: '10px', marginLeft: '20px' }}
                >
                  <FiLinkedin color="white" className="mt-2" style={{ fontSize: "30px", marginLeft: '6px' }} />
                </div>
                <div className="newone mt-4 smallone">
                  <h5 className="text-secondary fs-6">Linkedin</h5>
                  <h6 className="text-white fs-6 mt-2">@sadiq</h6>
                </div>
                <div>
                  <BsBoxArrowUpRight color="gray" className="fs-6" style={{ marginTop: '35px' }} />
                </div>
              </div>  
            </a>
          </div>
        </div>
      </div>
    </div>
  <style>
    {`
//   .card1:hover {
    
//   transform: scale(1.02);
// transition: all 0.3 ease;
    
//     }
 .card1 {
  position: relative;
  overflow: visible;
}

.card1:hover {
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.card1::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #dc3545;
  border-radius: 30px;
  pointer-events: none;
  clip-path: path('M 20,10 Q 100,5 200,20 T 380,30 Q 400,50 390,100 T 380,200 Q 350,250 300,260 T 100,250 Q 20,230 15,150 T 20,10 Z');
}

.card1:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  pointer-events: none;
  z-index: 1;
}  `}
  </style>
  </>
  );
};

export default Home;