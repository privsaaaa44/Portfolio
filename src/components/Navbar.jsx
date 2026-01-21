import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import {House, FileText, BriefcaseBusiness, Mail} from "lucide-react"
const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0); // 0=home, 1=resume, 2=project, 3=contact
  const lastScrollY = useRef(0);

  // Scroll listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Navbar compress/expand
          if (currentScrollY < 50) {
            setScrolled(false);
          } else if (currentScrollY > lastScrollY.current) {
            setScrolled(true);
          } else if (currentScrollY < lastScrollY.current) {
            setScrolled(false);
          }

          lastScrollY.current = currentScrollY;

          // Section detection
          const homepage = document.getElementById("homepage");
          const resumepage = document.getElementById("resumepage");
          const projectpage = document.getElementById("projectpage");
          const contactpage = document.getElementById("contactpage");

          const offset = 150;

          if (contactpage) {
            const rect = contactpage.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom > offset) {
              setActiveSection(3);
              ticking = false;
              return;
            }
          }

          if (projectpage) {
            const rect = projectpage.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom > offset) {
              setActiveSection(2);
              ticking = false;
              return;
            }
          }

          if (resumepage) {
            const rect = resumepage.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom > offset) {
              setActiveSection(1);
              ticking = false;
              return;
            }
          }

          if (homepage) {
            const rect = homepage.getBoundingClientRect();
            if (rect.bottom > offset) {
              setActiveSection(0);
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle body class for top light
  useEffect(() => {
    if (scrolled) {
      document.body.classList.add("nav-scrolled");
    } else {
      document.body.classList.remove("nav-scrolled");
    }
  }, [scrolled]);

  // Update slider
  useEffect(() => {
    const updateSliderPosition = () => {
      const slider = sliderRef.current;
      const navGlass = navGlassRef.current;

      if (!slider || !navGlass) return;

      const links = navGlass.querySelectorAll(".nav-link");
      const activeLink = links[activeSection];

      if (activeLink) {
        requestAnimationFrame(() => {
          void navGlass.offsetHeight;

          const linkRect = activeLink.getBoundingClientRect();
          const navRect = navGlass.getBoundingClientRect();

          const leftPos = linkRect.left - navRect.left;
          const width = linkRect.width;

          slider.style.left = `${leftPos}px`;
          slider.style.width = `${width}px`;
        });
      }
    };

    updateSliderPosition();
    const timer1 = setTimeout(updateSliderPosition, 50);
    const timer2 = setTimeout(updateSliderPosition, 150);
    const timer3 = setTimeout(updateSliderPosition, 320);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeSection, scrolled]);

  const scrollToSection = (sectionId, index) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setActiveSection(index);
  };

  return (
    <>
      <nav
        className={`navbar naya navbar-dark bg-transparent custom-nav position-fixed ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="align-items-center">
          <div
            className="nav-glass px-3 py-1 d-flex  position-relative"
            ref={navGlassRef}
          >
            <button
              style={{ fontSize: "14px" }}
              onClick={() => scrollToSection("homepage", 0)}
              className={`nav-link ${
                activeSection === 0 ? "active" : ""
              } homenav-link`}
            >
              <House className={`homeicon ${activeSection === 0 ? "icon-zoom" : ""}`} />
              <span className="navbarlink text-white" style={{marginLeft: '6px'}} >Home</span>
            </button>

            <button
              onClick={() => scrollToSection("resumepage", 1)}
              className={`nav-link ${
                activeSection === 1 ? "active" : ""
              } aboutnav-link`}
            >
              <FileText width={18} height={18} className={`${activeSection === 1 ? "icon-zoom" : ""}`} />
              <span className="navbarlink" style={{marginLeft: '6px'}} >Resume</span>
            </button>

            <button
              onClick={() => scrollToSection("projectpage", 2)}
              className={`nav-link ${
                activeSection === 2 ? "active" : ""
              } fs-6 projectnav-link`}
            >
              <BriefcaseBusiness width={18} height={18} className={`${activeSection === 2 ? "icon-zoom" : ""}`} />
              <span className="navbarlink" style={{marginLeft: '6px'}} >Project</span>
            </button>

            <button
              onClick={() => scrollToSection("contactpage", 3)}
              className={`nav-link ${
                activeSection === 3 ? "active" : ""
              } fs-6 contactnav-link`}
            >
              <Mail width={18} height={18} className={`${activeSection === 3 ? "icon-zoom" : ""}`} />
              <span className="navbarlink ms-1">Contact</span>
            </button>

            <div className="slider" ref={sliderRef}></div>
          </div>
        </div>
      </nav>

      <style>{`
        .custom-nav {
          top: 4px;
          width: 100%;
          z-index: 999 !important;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
        }

        .nav-glass {
          border: 1px solid #191919;
          background: #00000066 !important;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px !important;
          padding: 8px !important;
          gap: 0px;
          border-radius: 3.40282e38px !important;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: visible;
        }

        .custom-nav.navbar-scrolled .nav-glass {
          padding: 7px 7px !important;
          border: 2px solid #191919 !important;
          background : #000000b3 !important;
              box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px;
      backdrop-filter: blur(12px) !important;
              }

        .navbarlink {
          font-size: 14px;
          white-space: nowrap;
          display: inline-block;
          transition: opacity 0.3s ease, max-width 0.3s ease;
          max-width: 200px;
        }

        .custom-nav.navbar-scrolled .navbarlink {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
        }

        .nav-link {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0px;
          padding: 8px 12px !important;
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          z-index: 2;
          background: transparent;
          border: none !important;
          outline: none !important;
        }

        .nav-link.active {
          color: white;
        }

        .custom-nav.navbar-scrolled .nav-link {
          padding: 6px 10px !important;

        }

        .custom-nav.navbar-scrolled .nav-link svg {
          font-size: 18px;
        }

        .custom-nav.navbar-scrolled .slider {
        width: 38px !important;
        height: 34px !important;
          border-radius: 70px !important;
        }

        .homeicon {
          width:  18px !important;
          height: 18px !important;
        }

        .aboutnav-link,
        .homenav-link,
        .projectnav-link,
        .contactnav-link {
          transition: all 0.3s ease;
        }
  
        .aboutnav-link:hover,
        .homenav-link:hover,
        .projectnav-link:hover,
        .contactnav-link:hover {
          background: #262626;
          border-radius: 25px;
          transform: scale(1.06);
        }

        /* Icon zoom animation */
        @keyframes iconZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .icon-zoom {
          animation: iconZoom 1.5s ease-in-out infinite !important;
        }

        /* Top ambient light */
        body::before {
          content: "";
          position: fixed;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          width: 620px;
          height: 520px;
          background: radial-gradient(
            ellipse at top,
            rgba(255, 255, 255, 0.22),
            rgba(255, 255, 255, 0.10),
            rgba(255, 255, 255, 0.04),
            transparent 65%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(8px);
          transition: opacity 0.3s ease;
        }

        body.nav-scrolled::before {
          opacity: 0;
        }

        .slider {
          position: absolute; 
          height: 36px !important;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                      height 0.3s ease;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          pointer-events: none;
          will-change: left, width;
        }
      `}</style>
    </>
  );
};

export default Navbar;