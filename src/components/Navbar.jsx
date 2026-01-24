import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, FileText, Briefcase, Mail } from "lucide-react"

const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const whatsappBtnRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 50) {
            setScrolled(false);
          } else if (currentScrollY > lastScrollY.current) {
            setScrolled(true);
          } else if (currentScrollY < lastScrollY.current) {
            setScrolled(false);
          }

          lastScrollY.current = currentScrollY;

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

  const handleWhatsAppMouseEnter = () => {
    setIsShaking(true);
    const img = whatsappBtnRef.current?.querySelector('svg');
    if (img) {
      img.classList.remove('wa-shake');
      void img.offsetWidth;
      img.classList.add('wa-shake');
    }
  };

  const handleAnimationEnd = () => {
    setIsShaking(false);
  };

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in discussing a project.";
    const phoneNumber = "923152453522";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <nav
        className={`navbar naya navbar-dark mt-2 bg-transparent custom-nav position-fixed ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="d-flex justify-content-center w-100">
          <div
            className="nav-glass px-3 py-1 d-flex position-relative"
            ref={navGlassRef}
          >
            <button
              style={{ fontSize: "14px" }}
              onClick={() => scrollToSection("homepage", 0)}
              className={`nav-link ${
                activeSection === 0 ? "active" : ""
              } homenav-link`}
            >
              <Home className={`homeicon ${activeSection === 0 ? "icon-zoom" : ""}`} size={18} />
              <span className="navbarlink text-white">Home</span>
            </button>

            <button
              onClick={() => scrollToSection("resumepage", 1)}
              className={`nav-link ${
                activeSection === 1 ? "active" : ""
              } aboutnav-link`}
            >
              <FileText size={18} className={`${activeSection === 1 ? "icon-zoom" : ""}`} />
              <span className="navbarlink">Resume</span>
            </button>

            <button
              onClick={() => scrollToSection("projectpage", 2)}
              className={`nav-link ${
                activeSection === 2 ? "active" : ""
              } fs-6 projectnav-link`}
            >
              <Briefcase size={18} className={`${activeSection === 2 ? "icon-zoom" : ""}`} />
              <span className="navbarlink">Project</span>
            </button>

            <button
              onClick={() => scrollToSection("contactpage", 3)}
              className={`nav-link ${
                activeSection === 3 ? "active" : ""
              } fs-6 contactnav-link`}
            >
              <Mail size={18} className={`${activeSection === 3 ? "icon-zoom" : ""}`} />
              <span className="navbarlink">Contact</span>
            </button>

            <div className="slider" ref={sliderRef}></div>
          </div>
        </div>
      </nav>

      <button
        ref={whatsappBtnRef}
        onClick={openWhatsApp}
        onMouseEnter={handleWhatsAppMouseEnter}
        className={`whatsapp-floating-btn ${isShaking ? 'wa-shake-btn' : ''}`}
      >
        <div className="circel-ring border border-3 border-black bg-light" style={{top: '-5px', right: '-5px', width: '17.89px', height: '17.89px', position: 'absolute', borderRadius: '50%',}}>
        </div>
        <Mail size={30} onAnimationEnd={handleAnimationEnd} className="wa-icon" />
      </button>

      <style>{`
        .custom-nav {
          top: 4px;
          width: 100%;
          z-index: 999 !important;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          padding: 0 10px;
        }

        .nav-glass {
          border: 1px solid #191919;
          background: #00000066 !important;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px !important;
          padding: 8px 12px !important;
          gap: 8px;
          border-radius: 3.40282e38px !important;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: visible;
          flex-wrap: nowrap;
          justify-content: center;
          max-width: 100%;
        }

        .custom-nav.navbar-scrolled .nav-glass {
          padding: 7px 7px !important;
          border: 2px solid #191919 !important;
          background: #000000b3 !important;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px;
          backdrop-filter: blur(12px) !important;
          gap: 4px;
        }

        .navbarlink {
          font-size: 14px;
          white-space: nowrap;
          display: inline-block;
          transition: opacity 0.3s ease, max-width 0.3s ease, margin 0.3s ease;
          max-width: 200px;
          margin-left: 6px;
          color: rgba(255, 255, 255, 0.7);
        }

        .nav-link.active .navbarlink {
          color: white;
        }

        .custom-nav.navbar-scrolled .navbarlink {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          margin-left: 0;
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
          width: 18px !important;
          height: 18px !important;
          flex-shrink: 0;
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

        .whatsapp-floating-btn {
          position: fixed !important;
          right: 30px;
          bottom: 35px;
          width: 50px;
          height: 50px;
          backdrop-filter: blur(38px);
          border-radius: 50%;
          background: linear-gradient(to right bottom, rgb(167 149 149 / 40%), rgb(40 36 36 / 90%));
          border: 1px solid gray;
          padding: 0px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          z-index: 10000 !important;
          transition: all 0.3s ease !important;
          isolation: isolate !important;
        }

        .whatsapp-floating-btn:hover {
          background: linear-gradient(to right bottom, rgb(167 149 149 / 60%), rgb(40 36 36 / 40%)) !important;
          border: 1px solid rgba(230, 227, 227, 0.15);
        }

        @keyframes wa-shake-btn {
          0%, 100% { transform: scale(1) translateX(0); }
          10% { transform: scale(1.05) translateX(-1px); }
          20% { transform: scale(1.05) translateX(1px); }
          30% { transform: scale(1.05) translateX(-1px); }
          40% { transform: scale(1.05) translateX(1px); }
          50% { transform: scale(1.05) translateX(-1px); }
          60% { transform: scale(1.05) translateX(1px); }
          70% { transform: scale(1.05) translateX(-1px); }
          80% { transform: scale(1.05) translateX(1px); }
          90% { transform: scale(1.05) translateX(-1px); }
        }

        .whatsapp-floating-btn.wa-shake-btn {
          animation: wa-shake-btn 0.8s ease-in-out;
        }

        @keyframes wa-shake {
          0%, 100% { transform: scale(1.02) translateX(0); }
          10% { transform: scale(1.05) translateX(-1px); }
          20% { transform: scale(1.05) translateX(1px); }
          30% { transform: scale(1.05) translateX(-1px); }
          40% { transform: scale(1.05) translateX(1px); }
          50% { transform: scale(1.05) translateX(-1px); }
          60% { transform: scale(1.05) translateX(1px); }
          70% { transform: scale(1.05) translateX(-1px); }
          80% { transform: scale(1.05) translateX(1px); }
          90% { transform: scale(1.05) translateX(-1px); }
        }

        .wa-icon.wa-shake {
          animation: wa-shake 0.8s ease-in-out;
        }

        /* Tablet Responsiveness */
        @media (max-width: 1024px) {
          .nav-glass {
            gap: 6px;
            padding: 8px 10px !important;
          }

          .nav-link {
            padding: 7px 10px !important;
          }

          .navbarlink {
            font-size: 13px;
            // margin-left: 5px;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .custom-nav {
            padding: 0 20px;
          }

         .nav-glass {
        gap: 6px !important;
        padding: 8px 7px !important;
        border-radius: 25px !important;
    }

          .nav-link {
            padding: 7px 10px !important;
            font-size: 11px;
          }

          .navbarlink {
            font-size: 11px;
            // margin-left: 6px;
            max-width: none;
            opacity: 1;
            display: inline;
          }

          .homeicon,
          .nav-link svg {
            width: 16px !important;
            height: 16px !important;
          }
    .custom-nav.navbar-scrolled .nav-glass {
        gap: 9px !important;
        padding: 8px 18px !important;
    }

          .custom-nav.navbar-scrolled .nav-link {
            padding: 6px 8px !important;
          }

          .custom-nav.navbar-scrolled .navbarlink {
            opacity: 0;
            max-width: 0;
            overflow: hidden;
            margin-left: 0;
          }

          .custom-nav.navbar-scrolled .slider {
            height: 32px !important;
            border-radius: 20px !important;
          }

          .whatsapp-floating-btn {
            right: 15px;
            bottom: 20px;
            width: 45px;
            height: 45px;
          }

          .whatsapp-floating-btn svg {
            width: 22px;
            height: 22px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .custom-nav {
            padding: 0 12px;
            top: 5px !important;
          }
.slider {
height: 30px !important;
}
          .nav-glass {
            gap: 6px;
            padding: 7px 8px !important;
            border-radius: 25px !important;
          }

          .nav-link {
            padding: 6px 8px !important;
            font-size: 12px;
          }

          .navbarlink {
            font-size: 11px;
            // margin-left: 4px;
            max-width: none;
            opacity: 1;
            display: inline;
          }

          .homeicon,
          .nav-link svg {
            width: 15px !important;
            height: 15px !important;
          }

           .custom-nav.navbar-scrolled .nav-glass {
        gap: 9px !important;
        padding: 10px 20px !important;
    }
          .custom-nav.navbar-scrolled .nav-link {
            padding: 5px 6px !important;
          }

          .custom-nav.navbar-scrolled .navbarlink {
            opacity: 0;
            max-width: 0;
            overflow: hidden;
            margin-left: 0;
          }

          .custom-nav.navbar-scrolled .slider {
          // width: 20px;  
          height: 28px !important;
            border-radius: 10px !important;
          }

          .whatsapp-floating-btn {
            right: 12px;
            bottom: 18px;
            width: 42px;
            height: 42px;
          }

          .whatsapp-floating-btn svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;