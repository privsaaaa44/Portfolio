import React, { useEffect, useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
/* ================= BACKGROUND ================= */

function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();

    const stars = [];
    const numStars = 40;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(255,255,255,0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(drawStars);
    };

    drawStars();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

/* ================= PAGE ================= */

export default function ContactPage() {
  return (
    <>
      <style>{`
        /* Mobile responsiveness */
        @media (max-width: 767px) {
          .responsive-title {
            font-size: 36px !important;
          }
          
          .responsive-subtitle {
            font-size: 16px !important;
            padding: 0 20px;
          }
          
          .responsive-badge {
            font-size: 12px !important;
          }
          
          .contact-card {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .social-card {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .social-section-title {
            font-size: 24px !important;
          }
        }
        
        /* Tablet responsiveness */
        @media (min-width: 768px) and (max-width: 991px) {
          .responsive-title {
            font-size: 48px !important;
          }
          
          .responsive-subtitle {
            font-size: 18px !important;
          }
          
          .contact-card {
            width: 48% !important;
            max-width: 48% !important;
          }
          
          .social-card {
            width: 48% !important;
            max-width: 48% !important;
          }
        }
        
        /* Ensure proper spacing on mobile */
        @media (max-width: 767px) {
          .contact-cards-container {
            gap: 0 !important;
          }
          
          .social-cards-container {
            gap: 0 !important;
          }
        }
      `}</style>
      
      <div className=''
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'black',
        }}
      >
        <StarfieldBackground />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <div data-aos="fade-up">
            <div className="d-flex justify-content-center ">
              <div className="resumesectiondiv resumesectiondiv align-item-center  text-center rounded-pill d-flex justify-content-center border border-dark" style={{ background: 'linear-gradient(to left bottom, rgb(167 149 149 / 10%), rgb(40 36 36 / 80%))', width:'112.52', height: '42px'}}>
                <h3 className="aboutmeheadingh3 text-center resumesectionh3 text-capitalize fw-medium responsive-badge" style={{fontSize: '14px', color: '#f1f1f1', padding: '8px 16px', margin: '0px 0px 5px', marginTop: '4px'}}>Let's Connect</h3>
              </div>
            </div>

            <h1 className="text-center text-white mt-2 fw-bold w-100 mt-4 responsive-title" style={{ fontSize: '72px' }}>
              Get In Touch
            </h1>

            <p
              className="text-center px-md-0 w-100 mt-3 responsive-subtitle"
              style={{ fontSize: '20px', color: '#ffffff99' }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <br />

          {/* CONTACT CARDS */}
          <div data-aos="fade-up" className="d-flex justify-content-center mt-4 flex-column flex-md-row px-3 px-md-0 contact-cards-container">
            <a className="card1link" href="mailto:sadiqsiraj44@gmail.com" target="_blank" rel="noreferrer">
              <div className="abcdef rounded-4 shadow-lg fs-5 py-2 px-2 mt-4 card-1 border border-dark contact-card" style={{ maxWidth: '360px', height: '240px', borderRadius: '30px', width: '366px' }}>
                <div className="d-flex justify-content-center align-items-center m-4 email-icon404" style={{ width: '64px', height: '64px', borderRadius: '14px', backgroundColor: '#1C1C1E' }}>
                  <MdOutlineEmail style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>
                <div className="newone m-4">
                  <h5 className="text-white fs-5 firstone mt-4 fw-bold">Email me</h5>
                  <h6 className="firstone mt-2 fw-normal" style={{ fontSize: '14px', color: '#ffffff99' }}>
                    Drop me a text anytime
                  </h6>
                  <h5 className="text-white firston mt-3 fw-medium" style={{ fontSize: '18px' }}>
                    sadiqsiraj44@gmail.com
                  </h5>
                </div>
              </div>
            </a>

            <div className="abcdef rounded-4 shadow-lg fs-5 py-2 px-2 mt-4 card-1 border border-dark contact-card" style={{ maxWidth: '360px', height: '240px', borderRadius: '30px', width: '366px' }}>
              <div className="d-flex justify-content-center  align-items-center m-4 email-icon404" style={{ width: '64px', height: '64px', borderRadius: '14px', backgroundColor: '#1C1C1E' }}>
                <LuPhone style={{ width: '28px', height: '28px', color: 'white' }} />
              </div>
              <div className="newone m-4">
                <h5 className="text-white fs-5 firstone mt-4 fw-bold">Call me</h5>
                <h6 className="firstone mt-2 fw-normal" style={{ fontSize: '14px', color: '#ffffff99' }}>
                  Mon-Fri from 9am to 6am
                </h6>
                <h5 className="text-white firston mt-3" style={{ fontSize: '18px' }}>
                  +92 315 2453522
                </h5>
              </div>
            </div>

            <div className="abcdef rounded-4 shadow-lg fs-5 py-2 px-2 mt-4 card-1 border border-dark contact-card" style={{ maxWidth: '360px', height: '240px', borderRadius: '30px', width: '366px' }}>
              <div className="d-flex justify-content-center align-items-center m-4 email-icon404" style={{ width: '64px', height: '64px', borderRadius: '14px', backgroundColor: '#1C1C1E' }}>
                <FiMapPin style={{ width: '28px', height: '28px', color: 'white' }} />
              </div>
              <div className="newone m-4">
                <h5 className="text-white fs-5 firstone mt-4 fw-bold">Visit me</h5>
                <h6 className="firstone mt-2 fw-normal" style={{ fontSize: '14px', color: '#ffffff99' }}>
                  Come say hello
                </h6>
                <h5 className="text-white firston mt-3" style={{ fontSize: '18px' }}>
                  Pakistan, Karachi
                </h5>
              </div>
            </div>
          </div>

          <br />

          <h4 className="text-center text-white mt-4 mb-3 fw-bold social-section-title" style={{ fontSize: '30px' }}>
            Connect on Social Media
          </h4>

          <div data-aos="zoom-out-up" className="d-flex justify-content-center flex-column flex-md-row px-3 px-md-0 social-cards-container" style={{ gap: '1.5rem' }}>
            <div className="abcdef shadow-lg fs-5 py-2 px-3 mt-4 card-1_1 border border-dark social-card" style={{ height: '104px', background: '#0f0f0f', width: '434px', borderRadius: '14px' }}>
              <a href="https://github.com/privsaaaa44" target="_blank" rel="noreferrer">
                <div className="d-flex align-items-center mt-3">
                  <div className="email-icon404" style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiGithub color="white" style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div className="newone ms-3">
                    <h5 className="fw-medium" style={{ fontSize: '14px', color: '#ffffff99' }}>
                      GitHub
                    </h5>
                    <h6 className="text-white fs-6 fw-semibold">@privsaaaa44</h6>
                  </div>
                  <div className="ms-auto">
                    <BsBoxArrowUpRight className="fs-6 arrowicon" style={{ color: '#ffffff99' }} />
                  </div>
                </div>
              </a>
            </div>

            <div className="abcdef shadow-lg fs-5 py-2 px-3 mt-4 card-1_1 border border-dark social-card" style={{ height: '104px', background: '#0f0f0f', width: '434px', borderRadius: '14px' }}>
              <a href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b" target="_blank" rel="noreferrer">
                <div className="d-flex align-items-center mt-3">
                  <div className="email-icon404" style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiLinkedin color="white" style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div className="newone ms-3">
                    <h5 className="fw-medium" style={{ fontSize: '14px', color: '#ffffff99' }}>
                      LinkedIn
                    </h5>
                    <h6 className="text-white fs-6 fw-semibold">@muhammad-sadiq</h6>
                  </div>
                  <div className="ms-auto">
                    <BsBoxArrowUpRight className="fs-6 arrowicon" style={{ color: '#ffffff99' }} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}