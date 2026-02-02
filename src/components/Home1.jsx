import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import the HomePageSection if you have it as separate component
// If not, keep this code in Home1 directly

// Assets - Skills
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

import { Code, Layers, Database, Server } from 'lucide-react';

const Home1 = () => {
  // State for quotes carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  // State for typing effect
  const [visibleWords, setVisibleWords] = useState(new Set());
  const [isTyping, setIsTyping] = useState(false);

  // Scroll text
  const scrollText = "They say a jack of all trades is a master of none, but I'm more like a full-stack magician, crafting stunning frontends with one hand while fluidly architecting robust backends with the other. My code doesn't just work—it dazzles! Half artist, half engineer, 100% caffeine-powered problem solver.";
  const [scrollWords] = useState(() => scrollText.split(' ').filter(word => word.trim()));

  // Quotes data
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      role: "Apple"
    },
    {
      text: "First, solve the problem. Then, write the code.",
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

  // Skills data
  const skills = [
    { icon: s1, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: s2, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: s4, link: "https://getbootstrap.com/" },
    { icon: s3, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: s5, link: "https://www.javascript.com/" },
    { icon: s6, link: "https://reactjs.org/" },
    { icon: s7, link: "https://tailwindcss.com/" },
    { icon: s8, link: "https://www.shopify.com/" },
    { icon: s9, link: "https://wordpress.org/" },
    { icon: s10, link: "https://elementor.com/" },
    { icon: s21, link: "https://woocommerce.com/" },
    { icon: s11, link: "https://www.microsoft.com/en-us/edge" },
    { icon: s12, link: "https://git-scm.com/" },
    { icon: s13, link: "https://github.com/" },
    { icon: s14, link: "https://claude.ai/chat" },
    { icon: s15, link: "https://github.com/copilot/" },
    { icon: s16, link: "https://www.figma.com/" },
    { icon: s17, link: "https://www.canva.com/" },
    { icon: s18, link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-office" },
    { icon: s19, link: "https://developers.google.com/search" },
    { icon: s20, link: "https://woocommerce.com/" },
    { icon: s22, link: "https://www.mysql.com/" },
  ];

  // AOS Initialization
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

  // Typing Effect
  useEffect(() => {
    setIsTyping(true);
    let wordIndex = 0;
    const newVisible = new Set();

    const typingInterval = setInterval(() => {
      if (wordIndex < scrollWords.length) {
        newVisible.add(wordIndex);
        setVisibleWords(new Set(newVisible));
        wordIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [scrollWords]);

  // Quote Carousel
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
  }, [quotes.length]);

  return (
    <section className="firstsection mt-0" id="homepage">
      <style>{`
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .col3 {
            gap: 100px !important;
          }
          .cards-container {
            gap: 20px !important;
          }
          .card1, .card2 {
            width: 380px !important;
            height: 340px !important;
          }
          .shortintroaboutcontainer div {
            font-size: 50px !important;
            word-spacing: 0.15em !important;
            line-height: 1.6 !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            text-align: left !important;
          }
        }

        @media (max-width: 992px) {
          .col3 {
            gap: 60px !important;
          }
          .cards-container {
            gap: 15px !important;
            flex-wrap: wrap;
            margin: 0 !important;
            padding: 0 19px !important;
          }
          .card1, .card2 {
            width: 100% !important;
            max-width: none !important;
            height: auto !important;
            min-height: 340px !important;
            margin: 0 !important;
          }
          .shortintroaboutcontainer div {
            font-size: 40px !important;
            word-spacing: 0.1em !important;
            line-height: 1.55 !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            text-align: left !important;
            hyphens: auto !important;
          }
        }

        @media (max-width: 768px) {
         
        .col3 {
            gap: 40px !important;
            flex-wrap: wrap !important;
          }
          .col1, .col2, .col3 {
            flex: 1 1 calc(33.333% - 20px) !important;
            min-width: 120px !important;
          }
          .cards-container {
            flex-direction: column !important;
            gap: 20px !important;
            margin-top: 40px !important;
            margin: 40px 19px 0 19px !important;
            padding: 0 !important;
          }
          .card1, .card2 {
            width: 100% !important;
            max-width: none !important;
            height: auto !important;
            min-height: 300px !important;
            padding: 1.5rem !important;
            margin: 0 !important;
          }
          .shortintroaboutcontainer div {
            font-size: 28px !important;
            line-height: 1.5 !important;
            word-spacing: 0.08em !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            hyphens: auto !important;
            text-align: left !important;
          }
          .icons {
            gap: 15px !important;
          }
          .icons svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 576px) {
          h1.h1class {
            font-size: 36px !important;
          }
          h1.h2Lclass {
            font-size: 36px !important;
          }
          h1.h3class {
            font-size: 20px !important;
            margin-top: 20px !important;
          }
          .col3one {
            margin: 0 15px !important;
          }
          .col3 {
            gap: 25px !important;
          }
          .col1, .col2, .col3 {
            flex: 1 1 calc(50% - 12px) !important;
          }
          .col1 h1, .col2 h1, .col3 h1 {
            font-size: 28px !important;
          }
          .col1 h1:last-child, .col2 h1:last-child, .col3 h1:last-child {
            font-size: 11px !important;
          }
          .cards-container {
            margin-top: 30px !important;
            margin: 30px 19px 0 19px !important;
            padding: 0 !important;
          }
          .card1, .card2 {
            width: 100% !important;
            max-width: none !important;
            padding: 1.2rem !important;
            min-height: 280px !important;
            height: auto !important;
            margin: 0 !important;
          }
          .card1 p, .card2 p {
            font-size: 16px !important;
          }
          .shortintroaboutcontainer div {
            font-size: 20px !important;
            // padding: 0 15px !important;
            line-height: 1 !important;
            word-spacing: 0.1em !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            hyphens: auto !important;
            text-align: left !important;
          }
          .py-4 {
            min-height: 50vh !important;
          }
          .skill.section {
            padding: 0 15px !important;
          }
        }

        @media (max-width: 420px) {
          h1.h1class {
            font-size: 36px !important;
          }
          h1.h2Lclass {
            font-size: 36px !important;
          }
          .col3 {
            gap: 20px !important;
          }
          .col1, .col2, .col3 {
            flex: 1 1 100% !important;
          }
          .cards-container {
            margin: 30px 19px 0 19px !important;
            padding: 0 !important;
          }
          .card1, .card2 {
            width: 100% !important;
            max-width: none !important;
            height: auto !important;
            margin: 0 !important;
          }
          .shortintroaboutcontainer div {
            font-size: 18px !important;
            line-height: 1 !important;
            word-spacing: 0.1em !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            hyphens: auto !important;
            text-align: left !important;
          }
        }
      `}</style>

      <div className="firstdiv mt-0 p-0">
        <h1 className="text-center h1class mt-0 fw-bold" style={{ fontSize: '72px', color: '#CFD0D0' }}>
          Hi, I'm
        </h1>
        <h1 className="text-center h2Lclass fw-bold mt-2" style={{ fontSize: '72px', color: '#767777' }}>
          Muhammad Sadiq
        </h1>
        <h1 className="text-center h3class text-white fw-lighter" style={{ fontSize: '30px', marginTop: '32px' }}>
          Frontend Developer
        </h1>
        <center>
          <hr
            className="mt-4"
            style={{
              border: "none",
              height: "3px",
              width: '40%',
              minWidth: '200px',
              background: "linear-gradient(to right, transparent, #ffffff99, transparent)",
            }}
          />
        </center>

        <div className="col3one">
          <div className="col3 d-flex justify-content-center align-items-center" style={{ gap: '170px' }}>
            <div className="col1 text-center">
              <h1 className="text-white fw-bold" style={{ fontSize: '36px' }}>
                20+
              </h1>
              <h1 className="text-uppercase fw-medium mt-2" style={{ fontSize: '14px', color: '#87909A' }}>
                projects completed
              </h1>
            </div>
            <div className="col2 text-center">
              <h1 className="text-white fw-bold" style={{ fontSize: '36px' }}>
                12+
              </h1>
              <h1 className="text-uppercase fw-medium mt-2" style={{ fontSize: '14px', color: '#87909A' }}>
                Technologies
              </h1>
            </div>
            <div className="col3 text-center">
              <h1 className="text-white fw-bold" style={{ fontSize: '36px' }}>
                100+
              </h1>
              <h1 className="text-uppercase fw-medium mt-2" style={{ fontSize: '14px', color: '#87909A' }}>
                client satisfaction
              </h1>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center cards-container" style={{ marginTop: '60px', gap: '30px' }}>
          {/* Quote Card */}
          <div className="p-4 shadow-lg border border-dark card1" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', borderRadius: '15px' }}>
            <div className="mb-4">
              <svg width="50" height="50" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              <div style={{ minHeight: '180px' }}>
                <div key={currentIndex} data-aos="fade-up" data-aos-duration="600">
                  <p className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.6' }}>
                    "{quotes[currentIndex].text}"
                  </p>

                  <div style={{ lineHeight: '0', marginTop: '40px' }}>
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

          {/* About Card */}
          <div className="p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', borderRadius: '15px' }}>
            <div className="mt-3" style={{ minHeight: '180px' }}>
              <div className="aboutmeheading text-center rounded-pill mx-auto" style={{ background: '#292A2A', width: 'fit-content' }}>
                <h3 className="aboutmeheadingh3 text-capitalize py-2 px-3 m-0" style={{ fontSize: '14px', color: '#BFBEC0' }}>
                  About Me
                </h3>
              </div>
              <h4 className="abouth4heading text-white text-center fw-bold fs-4" style={{ marginTop: '30px' }}>
                Passionate Developer & Problem Solver
              </h4>
              <p
                className="aboutpheading ms-1 me-1 w-100 lh-base text-center"
                style={{
                  fontSize: '14px',
                  color: '#ffffff99',
                  fontWeight: '300',
                  letterSpacing: '0.3px'
                }}
              >
                I'm a full-stack developer who loves turning complex problems into elegant solutions. With a keen eye for detail and a passion for clean code, I create seamless digital experiences that make a difference.
              </p>
              <svg width="60" height="60" viewBox="0 0 24 24" className="dotsimageicon mt-2" style={{
                animation: 'pulse 2s ease-in-out infinite',
                transform: 'translateY(17px)'
              }}>
                <circle cx="6" cy="12" r="2" fill="#6c757d" style={{ animation: 'blink 1.4s infinite both', animationDelay: '0s' }} />
                <circle cx="12" cy="12" r="2" fill="#6c757d" style={{ animation: 'blink 1.4s infinite both', animationDelay: '0.2s' }} />
                <circle cx="18" cy="12" r="2" fill="#6c757d" style={{ animation: 'blink 1.4s infinite both', animationDelay: '0.4s' }} />

                <style>{`
                  @keyframes blink {
                    0%, 80%, 100% { opacity: 0.3; }
                    40% { opacity: 1; }
                  }
                `}</style>
              </svg>
            </div>
          </div>

          {/* Experience Card */}
          <div className="p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', position: 'relative', overflow: 'visible', borderRadius: '15px' }}>
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

            <div className="position-absolute" style={{
              top: '50px',
              right: '50px',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderLeft: 'none',
              borderBottom: 'none',
              borderTopRightRadius: '25px'
            }}></div>

            <div className="position-absolute" style={{
              bottom: '40px',
              left: '40px',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRight: 'none',
              borderTop: 'none',
              borderBottomLeftRadius: '25px'
            }}></div>

            <div className="mt-4" style={{ position: 'relative', zIndex: 2 }}>
              <div className="carddiv3">
                <h1 className="cardheading3 text-center text-white" style={{ fontSize: '96px' }}>
                  1+
                </h1>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-white mb-3" style={{ fontSize: '24px', fontWeight: '600' }}>
                  Years of Experience
                </h2>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ffffff99' }}>
                  Building scalable applications and crafting exceptional user experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skill section">
        <br />
        <hr className="bg-dark mt-2" style={{ opacity: '0.4' }} />
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

        <h2 className="ml-3 mb-4 fw-normal text-center mt-3 text-uppercase" style={{ fontSize: '14px', letterSpacing: '1.5px', color: '#6B7280' }}>
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
            animation: 'scroll 42s linear infinite',
            width: 'fit-content'
          }}>
            {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
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
        <hr className="bg-dark" style={{ opacity: '0.4' }} />
      </div>

      {/* About Text Section */}
      <br />
      <div className="shortintroabout mt-3">
        <div className="icons d-flex justify-content-center gap-3">
          <Code color="#4A5565" width={30} height={30} />
          <Layers color="#4A5565" width={30} height={30} />
          <Database color="#4A5565" width={30} height={30} />
          <Server color="#4A5565" width={30} height={30} />
        </div>

        <div className="py-4" style={{ minHeight: '60vh' }}>
          <div style={{ marginBottom: isMobile ? '50px' : '150px' }}  className="shortintroaboutcontainer" >
            <div className="fw-light mx-4" style={{ 
              fontSize: '60px', 
              color: '#fff', 
              margin: '0px', 
              padding: '0px',
              textAlign: 'left',
              lineHeight: 1,
              wordSpacing: '0.1em'
            }}>
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
                        <span className="typing-cursor w-25 h-25"  />
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
  );
};

export default Home1;