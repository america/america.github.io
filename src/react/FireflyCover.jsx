import React, { useMemo } from "react";
import { motion, MotionConfig } from "framer-motion";

const FIREFLY_POSITIONS = [
  [80, 60], [140, 120], [1080, 90], [1000, 180], [60, 420], [1130, 380],
  [200, 540], [950, 520], [300, 80], [880, 60], [150, 300], [1050, 260],
  [40, 200], [1140, 150], [500, 50], [700, 560],
  [230, 220], [960, 240], [110, 480], [1090, 470], [420, 510], [770, 500],
  [640, 90], [350, 470], [850, 410], [180, 380],
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function Firefly({ x, y, seed }) {
  const rand = useMemo(() => seededRandom(seed), [seed]);
  const size = 2 + rand() * 3.5;
  const bright = 0.4 + rand() * 0.5;
  const haloSize = 6 + rand() * 10;
  const dx1 = (rand() - 0.5) * 60;
  const dy1 = (rand() - 0.5) * 40;
  const dx2 = (rand() - 0.5) * 60;
  const dy2 = (rand() - 0.5) * 40;
  const duration = 6 + rand() * 6;
  const delay = -rand() * 12;
  const flickerDuration = 2 + rand() * 3;
  const flickerDelay = -rand() * 5;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${(x / 1200) * 100}%`,
        top: `${(y / 630) * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `rgba(255, 236, 170, ${bright})`,
        boxShadow: `0 0 ${haloSize}px ${haloSize * 0.6}px rgba(255, 214, 120, ${bright * 0.55})`,
      }}
      animate={{
        x: [0, dx1, dx2, 0],
        y: [0, dy1, dy2, 0],
        opacity: [bright, 0.25 + rand() * 0.3, bright],
      }}
      transition={{
        x: { duration, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        opacity: {
          duration: flickerDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: flickerDelay,
        },
      }}
    />
  );
}

/**
 * 「人生の最後に残るもの」記事用の動くカバー。
 * cover.png（OGP用の静止画）と同じ構図を、Framer Motionで動かした版。
 */
export function FireflyCover() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1200 / 630",
          overflow: "hidden",
          borderRadius: "12px",
          margin: "1.5rem 0 2rem",
          background:
            "radial-gradient(ellipse 75% 79% at 50% 60%, rgba(255, 200, 140, 0.10) 0%, rgba(255, 200, 140, 0) 60%)," +
            "linear-gradient(160deg, #1b1830 0%, #14152a 45%, #0d0e1c 100%)",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: "59%",
            width: "43%",
            aspectRatio: "1 / 1",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,214,150,0.55) 0%, rgba(255,190,110,0.18) 40%, rgba(255,190,110,0) 72%)",
            filter: "blur(2px)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {FIREFLY_POSITIONS.map(([x, y], i) => (
          <Firefly key={i} x={x} y={y} seed={i + 1} />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 5%",
          }}
        >
          <div
            style={{
              fontFamily: '"Noto Serif CJK JP", serif',
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(22px, 4.3vw, 52px)",
              color: "#fbf3e7",
              letterSpacing: "3px",
              textShadow: "0 0 26px rgba(255, 210, 150, 0.35)",
              marginBottom: "0.6em",
            }}
          >
            人生の最後に残るもの
          </div>
          <div
            style={{
              fontFamily: '"Noto Sans CJK JP", sans-serif',
              fontSize: "clamp(11px, 1.6vw, 19px)",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "1px",
            }}
          >
            誰かの心に、そっと残り続ける記憶と優しさ
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "7%",
            left: 0,
            width: "100%",
            textAlign: "center",
            fontFamily: '"Noto Sans CJK JP", sans-serif',
            fontSize: "clamp(9px, 1.2vw, 15px)",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "4px",
          }}
        >
          記憶 ・ 優しさ ・ 大切にできたか
        </div>
      </div>
    </MotionConfig>
  );
}
