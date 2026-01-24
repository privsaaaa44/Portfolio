import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your existing components
import Home1 from "./Home1";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef(0);
  const isMouseOverRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const itemWidthRef = useRef(0);
  const animationIdRef = useRef(null);

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

  // Draggable Track Animation for Project Section
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    setTimeout(() => {
      itemWidthRef.current = track.scrollWidth / 2;
    }, 100);

    const normalize = () => {
      if (itemWidthRef.current > 0) {
        positionRef.current = positionRef.current % itemWidthRef.current;

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

  return (
    <>
      <div>
        {/* Home/Hero Section */}
        <Home1 />

        {/* Resume Section */}
        <Resume />

        {/* Project Section with draggable ref */}
        <Project trackRef={trackRef} isDragging={isDragging} />

        {/* Contact Section */}
        <section id="contactpage">
          <Contact />
        </section>
      </div>

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
            position: relative !important;
            overflow: visible !important;
          }
          .card2:hover {
            transform: scale(1.02);
            transition: all 0.3 ease;
          }

          canvas {
            top: 218% !important;
            width: 1361px !important;
            height: 800px !important;
            user-select: none !important;
            vertical-align: middle !important;
            display: block !important;
            outline-color: color-mix(in oklab, var(--ring) 50%, transparent) !important;
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
          .secondcolumn {
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