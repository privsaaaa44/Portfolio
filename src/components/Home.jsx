import React, { useEffect, useState, useRef } from "react";
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
import Snowfall from 'react-snowfall';
import {Code,Layers,Database,Server,Phone,Mail,MapPin,Globe,Github,Linkedin,Download} from 'lucide-react'

// Assets
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.svg";
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";
import s14 from "../assets/s14.png";
import s15 from "../assets/s15.png";
import s16 from "../assets/s16.png";
import s17 from "../assets/s17.png";
import s18 from "../assets/s18.svg";
import s19 from "../assets/s19.png";
import s20 from "../assets/s20.png";
import s21 from "../assets/s21.png";
import s22 from "../assets/s22.png";
import { MdOutlineEmail } from "react-icons/md";

import MuhammadSadiqResume from "../assets/MuhammadSadiqResume.pdf";

// Projects
import Card from "react-bootstrap/Card";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

// Icons
import { FiArrowDownLeft } from "react-icons/fi";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
const [visibleWords, setVisibleWords] = useState(new Set());
const scrollTextRef = useRef(null);
const [isTyping, setIsTyping] = useState(false);
const scrollText = "They say a jack of all trades is a master of none, but I'm more like a full-stack magician, crafting stunning frontends with one hand while fluidly architecting robust backends with the other. My code doesn't just work—it dazzles! Half artist, half engineer, 100% caffeine-powered problem solver.";
const [scrollWords] = useState(() => scrollText.split(' ').filter(word => word.trim()));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
}, []);

useEffect(() => {
  AOS.refresh();
}, [currentIndex]);
useEffect(() => {
  setIsTyping(true);
  let wordIndex = 0;
  const newVisible = new Set();
  
  const typingInterval = setInterval(() => {
    if (wordIndex < scrollWords.length) {
      newVisible.add(wordIndex);
      setVisibleWords(new Set(newVisible)); // Fresh Set har baar
      wordIndex++;
    } else {
      setIsTyping(false);
      clearInterval(typingInterval);
    }
  }, 150);

  return () => clearInterval(typingInterval);
}, [scrollWords]);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / 70);
      });
    }, 300);

    const quoteInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % quotes.length);
      setProgress(0);
    }, 7000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardData = [
    { tag: "website", title: "E-commerce Store", subtitle: "Furniture Store", img: p1 },
    { tag: "website", title: "IJK MEDIA", subtitle: "Company Site", img: p2 },
  ];

  const skills = [
   { icon: s1, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, // HTML5
  { icon: s2, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, // CSS
  { icon: s4, link: "https://getbootstrap.com/" }, // Bootstrap
  { icon: s3, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }, // JavaScript
  { icon: s5, link: "https://www.javascript.com/" }, // JS
  { icon: s6, link: "https://reactjs.org/" }, // React
  { icon: s7, link: "https://tailwindcss.com/" }, // Tailwind (the wave icon)
  { icon: s8, link: "https://www.shopify.com/" }, // Shopify
  { icon: s9, link: "https://wordpress.org/" }, // WordPress
  { icon: s10, link: "https://elementor.com/" }, // Elementor
  { icon: s21, link: "https://woocommerce.com/" }, // WooCommerce
  { icon: s11, link: "https://www.microsoft.com/en-us/edge" }, // Edge
  { icon: s12, link: "https://git-scm.com/" }, // Git
  { icon: s13, link: "https://github.com/" }, // GitHub
  { icon: s14, link: "https://claude.ai/chat" }, // Figma
  { icon: s15, link: "https://github.com/copilot/" }, // Photoshop
  { icon: s16, link: "https://www.figma.com/" }, // VS Code
  { icon: s17, link: "https://www.canva.com/" }, // NPM
  { icon: s18, link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-office" }, // Edge (duplicate)
  { icon: s19, link: "https://developers.google.com/search" }, // SEO
  { icon: s20, link: "https://woocommerce.com/" }, // Illustrator
  { icon: s22, link: "https://www.mysql.com/" }, // Illustrator

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
<div className="d-flex justify-content-evenly mt-5"> 
<div className="rounded-4 p-4 shadow-lg border border-dark card1" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px' }}>
  <div className="mb-4">
    <svg width="50" height="50" fill="#6c757d" viewBox="0 0 24 24" className="">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </svg>
    
    <div style={{ minHeight: '180px' }}>
      <div 
        key={currentIndex} 
        data-aos="fade-up"
        data-aos-duration="600"
      >
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
  <div className="rounded-4 p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px' }}>
    <div className="mt-3" style={{minHeight: '180px'}}>
<div className="aboutmeheading text-center rounded-pill mx-auto" style={{background: '#292A2A', width: 'fit-content'}}>
  <h3 className="aboutmeheadingh3 text-capitalize py-2 px-3 m-0" style={{fontSize: '14px', color: '#BFBEC0'}}>About Me</h3>
</div>
<h4 className="abouth4heading text-white text-center fw-bold fs-4" style={{marginTop: '30px'}}>Passionate Developer & Problem Solver</h4>
<p 
  className="aboutpheading ms-1 me-1 w-100 lh-base text-center" 
  style={{
    fontSize: '14px', 
    color: '#9CA3AF',
    fontWeight: '300',
    letterSpacing: '0.3px'
  }}
>
  I'm a full-stack developer who loves turning complex problems into elegant solutions. With a keen eye for detail and a passion for clean code, I create seamless digital experiences that make a difference.
</p>
<svg width="60" height="60" viewBox="0 0 24 24" className="dotsimageicon mt-2"  style={{
    animation: 'pulse 2s ease-in-out infinite',
    transform: 'translateY(17px)'  // Neeche shift ho jayega
  }}>
  <circle cx="6" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0s'}}/>
  <circle cx="12" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0.2s'}}/>
  <circle cx="18" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0.4s'}}/>
  
  <style>{`
    @keyframes blink {
      0%, 80%, 100% { opacity: 0.3; }
      40% { opacity: 1; }
    }
  `}</style>
</svg>
    </div>
   
  
    
   
  </div>
<div className="rounded-4 p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', position: 'relative', overflow: 'visible' }}>
  {/* Glow effect behind 1+ */}
  <div style={{
    position: 'absolute',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(100, 100, 100, 0.4) 0%, rgba(80, 80, 80, 0.2) 30%, transparent 60%)',
    filter: 'blur(50px)',
    borderRadius: '50%',
    zIndex: 0
  }}></div>

<div style={{
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '279px',
  right: '20px',
  zIndex: '1',
  left: '18px',
  transform: 'rotate(180deg)',
}}>

    {/* Top horizontal line */}
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '50px',
      height: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '1px'
    }}></div>
    {/* Right vertical line */}
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '2px',
      height: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '1px'
    }}></div>
  </div>

  {/* Right top icon - L shape corner */}
  <div style={{
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    zIndex: 1
  }}>
    {/* Top horizontal line */}
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '50px',
      height: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '1px'
    }}></div>
    {/* Right vertical line */}
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '2px',
      height: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '1px'
    }}></div>
  </div>

  <div className="mt-4" style={{ position: 'relative', zIndex: 2 }}>
    <div className="carddiv3">
      <h1 className="cardheading3 text-center" style={{fontSize: '96px'}}>1+</h1>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-white mb-3" style={{fontSize: '24px', fontWeight: '600'}}>
        Years of Experience
      </h2>
      <p className="text-secondary" style={{fontSize: '14px', lineHeight: '1.6'}}>
        Building scalable applications and crafting exceptional user experiences
      </p>
    </div>
  </div>
