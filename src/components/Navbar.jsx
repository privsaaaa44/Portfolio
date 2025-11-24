import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";

const Navbar = () => {
  const sliderRef = useRef(null);
  const navGlassRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Slider for nav links (desktop only)
  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  // Scroll listener for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isMenuOpen &&
        !event.target.closest(".mobile-menu-content") &&
        !event.target.closest(".navbar-toggler")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 991px) {
          .navbar-brand {
            font-size: clamp(1rem, 4vw, 1.5rem) !important;
          }

          .nav-glass {
            display: none !important;
          }

          .social-links-desktop {
            display: none !important;
          }

          .navbar-toggler {
            position: relative;
            z-index: 1050;
          }

          .navbar-toggler-icon {
            width: clamp(1.2rem, 5vw, 1.5rem);
            height: clamp(1.2rem, 5vw, 1.5rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }

          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(8px);
            z-index: 1040;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .mobile-menu-content {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1041;
            overflow-y: auto;
            padding: clamp(1rem, 5vw, 2rem);
          }

          .mobile-close-btn {
            position: absolute;
            top: clamp(1rem, 3vw, 1.5rem);
            right: clamp(1rem, 3vw, 1.5rem);
            background: none;
            border: none;
            color: white;
            font-size: clamp(1.5rem, 5vw, 2rem);
            cursor: pointer;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: clamp(2rem, 6vw, 2.5rem);
            height: clamp(2rem, 6vw, 2.5rem);
            border-radius: 50%;
            transition: all 0.3s ease;
            z-index: 1042;
          }

          .mobile-close-btn:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: scale(1.1);
          }

          .mobile-nav-links {
            width: 100%;
            max-width: 600px;
          }

          .mobile-nav-links .nav-link {
            font-size: clamp(1.1rem, 4vw, 1.5rem);
            color: rgba(255, 255, 255, 0.75);
            transition: all 0.3s ease;
            position: relative;
          }

          .mobile-nav-links .nav-link:hover,
          .mobile-nav-links .nav-link.active {
            color: white;
            transform: scale(1.05);
          }

          .mobile-nav-links .nav-link::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            transition: width 0.3s ease;
          }

          .mobile-nav-links .nav-link:hover::after,
          .mobile-nav-links .nav-link.active::after {
            width: 100%;
            background: white;
          }

          .mobile-social-links {
            width: 100%;
            max-width: 600px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: clamp(1rem, 3vw, 2rem);
            padding-top: clamp(1rem, 3vw, 2rem);
          }

          .mobile-social-links h6 {
            font-size: clamp(0.9rem, 2vw, 1.1rem);
            color: rgba(255, 255, 255, 0.75);
          }

          .mobile-social-links .social-link {
            font-size: clamp(0.8rem, 2vw, 0.95rem);
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 0.8rem);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }

          .mobile-social-links .social-link:hover {
            color: white;
            border-color: rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.05);
          }
        }

        @media (min-width: 992px) {
          .navbar-brand {
            font-size: clamp(1.1rem, 2vw, 1.5rem);
            transition: all 0.3s ease;
          }

          .nav-glass {
            display: flex !important;
            padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem) !important;
            gap: clamp(1rem, 2vw, 1.5rem) !important;
            border-radius: 50px;
          }

          .nav-link {
            color: rgba(255, 255, 255, 0.75) !important;
            font-size: clamp(0.85rem, 1.2vw, 1rem);
            transition: color 0.3s ease;
            position: relative;
            white-space: nowrap;
            padding: clamp(0.4rem, 0.8vw, 0.6rem) clamp(0.6rem, 1vw, 0.9rem) !important;
          }

          .nav-link:hover {
            color: white !important;
          }

          .nav-link.active {
            color: white !important;
          }

          .slider {
            position: absolute;
            bottom: 0;
            height: 3px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          .social-links-desktop {
            display: flex !important;
            flex-direction: column;
            align-items: flex-end;
            gap: clamp(0.4rem, 1vw, 0.6rem);
          }

          .social-links-desktop h6 {
            font-size: clamp(0.75rem, 1vw, 0.9rem);
            margin: 0;
            color: rgba(255, 255, 255, 0.75);
          }

          .social-links {
            display: flex;
            gap: clamp(0.75rem, 1.5vw, 1rem) !important;
          }

          .social-link {
            font-size: clamp(0.65rem, 0.9vw, 0.8rem);
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
          }

          .social-link:hover {
            color: white;
            transform: translateY(-2px);
          }

          .social-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: white;
            transition: width 0.3s ease;
          }

          .social-link:hover::after {
            width: 100%;
          }
        }

        /* General responsive adjustments */
        .container-fluid {
          padding: clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem) !important;
        }

        .animated-item {
          transition: all 0.3s ease;
        }

        /* Ensure proper spacing on all screens */
        @media (max-width: 576px) {
          .container-fluid {
            padding: clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 2vw, 1rem) !important;
          }
        }
      `}</style>

      <nav className="navbar navbar-dark bg-transparent custom-nav">
        <div
          className="container-fluid justify-content-between align-items-center"
          style={{ overflow: "visible" }}
        >
          {/* Brand */}
          <div
            className={`navbar-brand fw-bold animated-item ${
              scrolled ? "slide-left" : "slide-left-reset"
            }`}
          >
            DEV
          </div>

          {/* Nav links - Desktop only */}
          <div
            className="nav-glass px-3 py-2 rounded-pill d-flex gap-4 position-relative"
            ref={navGlassRef}
          >
            <a className="nav-link active" href="#" onClick={() => {}}>
              Home
            </a>
            <a className="nav-link" href="#" onClick={() => {}}>
              About
            </a>
            <a className="nav-link" href="#projectpage" onClick={() => {}}>
              Project
            </a>
            <a className="nav-link" href="#contactpage" onClick={() => {}}>
              Contact
            </a>

            <div className="slider" ref={sliderRef}></div>
          </div>

          {/* Social links - Desktop only */}
          <div
            className="social-links-desktop animated-item"
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

          {/* Mobile menu button */}
          {isMobile && (
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {/* Mobile menu overlay */}
          {isMobile && isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button
                  className="mobile-close-btn"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  ✕
                </button>

                {/* Mobile nav links */}
                <div className="mobile-nav-links d-flex flex-column align-items-center gap-4 py-4">
                  <a
                    className="nav-link active"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                  <a
                    className="nav-link"
                    href="#projectpage"
                    onClick={closeMobileMenu}
                  >
                    Project
                  </a>
                  <a
                    className="nav-link"
                    href="#contactpage"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile social links */}
                <div className="mobile-social-links text-center py-4">
                  <h6 className="mb-3">Social Links:</h6>
                  <div className="social-links d-flex justify-content-center gap-4 text-uppercase">
                    <a
                      href="https://www.facebook.com"
                      className="social-link"
                      onClick={closeMobileMenu}
                    >
                      FB
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b/"
                      className="social-link"
                      onClick={closeMobileMenu}
                    >
                      IN
                    </a>
                    <a
                      href="https://github.com/privsaaaa44"
                      className="social-link"
                      onClick={closeMobileMenu}
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;