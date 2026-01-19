import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import p4 from "../assets/p4.png";
import F3 from "../assets/F3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Snowfall from 'react-snowfall';
import {Code,Layers,Database,Server,Phone,Mail,MapPin,Globe,Github,Linkedin,Download,Calendar,Circle,Award,MoveRight, ExternalLink} from 'lucide-react'
import Contact from "./Contact"
// Assets
import tp from "../assets/tp.png";
import jslogo from "../assets/jslogo.svg";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import p3 from "../assets/p3.png";
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
const trackRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const positionRef = useRef(0);
const isMouseOverRef = useRef(false);  // ← YEH ADD KAREIN
const isDraggingRef = useRef(false);
const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const lastXRef = useRef(0);
const lastTimeRef = useRef(Date.now());
  const itemWidthRef = useRef(0);
  const animationIdRef = useRef(null);







  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
const [visibleWords, setVisibleWords] = useState(new Set());
const scrollTextRef = useRef(null);
const [isTyping, setIsTyping] = useState(false);
const scrollText = "They say a jack of all trades is a master of none, but I'm more like a full-stack magician, crafting stunning frontends with one hand while fluidly architecting robust backends with the other. My code doesn't just work—it dazzles! Half artist, half engineer, 100% caffeine-powered problem solver.";
const [scrollWords] = useState(() => scrollText.split(' ').filter(word => word.trim()));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  // Wait for DOM to be ready and get one set of content width
  setTimeout(() => {
    itemWidthRef.current = track.scrollWidth / 2;
  }, 100);

  const normalize = () => {
    // Modulo operation se seamless loop
    if (itemWidthRef.current > 0) {
      // Position ko ek set ki width ke range mein rakhein
      positionRef.current = positionRef.current % itemWidthRef.current;
      
      // Agar positive ho gaya toh negative mein convert karo
      if (positionRef.current > 0) {
        positionRef.current -= itemWidthRef.current;
      }
    }
  };

  const animate = () => {
    if (!isDraggingRef.current) {
      const speed = -1.5;
      positionRef.current += speed;
      normalize();
    }

    if (track) {
      track.style.transform = `translateX(${positionRef.current}px)`;
    }
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    isMouseOverRef.current = true;
  };

  const handleMouseLeave = () => {
    isMouseOverRef.current = false;
  };

  const handleStart = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    currentXRef.current = startXRef.current;
    lastXRef.current = startXRef.current;
    lastTimeRef.current = Date.now();
  };

  const handleMove = (e) => {
    if (!isDraggingRef.current) return;
    
    e.preventDefault();
    currentXRef.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const delta = currentXRef.current - lastXRef.current;
    positionRef.current += delta;
    
    normalize();
    
    lastXRef.current = currentXRef.current;
    lastTimeRef.current = Date.now();
  };

  const handleEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  track.addEventListener('mouseenter', handleMouseEnter);
  track.addEventListener('mouseleave', handleMouseLeave);
  track.addEventListener('mousedown', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleEnd);
  track.addEventListener('touchstart', handleStart, { passive: false });
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('touchend', handleEnd);

  setTimeout(() => {
    animate();
  }, 150);

  return () => {
    track.removeEventListener('mouseenter', handleMouseEnter);
    track.removeEventListener('mouseleave', handleMouseLeave);
    track.removeEventListener('mousedown', handleStart);
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    track.removeEventListener('touchstart', handleStart);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
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
  { icon: s20, link: "https://woocommerce.com/" }, // Illustratore
  { icon: s22, link: "https://www.mysql.com/" }, // Illustrator

  ];

  return (
    <>
    <div>
      {/* Header Section */}
  <section className="firstsection mt-3" id="homepage">
    <div className="firstdiv">
      <h1 className="text-center h1class mt-2 fw-bold" style={{fontSize: '72px', color: '#CFD0D0'}} >Hi, I'm</h1>
      <h1 className="text-center h2class fw-bold" style={{fontSize: '72px', color: '#767777'}} >Muhammad Sadiq</h1>
      <h1 className="text-center h3class text-white mt-4 fw-lighter" style={{fontSize: '30px'}} >Frontend Developer |</h1>
     <center>
<hr
  style={{
    border: "none",
    height: "3px",
    width: '35%'  ,
    background: "linear-gradient(to right, transparent, #ffffff99, transparent)",
  }}
/>     </center>
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
  </section>
<section className="resumesection mt-4" id="resumepage">
  <div className="animationresumespecificsection" data-aos="fade-up">
<div className="d-flex justify-content-center">
  <div className="resumesectiondiv resumesectiondiv text-center rounded-pill d-flex justify-content-center border border-dark" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#ffffff99'}}>My Resume</h3>
 
  </div>
</div>
<h1 className="text-white  resumesectionh1 text-center mt-3 fw-bold" style={{fontSize: '48px'}}>Professional Experience</h1>
<p className="resumesectionp mt-3" style={{ fontSize: '18px', color: '#ffffff99'}}>A comprehensive overview of my skills, experience, and achievements</p>
</div>
<br />
<div className="d-flex justify-content-center resumesectionresumediv mt-5 ">
  <div className="resumesectionresume d-flex rounded-4 overflow-hidden border border-dark" style={{ width: '1152px', height: '240vh', }}>
    <div className="firstcolumn p-3 py-4 px-4" style={{ width: '30%', backgroundColor: '#191919'}} > 
      <div className="contactinfo mt-2" data-aos="fade-up"> 
        <div className="firstone fs-5 text-white fw-bold">
          <Mail className="me-2" style={{color:'#ffffff99'}} width={16} height={16} />
            Contact
      </div>    
        <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="mailto:sadiqsiraj44@gmail.com" target="_blank">
          <Mail className="me-2" width={14} height={14} />   
           <span className="contactinfospan fs-6 fw-lighter" style={{color: '#ffffff99'}}>sadiqsiraj44@gmail.com</span>
      </a>
       </div>
        <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://wa.me/923152453522" target="_blank">
          <Phone className="me-2" width={14} height={14} />

           <span className="contactinfospan fs-6 fw-lighter" style={{color: '#ffffff99'}}>+92 315 2453522</span>
      </a>
       </div>
        <div className="fourthone mt-2 secondoneallofit">
                <a className="text-secondary">
          <MapPin className="me-2 text-seondary" width={14} height={14} />

           <span className="contactinfospan fs-6 fw-lighter" style={{color: '#ffffff99'}}>Pakistan</span>
      </a>
       </div>
   
      </div>
      <div className="linkinfo mt-4" data-aos="fade-up"> 
        <div className="firstone fs-5 text-white fw-bold">
          <Globe className="me-2" style={{color:'#ffffff99'}} width={16} height={16} />
          Links
      </div>    
        <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://github.com/privsaaaa44" target="_blank">
          <Github className="me-2" width={14} height={14} />   
           <span className="contactinfospan  fs-6 fw-lighter" style={{color: '#ffffff99'}}>github.com/privsaaaa44</span>
      </a>
       </div>
        <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b" target="_blank">
          <Linkedin className="me-2" width={14} height={14} />

           <span className="contactinfospan fs-6 fw-light" style={{color: '#ffffff99'}}>linkedin.com/in/muhammad-sadiq</span>
      </a>
       </div>
   
   
      </div>
     <div className="technicalinfo mt-4" ref={sectionRef}> 
      <div className="firstone fs-5 text-white fw-bold">
        <Code className="me-2" style={{color:'#ffffff99'}} width={16} height={16} />
        Technical Skills
      </div>    
      <div className="skillssection">
        <div className="skill-container"> 
          <div className="skillheader mt-2"  style={{fontSize: '14px',color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              JavaScript/Jquery
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              React
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px',color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              Wordpress
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              SEO
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              Figma/Canva 
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader  mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              My SQL 
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader  mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              Shopify
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              Bootstrap/Tailwind CSS
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              XML/JSON
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              MS office
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
          <div className="skillheader mt-2" style={{fontSize: '14px', color: '#ffffff99'}}>
            <span className="skillname fw-lighter">
              Git/GitHub
            </span>
            <span className="skillpercentage" style={{float: 'right', color: '#ffffff99'}}>
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
    className="fw-lighter rounded-5 border  border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232',color: '#ffffff99'}}
  >
    Problem Solving
  </span>
  <span 
    className="fw-lighter rounded-5 border  border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232', color: '#ffffff99'}}
  >
    Team Collaboration
  </span>
</div>
<div className="secondsoftskill mt-2 d-flex flex-wrap gap-2"> 
  <span 
    className="fw-lighter rounded-5 border  border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232', color: '#ffffff99'}}
  >
   Communication
  </span>
  <span 
    className="fw-lighter rounded-5 border  border-secondary py-1 px-3"
    style={{fontSize: '12px', backgroundColor: '#323232', color: '#ffffff99'}}
  >
Adaptability
  </span>
</div>
<div className="thirdsoftskill mt-2 d-flex flex-wrap gap-2"> 

  <span 
    className="fw-lighter rounded-5 border  border-secondary py-1 px-3" 
    style={{fontSize: '12px', backgroundColor: '#323232', color: '#ffffff99'}}
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
  className="resumesectionbuttonresumedownload fw-bold btn-light rounded-pill mt-4 w-100 bg-white border-0" 
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
        <div  data-aos="fade-up" className="intro">
<h1 className="introdivh1 fs-4 text-white fw-bold">Introduction</h1>
<hr style={{color: '#ffffff99'}} />
<h5 style={{color:'#ffffff99', width: '100%'}} className="introp pe-1 fs-6 text-left lh-base ms-0 me-0 w-100">I build production-grade, maintainable, and performant web UIs with
reusable components, state management, routing, forms, and serverside rendering. I optimize frontend performance through lazy loading,
code splitting, memoization, and caching, and implement secure
authentication integrated with REST/GraphQL APIs. I enforce code
quality with unit, integration, and E2E tests, static analysis, and clear
documentation, and collaborate in CI/CD pipelines and containerized
environments while monitoring frontend health with logs and metric.
</h5>
  </div>
  <div className="experience101">
<div className="experience mt-5 d-flex align-items-center">
  <Calendar width={18} height={18} style={{color: '#ffffff99'}} />
  <span className="espan text-white fw-bold fs-4 p-2">Work Experience</span>
</div>
<hr className="mt-0" style={{ color: '#ffffff99'}} />
<div  data-aos="fade-right"   data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center">
  <div className="d-flex align-items-center mt-4">
<Circle 
  width={12} 
  height={12} 
  stroke="gray"
  fill="#3D3D3D"
  strokeWidth={3}
/>
<span className="text-white fs-5 fw-bold ms-4">Data Entry Operator Intern</span>
</div>
<div className="company mt-1">
  <div className="d-flex align-items-center" style={{ paddingLeft: '36px' }}>
    <h4
      className="fw-bolder mb-0"
      style={{ fontSize: '14px', color:'#ffffff99' }}
    >
    Digitalaz Solution
    </h4>

    <ul
      className="mb-0 d-flex align-items-center gap-4 "
      style={{
        listStyleType: 'square',
        paddingLeft: '8px',
        margin: 0,
        marginLeft: '4px'
      }}
    >
      <li className="ms-3" style={{ fontSize: '14px', color: '#ffffff99', paddingLeft: '2px' }}>
        On-site
      </li>
      <li style={{ fontSize: '14px', color: '#ffffff99', paddingLeft: '2px' }}>
       Aug 2025 –
Sep 2025
      </li>
    </ul>
  </div>
  <div className="companypara mt-2" style={{marginLeft: '13px'}}>
    <ul className="companyul">  
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2">Performed product listings and updates on the company’s ecommerce platform.</span></li>
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2">Ensured product details, prices, and descriptions were accurate and up to date. </span></li>
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2">Assisted in organizing digital inventory and maintaining data consistency.</span></li>
    </ul>
  </div>
</div>


</div>    
<div  data-aos="fade-right"   data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center">
  <div className="d-flex align-items-center mt-4">
<Circle 
  width={12} 
  height={12} 
  stroke="gray"
  fill="#3D3D3D"
  strokeWidth={3}
/>
<span className="text-white fs-5 fw-bold ms-4">Web Developer Intern</span>
</div>
<div className="company mt-1">
  <div className="d-flex align-items-center" style={{ paddingLeft: '36px' }}>
    <h4
      className="fw-bolder mb-0"
      style={{ fontSize: '14px', color:'#ffffff99' }}
    >
   IJK Media 
    </h4>

    <ul
      className="mb-0 d-flex align-items-center gap-4 "
      style={{
        listStyleType: 'square',
        paddingLeft: '8px',
        margin: 0,
        marginLeft: '4px'
      }}
    >
      <li className="ms-3" style={{ fontSize: '14px', color: '#ffffff99', paddingLeft: '2px' }}>
        On-site
      </li>
      <li style={{ fontSize: '14px', color: '#ffffff99', paddingLeft: '2px' }}>
      Oct 2025 – Dec 2025
      </li>
    </ul>
  </div>
  <div className="companypara mt-2" style={{marginLeft: '13px'}}>
    <ul className="companyul">  
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2">Developed front-end features using HTML, CSS, JavaScript, Bootstrap, React, WordPress. </span></li>
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2"> Focused on creating responsive layouts and improving user interface experience. </span></li>
  <li className="companyli fs-6 mb-2" style={{color:'#ffffff99'}}><span className="ms-2">Collaborated with the team to deliver visually appealing and
functional web pages.</span></li>
    </ul>
  </div>
</div>


</div>    
</div>
  <div className="experience102">
<div className="experience mt-5 d-flex align-items-center">
  <span className="espan text-white fw-bold fs-4 mb-2">Education</span>
</div>
<hr className="mt-0" style={{color: '#ffffff99'}} />
<div  data-aos="fade-right"   data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center">
 <div className="d-flex align-items-center mt-4">
  <Circle 
    width={20} 
    height={20} 
    stroke="gray"
    fill="#3D3D3D"
    strokeWidth={2}
  />
  <span className="text-white fs-5 fw-bold ms-4">
    Diploma Degree Aptech, 3-year Web Development Course (1 year Completed) | 2025 – Present
  </span>
</div>


</div>    
<div  data-aos="fade-right"   data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center">
  <div className="d-flex align-items-center mt-4">
<Circle 
  width={12} 
  height={12} 
  stroke="gray"
  fill="#3D3D3D"
  strokeWidth={3}
/>
<span className="text-white fs-5 fw-bold ms-4">Govt Degree Boys College Johar Karachi, ICS | 2025 – Present
</span>
</div>
<div className="company mt-1">
  <div className="d-flex align-items-center" style={{ paddingLeft: '36px' }}>
    <h4
      className="fw-bolder mb-0"
      style={{ fontSize: '14px',color:'#ffffff99' }}
    >
Intermediate in Computer Science
    </h4>
  </div>

</div>


</div>    
<div  data-aos="fade-right"   data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="flex justify-center items-center">
  <div className="d-flex align-items-center mt-4">
<Circle 
  width={12} 
  height={12} 
  stroke="gray"
  fill="#3D3D3D"
  strokeWidth={3}
/>
<span className="text-white fs-5 fw-bold ms-4">HPGS School Karachi, Computer Science | 2025
</span>
</div>
<div className="company mt-1">
  <div className="d-flex align-items-center" style={{ paddingLeft: '36px' }}>
    <h4
      className="fw-bolder mb-0"
      style={{ fontSize: '14px', color:'#ffffff99'  }}
    >
Matriculation in Computer Science
    </h4>
  </div>

</div>


</div>    
</div>
<div className="cerifications">
 <div className="experience mt-5 d-flex align-items-center">
  <Award width={18} height={18} style={{color: '#ffffff99'}} />
  <span className="espan text-white fw-bold fs-4 p-2">Certifications</span>
</div>
<hr className="mt-0" style={{color: '#ffffff99'}} />
</div>
</div>
  </div>
</div>
<br />
<div   data-aos="fade-up" className="resumesectionlastdiv">
<p className="fs-6 resumesectionlastptag" style={{color:'#ffffff99'}}>Interested in working together?</p>
<div className="d-flex justify-content-center mt-4 fs-6 fw-light">
<button className="resumesectionlettalktobutton bg-white rounded-pill  text-center border border-light  p-3 fs-6">Let's Talk
<span><MoveRight style={{width: '16px', height: '16px'}} width={16} height={16} className="fs-6 ms-2 fw-lighter"/></span>

</button>
</div>
</div>

<br />
<br />  

      <div className="d-flex align-items-center justify-content-center  bg-black">
        <section className="revolvingcircle">
          <div
            className="position-relative"
            style={{ width: '250px', height: '250px', cursor: 'pointer' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              viewBox="0 0 400 400"
              className={`w-100 h-100 ${isHovered ? 'animate-spin-fast' : 'animate-spin-slow'}`}
style={{ 
  animationDuration: isHovered ? '4s' : '8s'  // Sirf duration change
}}            
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 200, 200 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
                />
              </defs>
              
              <circle
                cx={250}
                cy={250}
                r={130}
                fill="none"
                
                strokeWidth={2.5}
              />
              
              <text
                fill="white"
                fontSize="39"
                fontStyle="italic"
                
                className="textone"
                letterSpacing="-5"
              >
                <textPath href="#circlePath" startOffset="0%">
                  ✱FULL ✱STACK ✱DEVELOPER
                </textPath>
              </text>
            </svg>
          </div>
        </section>
      </div>


</section>
<section id="projectpage" className="mywork text-center mt-5 pt-1" style={{marginBottom: '150px'}}>
  <div data-aos="fade-up" className="myworkheadings">

    <div  className="resumesectiondiv align-item-center rounded-pill border border-dark mx-auto" style={{background: '#0D0D0D', width: 'fit-content'}}>
        <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px',color: '#ffffff99'}}>My Work</h3>
    </div>
   <h1 className="text-white  resumesectionh1 text-center mt-3 fw-bolder" style={{fontSize: '60px'}}>Featured Projects
</h1> 
<p
  className="resumesectionp mt-3 text-center"
  style={{ fontSize: '18px', color: '#ffffff99'}}
>
  Showcasing my best work across frontend, backend, and full-stack development
</p>
  </div>

    <div data-aos="fade-up" className="d-flex mt-3 justify-content-center  gap-4 p-5">
<a  href="https://privsaaaa44.github.io/Eproject/home.html" className="projectcardlink" target="_blank">
<div 
  className="projectcard rounded-4 shadow-lg border border-dark" 
  style={{ 
    width: '35rem', 
    height: '117vh', 
    backgroundColor: '#0E1011', 
    borderWidth: '1px',
    overflow: 'hidden'
  }}
>
  {/* Top Section - Badge */}
  <div className="resumesectiondiv d-flex align-items-center rounded-pill border border-dark ms-auto me-2 mt-1" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#ffffff99'}}> Web Design Project</h3>
  </div>

  {/* Hero Section with Background Image - SIRF YAHAN IMAGE */}
 <div className="mt-1 border-2 border-top border-dark border-left imagebgproject"
    style={{
      height: '45vh',
      backgroundImage: `url(${p1})`,
      backgroundSize: '100% auto',  // width 100%, height auto
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
  
    {/* Hero Content */}

  </div>
<div className="card-content align-items-left ms-4 mt-4" style={{textAlign: 'left'}}>  
  <h1 className="fs-4 text-white fw-bold">Decor Delight Furntire Store</h1>

<div className="mt-2 rounded-end" style={{width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0'}}></div>
<h3 className="card-h3 fs-6 w-100  lh-base" style={{color:'#d1d5dc'}}>
During my first semester end project at Aptech, I developed a responsive furniture e-commerce website featuring product browsing and custom furniture services, which strengthened my web development and UI/UX design skills.
</h3> 

<div className="d-flex gap-3 mt-4">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s4} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>JavaScript</span>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img 
  src={s11} 
  width={20} 
  height={20} 
  className="mb-1" 
  style={{
    filter: 'brightness(0) invert(1)' // Pure white ke liye
    // Ya sirf: filter: 'brightness(2)' // Original color with brightness
  }} 
  alt="" 
/>
<span 
  className="text-secondary fw-medium" 
  style={{fontSize: '10px', color: '#ffffff99'}}
>
  Jquery
</span>  </div>
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s5} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>JSON</span>
  </div>
  
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s3} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Bootstrap</span>
  </div>
</div>
<div className="simplecardtext mt-3 d-flex align-items-center">
<span style={{fontSize: '12px', color: '#ffffff99'}}>+4 more</span>
<span
  className="circlelogoextra ms-2 border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <img
    width={10}
    height={10}
    src={s1}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 2
  }}
>
  <img
    width={10}
    height={10}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra  border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 3
  }}
>
  <img
    width={10}
    height={10}
    src={s2}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra  border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 4
  }}
