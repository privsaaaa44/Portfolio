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
          width: '35rem',
          height: '117vh',
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
            height: '45vh',
            backgroundImage: `url(${image})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></div>

        <div className="card-content align-items-left ms-4 mt-4" style={{ textAlign: 'left' }}>
          <h1 className="fs-4 text-white fw-bold">{title}</h1>

          <div className="mt-2 rounded-end" style={{ width: '8%', height: '5px', backgroundColor: '#adb5bd', borderRadius: '0 10px 10px 0' }}></div>
          <h3 className="card-h3 fs-6 w-100 lh-base" style={{ color: '#d1d5dc' }}>
            {description}
          </h3>

          <div className="d-flex gap-3 mt-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="d-flex flex-column align-items-center justify-content-center rounded-3"
                style={{ height: '70px', backgroundColor: '#1a1a1a', minWidth: '115px', padding: '24px 20px', border: '1px solid #2a2a2a' }}
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

          <div className="simplecardtext mt-3 d-flex align-items-center">
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
                  zIndex: idx + 1
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

          <div className="projectlivenowbutt mt-3 d-flex justify-content-between align-items-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <button
                className="btn btn-light d-inline-flex align-items-center gap-2 fw-medium"
                style={{ fontSize: "12px", borderRadius: '9px', padding: '6px 12px', height: '26px' }}
              >
                <ExternalLink width={12} />
                View Live
              </button>
            </a>
            <a href="https://github.com/privsaaaa44" target="_blank" rel="noopener noreferrer" className="githubinprojectlink">
              <div
                className="githubinproject border border-dark"
                style={{
                  backgroundColor: '#1a1a1a',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '22px'
                }}
              >
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
    <section id="projectpage" className="mywork text-center mt-5 pt-1" style={{ marginBottom: '150px' }}>
      <div data-aos="fade-up" className="myworkheadings">
        <div className="d-flex justify-content-center">
          <div className="resumesectiondiv resumesectiondiv align-item-center text-center rounded-pill d-flex justify-content-center border border-dark" style={{ background: '#0D0D0D', width: '112.52', height: '42px' }}>
            <h3 className="aboutmeheadingh3 text-center resumesectionh3 text-capitalize fw-medium" style={{ fontSize: '14px', color: '#ffffff99', padding: '8px 16px', margin: '0px 0px 5px', marginTop: '4px' }}>
              My Work
            </h3>
          </div>
        </div>
        <h1 className="text-white resumesectionh1 text-center mt-3 fw-bolder" style={{ fontSize: '60px' }}>
          Featured Projects
        </h1>
        <p className="resumesectionp mt-3 text-center" style={{ fontSize: '18px', color: '#ffffff99' }}>
          Showcasing my best work across frontend, backend, and full-stack development
        </p>
      </div>

      <div data-aos="fade-up" className="d-flex mt-3 justify-content-center gap-4 p-5">
        {projects.slice(0, 2).map((project, idx) => (
          <ProjectCard key={idx} {...project} isDragging={isDragging} />
        ))}
      </div>

      <div data-aos="fade-up" className="d-flex justify-content-center gap-4 mt-0">
        {projects.slice(2).map((project, idx) => (
          <ProjectCard key={idx + 2} {...project} isDragging={isDragging} />
        ))}
      </div>

      <div data-aos="fade-up" className="myworklastheading">
        <h6 className="fs-6 mt-5 p-4" style={{ color: '#ffffff99' }}>
          Want to see more of my work?
        </h6>
        <a className="fs-6" target="_blank" href="https://github.com/privsaaaa44" rel="noopener noreferrer">
          <button className="btn border border-secondary border-1 fs-6 rounded-pill p-3 githubworkbutton" style={{ width: '19%' }}>
            <Github className="text-white me-1" width={16} height={16} />
            <span className="fs-6 text-white fw-medium">View All on GitHub</span>
            <span>
              <MoveRight width={16} height={16} className="ms-2 text-white fw-lighter" />
            </span>
          </button>
        </a>
      </div>

      {/* Draggable Text Section */}
      <div className="myworklastonebikul" style={{ marginTop: '130px' }}>
        <div className="d-flex gap-0 align-items-center" style={{ userSelect: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}>
          <div className="w-100 position-relative" style={{ overflow: 'hidden' }}>
            <div ref={trackRef} className="d-flex align-items-center" style={{ whiteSpace: 'nowrap', willChange: 'transform' }}>
              {/* Set 1 */}
              <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{ fontSize: '64px', flexShrink: '0' }}>
                LET'S <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                CREATE <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                AND <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                DEVELOP <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                SOFTWARE <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
              </div>

              {/* Set 2 */}
              <div className="fw-bold text-white text-uppercase d-flex align-items-center" style={{ fontSize: '64px', flexShrink: '0', lineHeight: '1' }}>
                LET'S <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                CREATE <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                AND <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                DEVELOP <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
                SOFTWARE <span className="mx-3" style={{ fontSize: "64px" }}>✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageSection;