import React from 'react'

const Home1 = () => {
  return (
   <section className="firstsection mt-0" id="homepage">
    <div className="firstdiv mt-0 p-0">
      <h1 className="text-center h1class mt-0 fw-bold" style={{fontSize: '72px', color: '#CFD0D0'}} >Hi, I'm</h1>
      <h1 className="text-center h2Lclass fw-bold mt-2"  style={{fontSize: '72px', color: '#767777'}} >Muhammad Sadiq</h1>
      <h1 className="text-center h3class text-white fw-lighter" style={{fontSize: '30px', marginTop: '32px'}} >Frontend Developer</h1>
     <center>
<hr className="mt-4"
  style={{
    border: "none",
    height: "3px",
    width: '40%'  ,
    background: "linear-gradient(to right, transparent, #ffffff99, transparent)",
  }}
/>     </center>

<div className="col3one">
<div className="col3 d-flex justify-content-center align-items-center" style={{gap: '170px'}} >
  <div className="col1 text-center"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >20+</h1><h1 className="text-uppercase fw-medium mt-2" style={{ fontSize: '14px',color: '#87909A'}}>projects completed</h1></div>
  <div className="col2 text-center"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >12+</h1><h1 className="text-uppercase fw-medium mt-2"  style={{ fontSize: '14px',color: '#87909A'}}>Technologies</h1></div>
  <div className="col3 text-center"><h1 className="text-white fw-bold" style={{fontSize: '36px'}} >100+</h1><h1 className="text-uppercase fw-medium mt-2" style={{fontSize: '14px',color: '#87909A'}}>client satisfaction</h1></div>
</div>
</div>
<div className="d-flex justify-content-center" style={{marginTop: '60px', gap: '30px'}}> 
<div className="p-4 shadow-lg border border-dark card1" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', borderRadius: '15px', }}>
  <div className="mb-4">
    <svg width="50" height="50" fill="#6c757d" viewBox="0 0 24 24" className="">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </svg>
    
    <div style={{ minHeight: '180px' }}>
      <div 
        key={currentIndex} 
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <p className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.6' }}>
          "{quotes[currentIndex].text}"
        </p>
        
        <div style={{lineHeight: '0', marginTop: '40px'}}>
          <p className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
            {quotes[currentIndex].author}
          </p>
          <p className="text-secondary" style={{ fontSize: '14px' }}>
            {quotes[currentIndex].role}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-3 bg-secondary rounded-pill overflow-hidden" style={{ height: '4px' }}>
    <div 
      className="h-100"
      style={{ 
        width: `${progress}%`,
        background: 'white',
        transition: 'width 0.1s linear'
      }}
    />
  </div>   
  
  <div className="d-flex justify-content-between align-items-center mt-2">
    <span className="text-secondary" style={{ fontSize: '14px' }}>
      {currentIndex + 1} / {quotes.length}
    </span>
    <span className="text-secondary" style={{ fontSize: '14px' }}>
      Next in {Math.ceil((100 - progress) / (100 / 7))}s
    </span>
  </div>
</div>
  <div className="p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', borderRadius: '15px' }}>
    <div className="mt-3" style={{minHeight: '180px'}}>
<div className="aboutmeheading text-center rounded-pill mx-auto" style={{background: '#292A2A', width: 'fit-content'}}>
  <h3 className="aboutmeheadingh3 text-capitalize py-2 px-3 m-0" style={{fontSize: '14px', color: '#BFBEC0'}}>About Me</h3>
</div>
<h4 className="abouth4heading text-white text-center fw-bold fs-4" style={{marginTop: '30px'}}>Passionate Developer & Problem Solver</h4>
<p 
  className="aboutpheading ms-1 me-1 w-100 lh-base text-center" 
  style={{
    fontSize: '14px', 
    color: '#ffffff99',
    fontWeight: '300',
    letterSpacing: '0.3px'
  }}
>
  I'm a full-stack developer who loves turning complex problems into elegant solutions. With a keen eye for detail and a passion for clean code, I create seamless digital experiences that make a difference.
</p>
<svg width="60" height="60" viewBox="0 0 24 24" className="dotsimageicon mt-2"  style={{
    animation: 'pulse 2s ease-in-out infinite',
    transform: 'translateY(17px)'  // Neeche shift ho jayega
  }}>
  <circle cx="6" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0s'}}/>
  <circle cx="12" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0.2s'}}/>
  <circle cx="18" cy="12" r="2" fill="#6c757d" style={{animation: 'blink 1.4s infinite both', animationDelay: '0.4s'}}/>
  
  <style>{`
    @keyframes blink {
      0%, 80%, 100% { opacity: 0.3; }
      40% { opacity: 1; }
    }
  `}</style>
</svg>
    </div>
   
  
    
   
  </div>
<div className="p-4 shadow-lg border border-dark card2" style={{ width: '400px', backgroundColor: '#0E1011', height: '350px', position: 'relative', overflow: 'visible', borderRadius: '15px' }}>
  {/* Glow effect behind 1+ */}
  <div style={{
    position: 'absolute',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(100, 100, 100, 0.4) 0%, rgba(80, 80, 80, 0.2) 30%, transparent 60%)',
    filter: 'blur(50px)',
    borderRadius: '50%',
    zIndex: 0
  }}></div>
     <div className="position-absolute" style={{
          top:   '50px',
          right: '50px',
          width:  '80px',
          height: '80px',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderLeft: 'none',
          borderBottom: 'none',
          borderTopRightRadius: '25px'
        }}></div>


     <div className="position-absolute" style={{
          bottom:  '40px',
          left:    '40px',
          width:  '80px',
          height: '80px',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRight: 'none',
          borderTop: 'none',
          borderBottomLeftRadius: '25px'
        }}></div>

  <div className="mt-4" style={{ position: 'relative', zIndex: 2 }}>
    <div className="carddiv3">
      <h1 className="cardheading3 text-center" style={{fontSize: '96px'}}>1+</h1>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-white mb-3" style={{fontSize: '24px', fontWeight: '600'}}>
        Years of Experience
      </h2>
      <p className="" style={{fontSize: '14px', lineHeight: '1.6', color: '#ffffff99'}}>
        Building scalable applications and crafting exceptional user experiences
      </p>
    </div>
  </div>
</div>
</div>
    </div>


    
<div className="skill section">
  <br />
  <hr className="bg-dark mt-2" style={{opacity: '0.4 '}} />
  <br /> 
  
  <style>
    {`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }
    `}
  </style>
  
  {/* Skills Section (Infinite Loop Carousel) */}
  <h2 className="ml-3 mb-4 fw-normal text-center mt-3 text-uppercase" style={{fontSize:'14px', letterSpacing: '1.5px', color: '#6B7280'}}>
    Technologies I work with
  </h2>

  <div style={{
    overflow: 'hidden',
    width: '100%',
    color: '#0a0a0a'
  }}>
    <div style={{
      display: 'flex',
      gap: '19px',
      animation: 'scroll 20s linear infinite',
      width: 'fit-content'
    }}>
{[...skills, ...skills,...skills,...skills].map((skill, idx) => (
        <div key={idx} style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          width: '72px',
          height: '72px'
        }}>
          <a 
            href={skill.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px'
            }}
          >
            <img
              className="t"
              src={skill.icon}
              alt={`skill-${idx}`}
              style={{ 
                width: "100%", 
                height: "100%", 
                maxWidth: "48px",
                maxHeight: "48px",
                objectFit: "contain",
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
  
  <br />
  <hr className="bg-dark" style={{opacity: '0.4 '}} />
</div>
<br />
<div className="shortintroabout mt-3" >
  <div className="icons d-flex justify-content-center gap-3">
    <Code     color="#4A5565"  width={30} height={30}/>
    <Layers   color="#4A5565"  width={30} height={30}/>
    <Database color="#4A5565"  width={30} height={30}/>
    <Server   color="#4A5565"  width={30} height={30}/>
  </div>
  
  <div 
    className="py-4"
    style={{ minHeight: '60vh' }}
  >
    <div className="shortintroaboutcontainer" style={{marginBottom: '150px'}}>
<div className="text-justify lh-1 fw-light mx-4" style={{ fontSize: '60px', color: '#fff', margin: '0px', padding: '0px' }}>
  {scrollWords.map((word, index) => (
    <React.Fragment key={index}>
      {word.trim() ? (
        <>
          <span
            style={{
              display: 'inline',
              opacity: visibleWords.has(index) ? 1 : 0,
              transition: 'opacity 0.2s ease'
            }}
          >
            {word}
          </span>
          {index < scrollWords.length - 1 && ' '}
          {isTyping && index === visibleWords.size - 1 && (
            <span className="typing-cursor" />
          )}
        </>
      ) : null}
    </React.Fragment>
  ))}
</div>
    </div>
  </div>
</div>
  </section>
  )
}

export default Home1
