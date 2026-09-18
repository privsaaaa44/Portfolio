import { useEffect, useRef, useState } from "react";
import backgroundVideo from "../assets/backgroundvideo.mp4";

const INTRO_TRANSITION_MS = 1100;
const VIDEO_FALLBACK_MS = 4500;

const styles = `
.video-intro {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 99999;
  overflow: hidden;
  background: #000000;
  display: grid;
  place-items: center;
  transform: translateY(0);
  transition: transform ${INTRO_TRANSITION_MS}ms cubic-bezier(0.83, 0, 0.17, 1);
  will-change: transform;
}

.video-intro--open {
  transform: translateY(-100%);
  pointer-events: none;
}

.video-intro__frame {
  position: relative;
  width: auto;
  max-width: 100vw;
  height: 100dvh;
  max-height: 100dvh;
  aspect-ratio: 320 / 568;
  transform: translateY(4vh) scale(1.14);
  transform-origin: center center;
}

.video-intro__video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center center;
  backface-visibility: hidden;
  filter: brightness(1.22) contrast(1.12) saturate(1.08);
}

.video-intro__shade {
  display: none;
}

.video-intro__watermark-cover {
  position: absolute;
  right: 0;
  bottom: 4.5%;
  z-index: 1;
  width: 36%;
  height: 14%;
  background: #000000;
  pointer-events: none;
}

.video-intro__play {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.42);
  color: #ffffff;
  cursor: pointer;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(8px);
}

.video-intro__play::before {
  content: "";
  width: 0;
  height: 0;
  margin-left: 5px;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 22px solid currentColor;
}

@media (max-width: 768px) {
  .video-intro__frame {
    width: auto;
    max-width: 100vw;
    height: 100dvh;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .video-intro {
    transition-duration: 250ms;
  }
}
`;

export default function VideoIntro() {
  const videoRef = useRef(null);
  const startedRef = useRef(false);
  const needsTapRef = useRef(false);
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const openCurtain = () => {
    setOpening(true);
  };

  const startVideo = (fromUserTap = false) => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise) {
      playPromise
        .then(() => {
          startedRef.current = true;
          needsTapRef.current = false;
          setNeedsTap(false);
        })
        .catch(() => {
          if (fromUserTap) {
            openCurtain();
            return;
          }
          needsTapRef.current = true;
          setNeedsTap(true);
        });
    }
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fallback = window.setTimeout(() => {
      if (!startedRef.current && !needsTapRef.current) openCurtain();
    }, VIDEO_FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    startVideo();
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
        <div className="video-intro__frame">
          <video
            ref={videoRef}
            className="video-intro__video"
            src={backgroundVideo}
            autoPlay
            muted
            defaultMuted
            playsInline
            preload="auto"
            onCanPlay={() => startVideo()}
            onPlaying={() => {
              startedRef.current = true;
              needsTapRef.current = false;
              setNeedsTap(false);
            }}
            onEnded={openCurtain}
            onError={openCurtain}
          />
          <div className="video-intro__watermark-cover" />
        </div>
        <div className="video-intro__shade" />
        {needsTap && (
          <button
            className="video-intro__play"
            type="button"
            aria-label="Play intro video"
            onClick={() => startVideo(true)}
          />
        )}
      </div>
    </>
  );
}
