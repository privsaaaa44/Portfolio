import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";

const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Slider for nav links
  useEffect(() => {
    const navGlass = navGlassRef.current;
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
  }, []);

  // Scroll listener for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-dark bg-transparent custom-nav">
      <div
        className="container-fluid justify-content-between align-items-center px-4"
        style={{ overflow: "visible" }}
      >
        {/* Brand */}
        <div
          className={`navbar-brand fw-bold animated-item a ${
            scrolled ? "slide-left" : "slide-left-reset"
          }`}
        >
         DEV
        </div>

        {/* Nav links */}
        <div
          className="nav-glass px-3 py-2 rounded-pill d-flex gap-4"
          ref={navGlassRef}
        >
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Project
          </a>
          <a className="nav-link" href="#">
            Blog
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>

          <div className="slider" ref={sliderRef}></div>
        </div>

        {/* Social links */}
        <div
          className={`text-end fs-6 animated-item ${
            scrolled ? "slide-right" : "slide-right-reset"
          }`}
          style={{ color: "hsl(0deg 0% 100% / 75%)" }}
        >
          <h6>Social Links:</h6>
          <div className="social-links d-flex gap-3 text-uppercase">
            <a href="https://www.facebook.com" className="social-link">
              FB
            </a>
          
            <a
              href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b/"
              className="social-link"
            >
              IN
            </a>
            <a href="https://github.com/privsaaaa44" className="social-link">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
