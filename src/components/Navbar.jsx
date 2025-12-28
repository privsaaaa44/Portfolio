import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 992);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Slider for nav links (desktop only)
  useEffect(() => {
    const navGlass = navGlassRef.current;
    if (!navGlass) return;
    
    const slider = sliderRef.current;
    const navLinks = navGlass.querySelectorAll(".nav-link");

    const moveSlider = (link) => {
      const parentRect = navGlass.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      slider.style.width = `${linkRect.width}px`;
      slider.style.left = `${linkRect.left - parentRect.left}px`;
    };

    const activeLink = navGlass.querySelector(".nav-link.active");
    if (activeLink) moveSlider(activeLink);

    const handleMouseEnter = function () {
      moveSlider(this);
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
    });

    const handleMouseLeave = () => {
      if (activeLink) moveSlider(activeLink);
    };
    navGlass.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (activeLink) moveSlider(activeLink);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
      });
      navGlass.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Scroll listener for animations
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log("Window scrollY:", window.scrollY, "Scrolled:", isScrolled); // Debug
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-dark bg-transparent custom-nav position-fixed ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div
          className="container-fluid justify-content-center align-items-center"
          style={{ overflow: "visible" }}
        >
          {/* Nav links - Desktop only */}
          <div
            className="nav-glass px-3 py-2 rounded-pill d-flex gap-4 position-relative"
            ref={navGlassRef}
          >
            <a className="nav-link active fs-6" href="#">
              <HiOutlineHome className="fs-5 me-1" />
              <span className="navbarlink text-white">Home</span>
            </a>
            <a className="nav-link fs-6" href="#">
              <HiOutlineDocumentText className="fs-5 me-1" />
              <span className="navbarlink">About</span>
            </a>
            <a className="nav-link fs-6" href="#projectpage">
              <PiSuitcaseSimpleBold className="fs-5 me-1" />
              <span className="navbarlink">Project</span>
            </a>
            <a className="nav-link fs-6" href="#contactpage">
              <IoMailOutline className="fs-5 me-1" />
              <span className="navbarlink">Contact</span>
            </a>
            <div className="slider" ref={sliderRef}></div>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style>{`
    .custom-nav {
  top: 20px;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
}

        .nav-glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          padding: 12px 24px;
          gap: 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .custom-nav.navbar-scrolled .nav-glass {
          padding: 6px 12px !important;
          gap: 8px !important;
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
          gap: 4px;
          padding: 8px 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
        }

        .nav-link.active {
          color: white;
        }

        .custom-nav.navbar-scrolled .nav-link {
          padding: 6px 8px !important;
        }

        .custom-nav.navbar-scrolled .nav-link svg {
          font-size: 18px;
        }

        .slider {
          position: absolute;
          bottom: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Navbar;