import { useEffect, useState } from "react";
import backgroundVideo from "../assets/backgroundvideo.mp4";

const INTRO_TRANSITION_MS = 1100;
const VIDEO_FALLBACK_MS = 9000;

const styles = `
.video-intro {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 99999;
  overflow: hidden;
  background: #000000;
  transform: translateY(0);
  transition: transform ${INTRO_TRANSITION_MS}ms cubic-bezier(0.83, 0, 0.17, 1);
  will-change: transform;
}

.video-intro--open {
  transform: translateY(-100%);
  pointer-events: none;
}

.video-intro__video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  transform: translate3d(0, clamp(180px, 34vh, 330px), 0);
  backface-visibility: hidden;
  filter: brightness(1.22) contrast(1.12) saturate(1.08);
}

.video-intro__shade {
  display: none;
}

@media (max-width: 768px) {
  .video-intro__video {
    height: 100dvh;
    transform: translate3d(0, clamp(72px, 15vh, 150px), 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .video-intro {
    transition-duration: 250ms;
  }
}
`;

export default function VideoIntro() {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  const openCurtain = () => {
    setOpening(true);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fallback = window.setTimeout(openCurtain, VIDEO_FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!opening) return;

    const remove = window.setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, INTRO_TRANSITION_MS);

    return () => window.clearTimeout(remove);
  }, [opening]);

  if (gone) return null;

  return (
    <>
      <style>{styles}</style>
      <div
        className={`video-intro ${opening ? "video-intro--open" : ""}`}
        aria-hidden="true"
      >
        <video
          className="video-intro__video"
          src={backgroundVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={openCurtain}
          onError={openCurtain}
        />
        <div className="video-intro__shade" />
      </div>
    </>
  );
}