</div>
</div>
    </div>
  </section>

    
<div className="skill section">
  <br />
  <hr className="bg-dark mt-2" />
  <br /> 
  
  <style>
    {`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }
    `}
  </style>
  
  {/* Skills Section (Infinite Loop Carousel) */}
  <h2 className="text-secondary ml-3 mb-4 text-center mt-3 text-uppercase" style={{fontSize:'14px'}}>
    Technologies I work with
  </h2>

  <div style={{
    overflow: 'hidden',
    width: '100%',
    color: '#0a0a0a'
  }}>
    <div style={{
      display: 'flex',
      gap: '19px',
      animation: 'scroll 20s linear infinite',
      width: 'fit-content'
    }}>
{[...skills, ...skills,...skills,...skills].map((skill, idx) => (
        <div key={idx} style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          width: '72px',
          height: '72px'
        }}>
          <a 
            href={skill.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px'
            }}
          >
            <img
              className="t"
              src={skill.icon}
              alt={`skill-${idx}`}
              style={{ 
                width: "100%", 
                height: "100%", 
                maxWidth: "48px",
                maxHeight: "48px",
                objectFit: "contain",
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
  
  <br />
  <hr className="bg-white" />
</div>
<br />
<div className="shortintroabout mt-3" >
  <div className="icons d-flex justify-content-center gap-3">
    <Code width={30} height={30}/>
    <Layers width={30} height={30}/>
    <Database width={30} height={30}/>
    <Server width={30} height={30}/>
  </div>
  
  <div 
    className="py-5"
    style={{ minHeight: '60vh' }}
  >
    <div className="shortintroaboutcontainer" style={{marginBottom: '150px'}}>
<div className="text-justify lh-1 fw-light mx-4" style={{ fontSize: '60px', color: '#fff', margin: '0px', padding: '0px' }}>
  {scrollWords.map((word, index) => (
    <React.Fragment key={index}>
      {word.trim() ? (
        <>
          <span
            style={{
              display: 'inline',
              opacity: visibleWords.has(index) ? 1 : 0,
              transition: 'opacity 0.2s ease'
            }}
          >
            {word}
          </span>
          {index < scrollWords.length - 1 && ' '}
          {isTyping && index === visibleWords.size - 1 && (
            <span className="typing-cursor" />
          )}
        </>
      ) : null}
    </React.Fragment>
  ))}
</div>
    </div>
  </div>
</div>
<section className="resumesection">
  <div className="animationresumespecificsection" data-aos="fade-up">
<div className="d-flex justify-content-center">
  <div className="resumesectiondiv resumesectiondiv text-center rounded-pill d-flex justify-content-center border border-dark" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#BFBEC0'}}>My Resume</h3>
 
  </div>
</div>
<h1 className="text-white  resumesectionh1 text-center mt-3 fw-bold" style={{fontSize: '48px'}}>Professional Experience</h1>
<p className="text-secondary resumesectionp mt-3" style={{ fontSize: '18px'}}>A comprehensive overview of my skills, experience, and achievements</p>
</div>
<br />
<div className="d-flex justify-content-center resumesectionresumediv mt-5 ">
  <div className="resumesectionresume d-flex rounded-4 overflow-hidden border border-dark" style={{ width: '1200px', height: '260vh', }}>
    <div className="firstcolumn p-3 py-4 px-4" style={{ width: '30%', backgroundColor: '#191919'}} > 
      <div className="contactinfo mt-2" data-aos="fade-up"> 
        <div className="firstone fs-5 text-white fw-bold">
          <Mail className="text-light me-2" width={16} height={16} />
            Contact
      </div>    
        <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="mailto:sadiqsiraj44@gmail.com" target="_blank">
          <Mail className="me-2" width={14} height={14} />   
           <span className="contactinfospan text-secondary fs-6 fw-light">sadiqsiraj44@gmail.com</span>
      </a>
       </div>
        <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://wa.me/923152453522" target="_blank">
          <Phone className="me-2" width={14} height={14} />

           <span className="contactinfospan text-secondary fs-6 fw-light">+923152453522</span>
      </a>
       </div>
        <div className="fourthone mt-2 secondoneallofit">
                <a className="text-secondary">
          <MapPin className="me-2 text-seondary" width={14} height={14} />

           <span className="contactinfospan text-secondary fs-6 fw-light">Pakistan</span>
      </a>
       </div>
   
      </div>
      <div className="linkinfo mt-4" data-aos="fade-up"> 
        <div className="firstone fs-5 text-white fw-bold">
          <Globe className="text-light me-2" width={16} height={16} />
          Links
      </div>    
        <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://github.com/privsaaaa44" target="_blank">
          <Github className="me-2" width={14} height={14} />   
           <span className="contactinfospan text-secondary fs-6 fw-light">github.com/privsaaaa44</span>
      </a>
       </div>
        <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b" target="_blank">
          <Linkedin className="me-2" width={14} height={14} />

           <span className="contactinfospan text-secondary fs-6 fw-light">linkedin.com/in/muhammad-sadiq</span>
      </a>
       </div>
   
   
      </div>
     <div className="technicalinfo mt-4" ref={sectionRef}> 
      <div className="firstone fs-5 text-white fw-bold">
        <Code className="text-light me-2" width={16} height={16} />
        Technical Skills
      </div>    
      <div className="skillssection">
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              JavaScript
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              65%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '65%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              React
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              75%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '75%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.1s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              Wordpress
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              50%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '50%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.2s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              SEO
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              80%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '80%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.3s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              Figma/Canva 
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              90%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '90%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.4s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              My SQL 
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              85%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '85%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.5s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              Shopify
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              65%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '65%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.6s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              Bootstrap/Tailwind CSS
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              95%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '95%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.7s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              XML/JSON
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              99%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '99%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.8s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              MS office
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              95%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '95%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 0.9s'
              }}
            ></div>
          </div>
        </div>
        <div className="skill-container"> 
          <div className="skillheader text-secondary mt-2" style={{fontSize: '14px'}}>
            <span className="skillname fw-lighter">
              Git/GitHub
            </span>
            <span className="skillpercentage" style={{float: 'right'}}>
              90%
            </span>
          </div>
          <div 
            className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden"
            style={{height: '8px'}}
          >  
            <div 
              className="progressfill h-100 rounded-2" 
              style={{
                backgroundColor: '#B7B7B7',
                width: isVisible ? '90%' : '0%',
                height: '100%',
                transition: 'width 1s ease-out 1s'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>

          <div className="linkinfo mt-4"> 
        <div className="firstone fs-5 text-white fw-bold">
         Soft Skills
      </div>    
      <div className="softskills">
<div className="firstsoftskill mt-2 d-flex flex-wrap gap-2"> 
  <span 
    className="text-secondary fw-lighter rounded-5 border border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232'}}
  >
    Problem Solving
  </span>
  <span 
    className="text-secondary fw-lighter rounded-5 border border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232'}}
  >
    Team Collaboration
  </span>
</div>
<div className="secondsoftskill mt-2 d-flex flex-wrap gap-2"> 
  <span 
    className="text-secondary fw-lighter rounded-5 border border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232'}}
  >
   Communication
  </span>
  <span 
    className="text-secondary fw-lighter rounded-5 border border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232'}}
  >
Adaptability
  </span>
</div>
<div className="thirdsoftskill mt-2 d-flex flex-wrap gap-2"> 

  <span 
    className="text-secondary fw-lighter rounded-5 border border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232'}}
  >
Time Management
  </span>
</div>
        </div>   
<button 
  onClick={() => {
    const link = document.createElement('a');
    link.href = MuhammadSadiqResume;
    link.download = "Muhmmad Sadiq - Resume";
    link.click();
  }}
  className="resumesectionbutton fw-bold btn-light rounded-pill mt-4 w-100 bg-white border-0" 
  style={{
    fontSize: '13px', 
    padding: '11px 20px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    fontWeight: '500',
    cursor: 'pointer'
  }}
>
  <Download className="me-2" width={16} height={16} strokeWidth={2}/>
  <span className="text-dark">Download Resume</span>
</button>     </div>
    </div>
    <div className="secondcolumn border-start border-dark  p-3 py-4 px-4 ps-4 pt-4" style={{ width: '70%', backgroundColor: '#0D0D0D', }} >
        <div className="into ">
<h1 className="intodivh1 fs-4 text-white fw-bold">Introduction</h1>
<hr style={{background:'#FF0000'}} />
  </div>
    </div>


  </div>
</div>

<br />
<br />
<br />
<br />
<br />
</section>
      {/* <br />
      <br />
      <br />
      <br /> 
      <div style={{
    position: 'absolute',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(100, 100, 100, 0.4) 0%, rgba(80, 80, 80, 0.2) 30%, transparent 60%)',
    filter: 'blur(50px)',
    borderRadius: '50%',
    zIndex: 0
  }}></div>
      <div className="d-flex justify-content-center mt-5">
             <Snowfall
        style={{
        position: 'absolute',
          width: '50vh',
          height: '50vh',
          zIndex: 1000,
          top: '90%'
        }}
        snowflakeCount={200}
      />
        <h4 className="abcdef text-center border border-dark  rounded-pill py-2 px-3 w-10 mt-4 fw-light" style={{fontSize: '14px', color: '#978f8f'}}>
          Let's Connect
        </h4>
      </div>
       */}
    
    </div>
  <style>
    {`
    .card2 {
    position: relative;
    overflow: visible;
    }
  .card2:hover {
  transform: scale(1.02);
transition: all 0.3 ease;
    
    }
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
}
.emailicon {
margin-top: 8px !important;

}
  
  // canvas {
  //     pointer-events: none !important;
  //   background-color: #fff3f300 !important;
  //   position: absolute !important;
  //   top: 218% !important;
  //   left: 0px;
  //   width: 100% !important;
  //   height: 140vh !important;
  //   cursor: pointer;
  //   font-size: 0px !important;
  // }
  canvas {
    top: 218% !important;
  
      width: 1361px !important;
    height: 800px !important;
    user-select: none !important;
        vertical-align: middle !important;
    display: block !important;
    outline-color: 
 color-mix(in oklab, var(--ring) 50%, transparent) !important;
     overflow-clip-margin: content-box !important;
    overflow: clip !important;
  }

  .typing-cursor {
    display: inline-block;
    width: 3px;
    height: 50px;
    background-color: #fff;
    margin-left: 4px;
    animation: blinkCursor 0.7s infinite;
    vertical-align: baseline;
  }

  @keyframes blinkCursor {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
//     .mx-4 {
//     margin-right: 3.5rem !important;
//     margin-left: 4.5rem !important;
// }
.rounded-4 {
  border-radius: 1.3rem !important;
}
  .contactinfo.mt-2 {
    padding-left: 11px !important;
}
  .linkinfo.mt-4 {
    padding-left: 11px !important;
}
  .technicalinfo.mt-4 {
    padding-left: 11px !important;
}
    .me-2 {
    margin-right: 0.6rem !important;
}
    .secondcolumn  {
    padding-top: 32px !important;
    padding-left: 32px !important;
    }
  `}

  </style>
  </>
  );
};

export default Home;