>
  <img
    width={10}
    height={10}
    src={s16}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>

</div>

<div className="projectlivenowbutt mt-3 d-flex justify-content-between align-items-center">
<a
  href="https://privsaaaa44.github.io/Eproject/home.html"
  target="_blank"
  rel="noopener noreferrer"
  className="text-decoration-none"
>
  <button
    className="btn btn-light d-inline-flex align-items-center gap-2  fw-medium"
    style={{ fontSize: "12px", borderRadius: '9px', padding: '6px 12px', height: '26px' }}
  >
    <ExternalLink width={12}/>
    View Live
  </button>
</a>
<a href="https://github.com/privsaaaa44" target="_blank" className="githubinprojectlink">
<div className="githubinproject border border-dark"  style={{
    backgroundColor: '#1a1a1a',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '22px'
  }}>


  <img

    width={14}
    height={14}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</div>
</a>
</div>
</div>
  {/* Bottom Section - Plain Black Background */}


</div>
</a>
<a  href="https://mywebmanagers.com/bnb-lisiting-management/" className="projectcardlink" target="_blank">
<div 
  className="projectcard rounded-4 shadow-lg border border-dark" 
  style={{ 
    width: '35rem', 
    height: '117vh', 
    backgroundColor: '#0E1011', 
    borderWidth: '1px',
    overflow: 'hidden'
  }}
>
  {/* Top Section - Badge */}
  <div className="resumesectiondiv d-flex align-items-center rounded-pill border border-dark ms-auto me-2 mt-1" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#ffffff99'}}> CMS Blog Site</h3>
  </div>

  {/* Hero Section with Background Image - SIRF YAHAN IMAGE */}
 <div className="mt-1 border-2 border-top border-dark border-left imagebgproject"
    style={{
      height: '45vh',
      backgroundImage: `url(${p2})`,
      backgroundSize: '100% auto',  // width 100%, height auto
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
  
    {/* Hero Content */}

  </div>
<div className="card-content align-items-left ms-4 mt-4" style={{textAlign: 'left'}}>  
  <h1 className="fs-4 text-white fw-bold">My Web Managers</h1>

<div className="mt-2 rounded-end" style={{width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0'}}></div>
<h3 className="card-h3 fs-6 w-100  lh-base" style={{color:'#d1d5dc'}}>
During my internship at IJK Media, I developed a responsive CMS based blog website with integrated service browsing and custom web solutions, enhancing my WordPress development and content management expertise.
</h3> 

<div className="d-flex gap-3 mt-4">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s9} width={20} height={20} className="mb-1" style={{    filter: 'brightness(0) invert(1)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Wordpress</span>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img 
  src={s10} 
  width={20} 
  height={20} 
  className="mb-1" 
  style={{
    filter: 'brightness(0) invert(1)' // Pure white ke liye
    // Ya sirf: filter: 'brightness(2)' // Original color with brightness
  }} 
  alt="" 
/>
<span 
  className="text-secondary fw-medium" 
  style={{fontSize: '10px', color: '#ffffff99'}}
>
 Elementor Pro
</span>  </div>
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s4} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>JavaScript</span>
  </div>
  
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s11} width={20} height={20} className="mb-1" style={{    filter: 'brightness(0) invert(1)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Jquery</span>
  </div>
</div>
<div className="simplecardtext mt-3 d-flex align-items-center">
<span style={{fontSize: '12px', color: '#ffffff99'}}>+4 more</span>
<span
  className="circlelogoextra ms-2 border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <img
    width={10}
    height={10}
    src={s1}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 2
  }}
>
  <img
    width={10}
    height={10}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra  border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 3
  }}
>
  <img
    width={10}
    height={10}
    src={s2}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>
<span
  className="circlelogoextra  border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-5px',
    position: 'relative',
    zIndex: 4
  }}
>
  <img
    width={10}
    height={10}
    src={s16}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>

</div>

<div className="projectlivenowbutt mt-3 d-flex justify-content-between align-items-center">
<a
  href="https://mywebmanagers.com/bnb-lisiting-management/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-decoration-none"
>
  <button
    className="btn btn-light d-inline-flex align-items-center gap-2  fw-medium"
    style={{ fontSize: "12px", borderRadius: '9px', padding: '6px 12px', height: '26px' }}
  >
    <ExternalLink width={12}/>
    View Live
  </button>
</a>
<a href="https://github.com/privsaaaa44" target="_blank" className="githubinprojectlink">
<div className="githubinproject border border-dark"  style={{
    backgroundColor: '#1a1a1a',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '22px'
  }}>


  <img

    width={14}
    height={14}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</div>
</a>
</div>
</div>
  {/* Bottom Section - Plain Black Background */}


</div>
</a>
    </div>


    
    <div data-aos="fade-up" className="d-flex  justify-content-center  gap-4 mt-0">
<a  href="https://flavoura-best-resturant-in-pak.vercel.app" className="projectcardlink" target="_blank">
<div 
  className="projectcard rounded-4 shadow-lg border border-dark" 
  style={{ 
    width: '35rem', 
    height: '117vh', 
    backgroundColor: '#0E1011', 
    borderWidth: '1px',
    overflow: 'hidden'
  }}
>
  {/* Top Section - Badge */}
  <div className="resumesectiondiv d-flex align-items-center rounded-pill border border-dark ms-auto me-2 mt-1" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#ffffff99'}}>Frontend Website</h3>
  </div>

  {/* Hero Section with Background Image - SIRF YAHAN IMAGE */}
 <div className="mt-1 border-2 border-top border-dark border-left imagebgproject"
    style={{
      height: '45vh',
      backgroundImage: `url(${p3})`,
      backgroundSize: '100% auto',  // width 100%, height auto
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {/* Hero Content */}

  </div>
<div className="card-content align-items-left ms-4 mt-4" style={{textAlign: 'left'}}>  
  <h1 className="fs-4 text-white fw-bold">Flavora Resturant Wesbite</h1>

<div className="mt-2 rounded-end" style={{width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0'}}></div>
<h3 className="card-h3 fs-6 w-100  lh-base" style={{color:'#d1d5dc'}}>
During this personal project, I created a restaurant website with online table reservation functionality, allowing customers to browse menus, view available time slots, and book tables through an intuitive interface.
</h3> 

<div className="d-flex gap-3 mt-4">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s6} width={20} height={20} className="mb-1" style={{ filter: 'brightness(0) invert(1)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>React.JSX</span>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img 
  src={s3} 
  width={20} 
  height={20} 
  className="mb-1" 
  style={{
    filter: 'brightness(0) invert(1)' // Pure white ke liye
    // Ya sirf: filter: 'brightness(2)' // Original color with brightness
  }} 
  alt="" 
/>
<span 
  className="text-secondary fw-medium" 
  style={{fontSize: '10px', color: '#ffffff99'}}
>
Bootstrap
</span>  </div>
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s16} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Figma</span>
  </div>
  
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s18} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Vercel</span>
  </div>
</div>
<div className="simplecardtext mt-3 d-flex align-items-center">
<span style={{fontSize: '12px', color: '#ffffff99'}}>+1 more</span>
<span
  className="circlelogoextra ms-2 border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <img
    width={10}
    height={10}
    src={s4}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>


</div>

<div className="projectlivenowbutt mt-3 d-flex justify-content-between align-items-center">
<a
  href="https://flavoura-best-resturant-in-pak.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-decoration-none"
>
  <button
    className="btn btn-light d-inline-flex align-items-center gap-2  fw-medium"
    style={{ fontSize: "12px", borderRadius: '9px', padding: '6px 12px', height: '26px' }}
  >
    <ExternalLink width={12}/>
    View Live
  </button>
</a>
<a href="https://github.com/privsaaaa44" target="_blank" className="githubinprojectlink">
<div className="githubinproject border border-dark"  style={{
    backgroundColor: '#1a1a1a',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '22px'
  }}>


  <img

    width={14}
    height={14}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</div>
</a>
</div>
</div>
  {/* Bottom Section - Plain Black Background */}


</div>
</a>
<a  href="https://flavoura-best-resturant-in-pak.vercel.app" className="projectcardlink" target="_blank">
<div 
  className="projectcard rounded-4 shadow-lg border border-dark" 
  style={{ 
    width: '35rem', 
    height: '117vh', 
    backgroundColor: '#0E1011', 
    borderWidth: '1px',
    overflow: 'hidden'
  }}
>
  {/* Top Section - Badge */}
  <div className="resumesectiondiv d-flex align-items-center rounded-pill border border-dark ms-auto me-2 mt-1" style={{background: '#0D0D0D', width: 'fit-content'}}>
    <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{fontSize: '14px', color: '#ffffff99'}}>Frontend Website</h3>
  </div>

  {/* Hero Section with Background Image - SIRF YAHAN IMAGE */}
 <div className="mt-1 border-2 border-top border-dark border-left imagebgproject"
    style={{
      height: '45vh',
      backgroundImage: `url(${p4})`,
      backgroundSize: '100% auto',  // width 100%, height auto
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
  
    {/* Hero Content */}

  </div>
<div className="card-content align-items-left ms-4 mt-4" style={{textAlign: 'left'}}>  
  <h1 className="fs-4 text-white fw-bold">Personal Protfolio</h1>

<div className="mt-2 rounded-end" style={{width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0'}}></div>
<h3 className="card-h3 fs-6 w-100  lh-base" style={{color:'#d1d5dc'}}>
During this personal project, I created a responsive portfolio website showcasing my projects, skills, and experience, featuring smooth navigation, interactive elements, and modern design principles throughout.
</h3> 

<div className="d-flex gap-3 mt-4">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s6} width={20} height={20} className="mb-1" style={{ filter: 'brightness(0) invert(1)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>React.JSX</span>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img 
  src={s3} 
  width={20} 
  height={20} 
  className="mb-1" 
  style={{
    filter: 'brightness(0) invert(1)' // Pure white ke liye
    // Ya sirf: filter: 'brightness(2)' // Original color with brightness
  }} 
  alt="" 
/>
<span 
  className="text-secondary fw-medium" 
  style={{fontSize: '10px', color: '#ffffff99'}}
>
Bootstrap
</span>  </div>
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s16} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Figma</span>
  </div>
  
   <div className="d-flex flex-column align-items-center justify-content-center rounded-3" 
       style={{height: '70px',backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a'}}>
<img src={s18} width={20} height={20} className="mb-1" style={{filter: 'invert(1) brightness(1.5) contrast(0.8)'}} alt="" />    <span className="text-secondary fw-medium" style={{fontSize: '10px', color: '#ffffff99'}}>Vercel</span>
  </div>
</div>
<div className="simplecardtext mt-3 d-flex align-items-center">
<span style={{fontSize: '12px', color: '#ffffff99'}}>+1 more</span>
<span
  className="circlelogoextra ms-2 border border-dark"
  style={{
    backgroundColor: '#1a1a1a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <img
    width={10}
    height={10}
    src={s4}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</span>


</div>

<div className="projectlivenowbutt mt-3 d-flex justify-content-between align-items-center">
<a
  href="https://flavoura-best-resturant-in-pak.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-decoration-none"
>
  <button
    className="btn btn-light d-inline-flex align-items-center gap-2  fw-medium"
    style={{ fontSize: "12px", borderRadius: '9px', padding: '6px 12px', height: '26px' }}
  >
    <ExternalLink width={12}/>
    View Live
  </button>
</a>
<a href="https://github.com/privsaaaa44" target="_blank" className="githubinprojectlink">
<div className="githubinproject border border-dark"  style={{
    backgroundColor: '#1a1a1a',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '22px'
  }}>


  <img

    width={14}
    height={14}
    src={s13}
    alt=""
    style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
  />
</div>
</a>
</div>
</div>
  {/* Bottom Section - Plain Black Background */}


</div>
</a>

    </div>
    <div data-aos="fade-up" className="myworklastheading">
<h6 className="fs-6 mt-5 p-4" style={{color: '#ffffff99'}}>Want to see more of my work?</h6>
<a className="fs-6" target="_blank" href="https://github.com/privsaaaa44">
<button className="btn  border border-secondary border-1 fs-6 rounded-pill p-3 githubworkbutton" style={{width: '19%'}}>
  <Github className="text-white me-1" width={16} height={16}/> <span className="fs-6 text-white fw-medium">View All on GitHub</span> <span><MoveRight width={16} height={16}   className="ms-2 text-white fw-lighter"/></span>
</button>

</a>
</div>
<div className="myworklastonebikul" style={{marginTop: '130px'}}>  
<div className="d-flex gap-0 align-items-center" style={{userSelect: 'none', cursor: isDragging ? 'grabbing' : 'grab'}}>
<div className="w-100 position-relative" style={{overflow: 'hidden'}}>
<div ref={trackRef} className="d-flex align-items-center" style={{whiteSpace: 'nowrap', willChange: 'transform'}}>
  {/* Set 1 */}
  <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{fontSize: '64px', flexShrink: '0'}}>
    LET'S <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    CREATE <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    AND <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    DEVELOP <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    SOFTWARE <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
  </div>
  
  {/* Set 2 */}
  <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{fontSize: '64px', flexShrink: '0', lineHeight: '1'}}>
    LET'S <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    CREATE <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    AND <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    DEVELOP <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
    SOFTWARE <span className="mx-3" style={{fontSize: "64px"}}>✦</span>
  </div>
</div>
</div>
</div>
</div>
</section>
    
    
    </div>
    <section id="contactpage">
   <Contact/>
   </section>
  <style>
    {`
            @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-fast 5s linear infinite;
        }

    .card2 {
    position: relative;
    overflow: visible;
    }
  .card2:hover {
  transform: scale(1.02);
transition: all 0.3 ease;
    
    }
 
// .emailicon {
// margin-top: 8px !important;

// }
  
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
    p.introp.fs-6.text-left.text-secondary {
    text-align: left !important;
}

  `}

  </style>
  </>
  );
};

export default Home;