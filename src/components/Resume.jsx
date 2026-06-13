// sections/ResumePageSection.jsx
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Code, Download, Calendar, Circle, Award, MoveRight, Trophy } from 'lucide-react';
import MuhammadSadiqResume from "../assets/Muhammad Sadiq - Resumee.pdf";

const ResumePageSection = ({ isVisible, sectionRef, isHovered, setIsHovered }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsSectionRef = React.useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="resumesection mt-4" id="resumepage">
      <div className="animationresumespecificsection" data-aos="fade-up">
        <div className="d-flex justify-content-center">
          <div className="resumesectiondiv resumesectiondiv align-item-center text-center rounded-pill d-flex justify-content-center border border-dark" style={{ background: '#0D0D0D', width: '112.52', height: '42px' }}>
            <h3 className="aboutmeheadingh3 text-center resumesectionh3 text-capitalize fw-medium" style={{ fontSize: '14px', color: '#ffffff99', padding: '8px 16px', margin: '0px 0px 5px', marginTop: '4px' }}>
              My Resume
            </h3>
          </div>
        </div>
        <h1 className="text-white resumesectionh1 text-center mt-4 fw-bold" style={{ fontSize: isMobile ? '24px' : '48px' }}>
          Professional Experience
        </h1>
        <p className="resumesectionp mt-3 fw-lighter" style={{ fontSize: isMobile ? '14px' : '18px', color: '#ffffff99' }}>
          A comprehensive overview of my skills, experience, and achievements
        </p>
      </div>
      <br />

      <div className="d-flex justify-content-center resumesectionresumediv mt-5">
        <div className="resumesectionresume d-flex rounded-4 overflow-hidden border border-dark flex-column flex-lg-row" style={{ 
          width: isMobile ? '95vw' : window.innerWidth < 1200 ? '90vw' : '1152px', 
          maxWidth: '1152px',
          height: isMobile ? 'auto' : '240vh',
          backgroundColor: '#0D0D0D'
        }}>
          {/* LEFT COLUMN */}
          <div className="firstcolumn p-3 py-4 px-4 shadow-lg border-dark border-lg-0 border-bottom-dark" style={{ 
            width: isMobile ? '100%' : '35%', 
            backgroundColor: '#191919',
            borderRight: isMobile ? 'none' : '1px solid #333'
          }}>
            {/* Contact Info */}
            <div className="contactinfo mt-2" data-aos="fade-up">
              <div className="firstone fs-5 text-white fw-bold">
                <Mail className="me-2" style={{ color: '#ffffff99' }} width={16} height={16} />
                Contact
              </div>
              <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="mailto:sadiqsiraj44@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="me-2" width={14} height={14} />
                  <span className="contactinfospan fs-6 fw-lighter" style={{ color: '#ffffff99', fontSize: isMobile ? '12px' : '14px' }}>sadiqsiraj44@gmail.com</span>
                </a>
              </div>
              <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://wa.me/923152453522" target="_blank" rel="noopener noreferrer">
                  <Phone className="me-2" width={14} height={14} />
                  <span className="contactinfospan fs-6 fw-lighter" style={{ color: '#ffffff99', fontSize: isMobile ? '12px' : '14px' }}>+92 315 2453522</span>
                </a>
              </div>
              <div className="fourthone mt-2 secondoneallofit">
                <a className="text-secondary">
                  <MapPin className="me-2 text-secondary" width={14} height={14} />
                  <span className="contactinfospan fs-6 fw-lighter" style={{ color: '#ffffff99', fontSize: isMobile ? '12px' : '14px' }}>Pakistan</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="linkinfo mt-4" data-aos="fade-up">
              <div className="firstone fs-5 text-white fw-bold">
                <Globe className="me-2" style={{ color: '#ffffff99' }} width={16} height={16} />
                Links
              </div>
              <div className="secondone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://github.com/privsaaaa44" target="_blank" rel="noopener noreferrer">
                  <Github className="me-2" width={14} height={14} />
                  <span className="contactinfospan fs-6 fw-lighter" style={{ color: '#ffffff99', fontSize: isMobile ? '12px' : '14px' }}>github.com/privsaaaa44</span>
                </a>
              </div>
              <div className="thirdone mt-2 secondoneallofit">
                <a className="text-secondary" href="https://www.linkedin.com/in/muhammad-sadiq-1abbba36b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="me-2" width={14} height={14} />
                  <span className="contactinfospan fs-6 fw-light" style={{ color: '#ffffff99', fontSize: isMobile ? '12px' : '14px' }}>linkedin.com/in/muhammad-sadiq</span>
                </a>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="technicalinfo mt-4" ref={skillsSectionRef}>
              <div className="firstone fs-5 text-white fw-bold">
                <Code className="me-2" style={{ color: '#ffffff99' }} width={16} height={16} />
                Technical Skills
              </div>
              <div className="skillssection">
                {[
                  { name: 'Laravel', percent: 85, delay: '0s' },
                  { name: 'PHP', percent: 90, delay: '0.1s' },
                  { name: 'JavaScript/Jquery', percent: 65, delay: '0.2s' },
                  { name: 'React', percent: 75, delay: '0.3s' },
                  { name: 'Wordpress', percent: 80, delay: '0.4s' },
                  { name: 'SEO', percent: 80, delay: '0.5s' },
                  { name: 'Figma/Canva', percent: 90, delay: '0.6s' },
                  { name: 'MySQL / SQL', percent: 85, delay: '0.7s' },
                  { name: 'Shopify', percent: 60, delay: '0.8s' },
                  { name: 'Bootstrap/Tailwind CSS', percent: 95, delay: '0.9s' },
                  { name: 'XML/JSON', percent: 99, delay: '1s' },
                  { name: 'MS office', percent: 95, delay: '1.1s' },
                  { name: 'Git/GitHub', percent: 90, delay: '1.2s' },
                ].map((skill, idx) => (
                  <div className="skill-container" key={idx}>
                    <div className="skillheader mt-2" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99' }}>
                      <span className="skillname fw-lighter">{skill.name}</span>
                      <span className="skillpercentage" style={{ float: 'right', color: '#ffffff99' }}>
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="skillprogressbar mt-2 w-100 bg-dark rounded-2 overflow-hidden" style={{ height: '8px', position: 'relative' }}>
                      <div
                        className="progressfill h-100 rounded-2"
                        style={{
                          background: 'linear-gradient(90deg, #ffffff 0%, #B7B7B7 50%, #808080 100%)',
                          width: skillsVisible ? `${skill.percent}%` : '0%',
                          height: '100%',
                          transition: `width 1s ease-out ${skill.delay}`,
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: skillsVisible ? 'shimmer 2s infinite' : 'none',
                            animationDelay: skill.delay
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="linkinfo mt-4">
              <div className="firstone fs-5 text-white fw-bold">
                Soft Skills
              </div>
              <div className="softskills">
                <div className="firstsoftskill mt-2 d-flex flex-wrap gap-2">
                  <span className="fw-lighter rounded-5 border border-secondary py-1 px-3" style={{ fontSize: isMobile ? '11px' : '12px', backgroundColor: '#323232', color: '#ffffff99' }}>
                    Problem Solving
                  </span>
                  <span className="fw-lighter rounded-5 border border-secondary py-1 px-3" style={{ fontSize: isMobile ? '11px' : '12px', backgroundColor: '#323232', color: '#ffffff99' }}>
                    Team Collaboration
                  </span>
                </div>
                <div className="secondsoftskill mt-2 d-flex flex-wrap gap-2">
                  <span className="fw-lighter rounded-5 border border-secondary py-1 px-3" style={{ fontSize: isMobile ? '11px' : '12px', backgroundColor: '#323232', color: '#ffffff99' }}>
                    Communication
                  </span>
                  <span className="fw-lighter rounded-5 border border-secondary py-1 px-3" style={{ fontSize: isMobile ? '11px' : '12px', backgroundColor: '#323232', color: '#ffffff99' }}>
                    Adaptability
                  </span>
                </div>
                <div className="thirdsoftskill mt-2 d-flex flex-wrap gap-2">
                  <span className="fw-lighter rounded-5 border border-secondary py-1 px-3" style={{ fontSize: isMobile ? '11px' : '12px', backgroundColor: '#323232', color: '#ffffff99' }}>
                    Time Management
                  </span>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = MuhammadSadiqResume;
                link.download = "Muhmmad Sadiq - Resume";
                link.click();
              }}
              className="resumesectionbuttonresumedownload fw-bold btn-light rounded-pill mt-4 w-100 bg-white border-0"
              style={{
                fontSize: isMobile ? '12px' : '13px',
                padding: isMobile ? '9px 16px' : '11px 20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              <Download className="me-2" width={16} height={16} strokeWidth={2} />
              <span className="text-dark">Download Resume</span>
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="secondcolumn shadow-lg border-start border-dark p-3 py-4 px-4 ps-4 pt-4" style={{ 
            width: isMobile ? '100%' : '65%', 
            backgroundColor: '#0D0D0D',
            paddingLeft: isMobile ? '16px' : '16px',
            paddingRight: isMobile ? '12px' : '16px'
          }}>
            {/* Introduction */}
            <div data-aos="fade-up" className="intro">
              <h1 className="introdivh1 fs-4 text-white fw-bold">Introduction</h1>
              <hr className="mt-2" style={{ color: '#ffffff99' }} />
              <h5 style={{ color: '#ffffff99', width: '100%', fontSize: isMobile ? '14px' : '16px' }} className="introp pe-1 fs-6 text-left lh-base ms-0 me-0 w-100">
                I build production-grade, maintainable, and performant web UIs with reusable components, state management, routing, forms, and serverside rendering. I optimize frontend performance through lazy loading, code splitting, memoization, and caching, and implement secure authentication integrated with REST/GraphQL APIs. I enforce code quality with unit, integration, and E2E tests, static analysis, and clear documentation, and collaborate in CI/CD pipelines and containerized environments while monitoring frontend health with logs and metric.
              </h5>
            </div>

            {/* Work Experience */}
            <div className="experience101">
              <div className="experience d-flex align-items-center" style={{ marginTop: '35px' }}>
                <Calendar width={18} height={18} style={{ color: '#ffffff99' }} />
                <span className="espan text-white fw-bold fs-4 p-2" style={{ fontSize: isMobile ? '16px' : '20px' }}>Work Experience</span>
              </div>
              <hr className="mt-0" style={{ color: '#ffffff99' }} />

              {/* Job 1 */}
              <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <div className="d-flex align-items-center mt-4">
                  <Circle width={12} height={12} stroke="gray" fill="#3D3D3D" strokeWidth={3} />
                  <span className="text-white fs-5 fw-bold ms-4" style={{ fontSize: isMobile ? '15px' : '18px' }}>Data Entry Operator Intern</span>
                </div>
                <div className="company mt-1">
                  <div className="d-flex align-items-center flex-wrap" style={{ paddingLeft: isMobile ? '24px' : '36px' }}>
                    <h4 className="fw-bolder mb-0" style={{ fontSize: isMobile ? '13px' : '14px', color: '#ffffff99' }}>
                      Digitalaz Solution
                    </h4>
                    <ul className="mb-0 d-flex align-items-center gap-4 flex-wrap" style={{ listStyleType: 'square', paddingLeft: '8px', margin: 0, marginLeft: isMobile ? '2px' : '4px' }}>
                      <li className="ms-3" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99', paddingLeft: '2px' }}>
                        On-site
                      </li>
                      <li style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99', paddingLeft: '2px' }}>
                        Aug 2025 – Sep 2025
                      </li>
                    </ul>
                  </div>
                  <div className="companypara mt-2" style={{ marginLeft: isMobile ? '8px' : '13px' }}>
                    <ul className="companyul ps-0">
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Performed product listings and updates on the company's ecommerce platform.</span>
                      </li>
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Ensured product details, prices, and descriptions were accurate and up to date.</span>
                      </li>
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Assisted in organizing digital inventory and maintaining data consistency.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <div className="d-flex align-items-center" style={{ marginTop: '30px' }}>
                  <Circle width={12} height={12} stroke="gray" fill="#3D3D3D" strokeWidth={3} />
                  <span className="text-white fs-5 fw-bold ms-4" style={{ fontSize: isMobile ? '15px' : '18px' }}>Web Developer Intern</span>
                </div>
                <div className="company mt-1">
                  <div className="d-flex align-items-center flex-wrap" style={{ paddingLeft: isMobile ? '24px' : '36px' }}>
                    <h4 className="fw-bolder mb-0" style={{ fontSize: isMobile ? '13px' : '14px', color: '#ffffff99' }}>
                      IJK Media
                    </h4>
                    <ul className="mb-0 d-flex align-items-center gap-4 flex-wrap" style={{ listStyleType: 'square', paddingLeft: '8px', margin: 0, marginLeft: isMobile ? '2px' : '4px' }}>
                      <li className="ms-3" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99', paddingLeft: '2px' }}>
                        On-site
                      </li>
                      <li style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99', paddingLeft: '2px' }}>
                        Oct 2025 – Dec 2025
                      </li>
                    </ul>
                  </div>
                  <div className="companypara mt-2" style={{ marginLeft: isMobile ? '8px' : '13px' }}>
                    <ul className="companyul ps-0">
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Developed front-end features using HTML, CSS, JavaScript, Bootstrap, React, WordPress.</span>
                      </li>
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Focused on creating responsive layouts and improving user interface experience.</span>
                      </li>
                      <li className="companyli fs-6 mb-2" style={{ color: '#ffffff99', fontSize: isMobile ? '13px' : '15px' }}>
                        <span className="ms-2">Collaborated with the team to deliver visually appealing and functional web pages.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="experience102">
              <div className="experience mt-5 d-flex align-items-center">
                <span className="espan text-white fw-bold fs-4 mb-2" style={{ fontSize: isMobile ? '16px' : '20px' }}>Education</span>
              </div>
              <hr className="mt-0" style={{ color: '#ffffff99' }} />

              <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <div className="d-flex align-items-center mt-4">
                <Circle width={12} height={12} stroke="gray" fill="#3D3D3D" strokeWidth={3} />
                  <span className="text-white fs-5 fw-bold ms-4" style={{ fontSize: isMobile ? '13px' : '15px' }}>
                    Aptech Learning Shahr-e-Faisal Karachi
                  </span>
                </div> <div className="company mt-1">
                  <div className="d-flex align-items-center" style={{ paddingLeft: isMobile ? '24px' : '36px' }}>
                    <h4 className="fw-bolder mb-0" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99' }}>
                1-Year Full Stack Developer Diploma
                    </h4>
                  </div>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <div className="d-flex align-items-center mt-4">
                  <Circle width={12} height={12} stroke="gray" fill="#3D3D3D" strokeWidth={3} />
                  <span className="text-white fs-5 fw-bold ms-4" style={{ fontSize: isMobile ? '13px' : '15px' }}>Govt. Degree Boys College Johar
</span>
                </div>
                <div className="company mt-1">
                  <div className="d-flex align-items-center" style={{ paddingLeft: isMobile ? '24px' : '36px' }}>
                    <h4 className="fw-bolder mb-0" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99' }}>
                     Intermediate in Computer Science (Studies in H.S.C part 2) 

                    </h4>
                  </div>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <div className="d-flex align-items-center mt-4">
                  <Circle width={12} height={12} stroke="gray" fill="#3D3D3D" strokeWidth={3} />
                  <span className="text-white fs-5 fw-bold ms-4" style={{ fontSize: isMobile ? '13px' : '15px' }}>Happy Palace Grammer School
</span>
                </div>
                <div className="company mt-1">
                  <div className="d-flex align-items-center" style={{ paddingLeft: isMobile ? '24px' : '36px' }}>
                    <h4 className="fw-bolder mb-0" style={{ fontSize: isMobile ? '12px' : '14px', color: '#ffffff99' }}>
                     Matriculation in Computer Science in 2025

                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="cerifications mt-4">
              <div className="experience mt-5 d-flex align-items-center">
                <Award width={18} height={18} style={{ color: '#ffffff99' }} />
                <span className="espan text-white fw-bold fs-4 p-2" style={{ fontSize: isMobile ? '16px' : '20px' }}>Certifications</span>
              </div>
              <hr className="mt-0" style={{ color: '#ffffff99' }} />
              <div className={`d-flex ${isMobile ? 'flex-column' : 'flex-row'} gap-3 w-100`}>
                <div className="certification-item flex-fill">
                  <a href="src/assets/Aptech_1_semester_certifications.pdf" target="_blank" className="text-decoration-none">
                    <div className="alert shadow-lg border border-dark mb-0 d-flex align-items-center gap-3 h-100" style={{ backgroundColor: '#191919', color: '#ffffff99', transition: 'all 0.3s ease' }} role="alert">
                      <Award width={18} height={18} style={{ color: '#ffffff99' }} />
                      <span className="fw-medium" style={{ fontSize: isMobile ? '13px' : '15px' }}>ACCP IN AI-TERM 1</span>
                    </div>
                  </a>
                </div>
                <div className="certification-item flex-fill">
                  <a href="src/assets/Aptech_1_semester_certifications.pdf" target="_blank" className="text-decoration-none">
                    <div className="alert shadow-lg border border-dark mb-0 d-flex align-items-center gap-3 h-100" style={{ backgroundColor: '#191919', color: '#ffffff99', transition: 'all 0.3s ease' }} role="alert">
                      <Award width={18} height={18} style={{ color: '#ffffff99' }} />
                      <span className="fw-medium" style={{ fontSize: isMobile ? '13px' : '15px' }}>ACCP IN AI-TERM 2</span>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
           

            {/* Achievements */}
             <div className="cerifications mt-2">
              <div className="experience mt-4 d-flex align-items-center">
                <Trophy width={18} height={18} style={{ color: '#ffffff99' }} />
                <span className="espan text-white fw-bold fs-4 p-2" style={{ fontSize: isMobile ? '16px' : '20px' }}>Achievements</span>
              </div>
              <hr className="mt-0" style={{ color: '#ffffff99' }} />
              <div className={`d-flex ${isMobile ? 'flex-column' : 'flex-row'} gap-3 w-100`}>
                <div className="certification-item flex-fill">
                  <a href="src/assets/Aptech_1_semester_certifications.pdf" target="_blank" className="text-decoration-none">
                    <div className="alert shadow-lg border border-dark mb-0 d-flex align-items-center gap-3 h-100" style={{ backgroundColor: '#191919', color: '#ffffff99', transition: 'all 0.3s ease' }} role="alert">
                      <Trophy width={18} height={18} style={{ color: '#ffffff99' }} />
                      <span className="fw-medium" style={{ fontSize: isMobile ? '13px' : '15px' }}>AI Champ First Runner Up</span>
                    </div>
                  </a>
                </div>
                <div className="certification-item flex-fill">
                  <a href="src/assets/Aptech_1_semester_certifications.pdf" target="_blank" className="text-decoration-none">
                    <div className="alert shadow-lg border border-dark mb-0 d-flex align-items-center gap-3 h-100" style={{ backgroundColor: '#191919', color: '#ffffff99', transition: 'all 0.3s ease' }} role="alert">
                      <Trophy width={18} height={18} style={{ color: '#ffffff99' }} />
                      <span className="fw-medium" style={{ fontSize: isMobile ? '13px' : '15px' }}>AIDC First Position</span>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div data-aos="fade-up" className="resumesectionlastdiv">
        <p className="fs-6 resumesectionlastptag" style={{ color: '#ffffff99', fontSize: isMobile ? '14px' : '16px' }}>
          Interested in working together?
        </p>
        <a href="#contactpage">
          <div className="d-flex justify-content-center mt-4">
            <button className="resumesectionlettalktobutton bg-white rounded-pill text-center p-3 fs-6" style={{ fontSize: isMobile ? '14px' : '16px' }}>
              Let's Talk
              <span>
                <MoveRight style={{ width: '16px', height: '16px' }} width={16} height={16} className="fs-6 fw-lighter" />
              </span>
            </button>
          </div>
        </a>
      </div>

      <br />
      <br />

      {/* Rotating Circle */}
      <div className="d-flex align-items-center justify-content-center bg-black" style={{ padding: isMobile ? '30px 0' : '40px 0' }}>
        <section className="revolvingcircle">
          <div
            className="position-relative"
            style={{ 
              width:  '250px', 
              height: '250px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              viewBox="0 0 300 300"
              preserveAspectRatio="xMidYMid meet"
              className={`w-100 h-100 ${isHovered ? 'animate-spin-fast' : 'animate-spin-slow'}`}
              style={{
                animationDuration: isHovered ? '4s' : '8s'
              }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -95, 0 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0"
                />
              </defs>

              <circle
                cx={150}
                cy={150}
                r={95}
                fill="none"
                strokeWidth={2.5}
                stroke="#ffffff99"
              />

              <text
                fill="white"
                fontSize={"28"}
                fontStyle="italic"
                className="textone"
                letterSpacing={"-3"}
                fontWeight="500"
              >
                <textPath href="#circlePath" startOffset="0%">
                  ✱ FULL STACK DEVELOPER ✱
                </textPath>
              </text>
            </svg>
          </div>
        </section>
      </div>

      {/* Add keyframe animation for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ResumePageSection;