// sections/ProjectPageSection.jsx
import React from "react";
import { ExternalLink, Github, MoveRight } from 'lucide-react';
// Import project images
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
// Import skill icons
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.svg";
import s13 from "../assets/s13.png";
import s16 from "../assets/s16.png";
import s18 from "../assets/s18.svg";

const ProjectCard = ({ link, badge, image, title, description, technologies, isDragging }) => {
  return (
    <a href={link} className="projectcardlink" target="_blank" rel="noopener noreferrer">
      <div
        className="projectcard rounded-4 shadow-lg border border-dark"
        style={{
          width: '100%',
          maxWidth: '35rem',
          height: 'auto',
          minHeight: '117vh',
          backgroundColor: '#0E1011',
          borderWidth: '1px',
          overflow: 'hidden'
        }}
      >
        <div className="resumesectiondiv d-flex align-items-center rounded-pill border border-dark ms-auto me-2 mt-1" style={{ background: '#0D0D0D', width: 'fit-content' }}>
          <h3 className="aboutmeheadingh3 resumesectionh3 text-capitalize py-2 px-3 m-0 fw-lighter" style={{ fontSize: '14px', color: '#ffffff99' }}>
            {badge}
          </h3>
        </div>

        <div
          className="mt-1 border-2 border-top border-dark border-left imagebgproject"
          style={{
            height: 'clamp(250px, 45vh, 45vh)',
            backgroundImage: `url(${image})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0px'
          }}
        ></div>

        <div className="card-content align-items-left ms-3 ms-md-4 me-3" style={{ textAlign: 'left', paddingTop: '8px', marginTop: '0px' }}>
          <h1 className="fs-4 text-white fw-bold m-0 p-0" style={{ fontSize: 'clamp(18px, 5vw, 24px)', lineHeight: '1.2' }}>{title}</h1>

          <div className="mt-1 rounded-end" style={{ width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0', minWidth: '30px', marginTop: '6px !important', marginBottom: '6px !important' }}></div>
          <h3 className="card-h3 fs-6 w-100 lh-base m-0 p-0" style={{ color: '#d1d5dc', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: '8px !important' }}>
            {description}
          </h3>

          <div className="d-flex flex-wrap gap-2" style={{ gap: '8px', marginTop: '8px' }}>
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="d-flex flex-column align-items-center justify-content-center rounded-3"
                style={{ 
                  minHeight: '70px', 
                  backgroundColor: '#1a1a1a', 
                  minWidth: '115px', 
                  padding: '24px 20px', 
                  border: '1px solid #2a2a2a',
                  flex: '0 1 auto'
                }}
              >
                <img
                  src={tech.icon}
                  width={20}
                  height={20}
                  className="mb-1"
                  style={{ filter: tech.filter }}
                  alt={tech.name}
                />
                <span className="text-secondary fw-medium" style={{ fontSize: '10px', color: '#ffffff99' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="simplecardtext mt-2 d-flex align-items-center flex-wrap" style={{ marginTop: '6px !important' }}>
            <span style={{ fontSize: '12px', color: '#ffffff99' }}>+{technologies.length > 4 ? 4 : 1} more</span>
            {[s1, s13, s2, s16].slice(0, Math.min(4, technologies.length)).map((icon, idx) => (
              <span
                key={idx}
                className="circlelogoextra border border-dark"
                style={{
                  backgroundColor: '#1a1a1a',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: idx === 0 ? '8px' : '-5px',
                  position: 'relative',
                  zIndex: idx + 1,
                  flexShrink: 0
                }}
              >
                <img
                  width={10}
                  height={10}
                  src={icon}
                  alt=""
                  style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
                />
              </span>
            ))}
          </div>

          <div className="projectlivenowbutt mt-2 d-flex align-items-center justify-content-between" style={{ gap: '8px' }}>
            <button
              className="btn btn-light d-flex align-items-center justify-content-center fw-medium"
              style={{ 
                fontSize: "11px", 
                borderRadius: '6px', 
                padding: '5px 12px', 
                height: '30px',
                width: 'auto',
                flexGrow: 1
              }}
              onClick={() => window.open(link, '_blank')}
            >
              <ExternalLink width={11} style={{ flexShrink: 0, marginRight: '4px' }} />
              View Live
            </button>
            <div
              className="githubinproject border border-dark"
              style={{
                backgroundColor: '#1a1a1a',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                cursor: 'pointer'
              }}
              onClick={() => window.open('https://github.com/privsaaaa44', '_blank')}
            >
              <img
                width={13}
                height={13}
                src={s13}
                alt="github"
                style={{ filter: 'invert(1) brightness(1.5) contrast(0.8)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectPageSection = ({ trackRef, isDragging }) => {
  const projects = [
    {
      link: "https://privsaaaa44.github.io/Eproject/home.html",
      badge: "Web Design Project",
      image: p1,
      title: "Decor Delight Furniture Store",
      description: "During my first semester end project at Aptech, I developed a responsive furniture e-commerce website featuring product browsing and custom furniture services, which strengthened my web development and UI/UX design skills.",
      technologies: [
        { icon: s4, name: "JavaScript", filter: 'invert(1) brightness(1.5) contrast(0.8)' },
        { icon: s11, name: "Jquery", filter: 'brightness(0) invert(1)' },
        { icon: s5, name: "JSON", filter: 'invert(1) brightness(1.5) contrast(0.8)' },
        { icon: s3, name: "Bootstrap", filter: 'invert(1) brightness(1.5) contrast(0.8)' }
      ]
    },
    {
      link: "https://mywebmanagers.com/bnb-lisiting-management/",
      badge: "CMS Blog Site",
      image: p2,
      title: "My Web Managers",
      description: "During my internship at IJK Media, I developed a responsive CMS based blog website with integrated service browsing and custom web solutions, enhancing my WordPress development and content management expertise.",
      technologies: [
        { icon: s9, name: "Wordpress", filter: 'brightness(0) invert(1)' },
        { icon: s10, name: "Elementor Pro", filter: 'brightness(0) invert(1)' },
        { icon: s4, name: "JavaScript", filter: 'invert(1) brightness(1.5) contrast(0.8)' },
        { icon: s11, name: "Jquery", filter: 'brightness(0) invert(1)' }
      ]
    },
    {
      link: "https://flavoura-best-resturant-in-pak.vercel.app",
      badge: "Frontend Website",
      image: p3,
      title: "Flavora Restaurant Website",
      description: "During this personal project, I created a restaurant website with online table reservation functionality, allowing customers to browse menus, view available time slots, and book tables through an intuitive interface.",
      technologies: [
        { icon: s6, name: "React.JSX", filter: 'brightness(0) invert(1)' },
        { icon: s3, name: "Bootstrap", filter: 'brightness(0) invert(1)' },
        { icon: s16, name: "Figma", filter: 'invert(1) brightness(1.5) contrast(0.8)' },
        { icon: s18, name: "Vercel", filter: 'invert(1) brightness(1.5) contrast(0.8)' }
      ]
    },
    {
      link: "https://flavoura-best-resturant-in-pak.vercel.app",
      badge: "Frontend Website",
      image: p4,
      title: "Personal Portfolio",
      description: "During this personal project, I created a responsive portfolio website showcasing my projects, skills, and experience, featuring smooth navigation, interactive elements, and modern design principles throughout.",
      technologies: [
        { icon: s6, name: "React.JSX", filter: 'brightness(0) invert(1)' },
        { icon: s3, name: "Bootstrap", filter: 'brightness(0) invert(1)' },
        { icon: s16, name: "Figma", filter: 'invert(1) brightness(1.5) contrast(0.8)' },
        { icon: s18, name: "Vercel", filter: 'invert(1) brightness(1.5) contrast(0.8)' }
      ]
    }
  ];

  return (
    <section id="projectpage" className="mywork text-center mt-5 pt-1" style={{ marginBottom: 'clamp(50px, 20vw, 150px)' }}>
      <div data-aos="fade-up" className="myworkheadings">
        <div className="d-flex justify-content-center px-3">
          <div className="resumesectiondiv resumesectiondiv align-item-center text-center rounded-pill d-flex justify-content-center border border-dark" style={{ background: '#0D0D0D', width: 'fit-content', height: '42px', padding: '0 16px' }}>
            <h3 className="aboutmeheadingh3 text-center resumesectionh3 text-capitalize fw-medium" style={{ fontSize: '14px', color: '#ffffff99', padding: '8px 0px', margin: '0px', marginTop: '4px' }}>
              My Work
            </h3>
          </div>
        </div>
        <h1 className="text-white resumesectionh1 text-center mt-3 fw-bolder px-3" style={{ fontSize: 'clamp(32px, 8vw, 60px)', lineHeight: '1.2' }}>
          Featured Projects
        </h1>
        <p className="resumesectionp mt-3 text-center px-3" style={{ fontSize: 'clamp(14px, 4vw, 18px)', color: '#ffffff99' }}>
          Showcasing my best work across frontend, backend, and full-stack development
        </p>
      </div>

      {/* Desktop Layout - 2 Projects in Row */}
      <div data-aos="fade-up" className="d-none d-lg-flex mt-3 justify-content-center gap-4 p-5">
        {projects.slice(0, 2).map((project, idx) => (
          <ProjectCard key={idx} {...project} isDragging={isDragging} />
        ))}
      </div>

      <div data-aos="fade-up" className="d-none d-lg-flex justify-content-center gap-4 mt-0 p-5 pt-0">
        {projects.slice(2).map((project, idx) => (
          <ProjectCard key={idx + 2} {...project} isDragging={isDragging} />
        ))}
      </div>

      {/* Tablet Layout - 1 Project in Row */}
      <div data-aos="fade-up" className="d-none d-md-flex d-lg-none flex-column justify-content-center gap-4 p-4">
        {projects.map((project, idx) => (
          <div key={idx} className="d-flex justify-content-center">
            <ProjectCard {...project} isDragging={isDragging} />
          </div>
        ))}
      </div>

      {/* Mobile Layout - Full Width Single Column */}
      <div data-aos="fade-up" className="d-flex d-md-none flex-column justify-content-center gap-4 p-3">
        {projects.map((project, idx) => (
          <div key={idx} className="d-flex justify-content-center">
            <ProjectCard {...project} isDragging={isDragging} />
          </div>
        ))}
      </div>

      <div data-aos="fade-up" className="myworklastheading px-3">
        <h6 className="fs-6 mt-5 p-4" style={{ color: '#ffffff99', fontSize: 'clamp(14px, 3vw, 16px)' }}>
          Want to see more of my work?
        </h6>
        <a className="fs-6" target="_blank" href="https://github.com/privsaaaa44" rel="noopener noreferrer">
          <button 
            className="btn border border-secondary border-1 fs-6 rounded-pill p-3 githubworkbutton d-inline-flex align-items-center gap-2" 
            style={{ width: 'clamp(236px, 90%, 19%)' }}
          >
            <Github className="text-white" width={16} height={16} style={{ flexShrink: 0 }} />
            <span className="fs-6 text-white fw-medium">View All on GitHub</span>
            <span>
              <MoveRight width={16} height={16} className="text-white fw-lighter" style={{ flexShrink: 0 }} />
            </span>
          </button>
        </a>
      </div>

      {/* Draggable Text Section */}
      <div className="myworklastonebikul" style={{ marginTop: 'clamp(50px, 15vw, 130px)' }}>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-track {
            animation: scroll 20s linear infinite;
            will-change: transform;
          }
          
          .carousel-track.dragging {
            animation: none !important;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="d-flex gap-0 align-items-center" style={{ userSelect: 'none', cursor: isDragging ? 'grabbing' : 'grab', overflowX: 'hidden' }}>
          <div className="w-100 position-relative" style={{ overflow: 'hidden' }}>
            <div 
              ref={trackRef} 
              className={`carousel-track d-flex align-items-center ${isDragging ? 'dragging' : ''}`}
              style={{ whiteSpace: 'nowrap', willChange: 'transform' }}
            >
              {/* Set 1 */}
              <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{ fontSize: 'clamp(32px, 10vw, 64px)', flexShrink: '0', lineHeight: '1.2' }}>
                LET'S <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                CREATE <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                AND <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                DEVELOP <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                SOFTWARE <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
              </div>

              {/* Set 2 */}
              <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{ fontSize: 'clamp(32px, 10vw, 64px)', flexShrink: '0', lineHeight: '1.2' }}>
                LET'S <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                CREATE <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                AND <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                DEVELOP <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
                SOFTWARE <span className="mx-3" style={{ fontSize: "inherit" }}>✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageSection;