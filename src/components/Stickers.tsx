import { motion } from "framer-motion";

interface StickerProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Hand-drawn dashed loopy arrow matching the user's uploaded reference.
 * Features an animated flowing dash effect and subtle floating sway.
 */
export function LoopyArrow({
  className = "",
  color = "#FF5A1F",
  size = 120,
  flip = false,
  rotate = 0,
}: StickerProps & { flip?: boolean; rotate?: number }) {
  return (
    <motion.div
      className={`inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [0, -5, 0],
        rotate: [rotate, rotate + 2, rotate - 1, rotate],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-[0_2px_8px_rgba(255,90,31,0.3)]"
      >
        <style>
          {`
            @keyframes dashFlow {
              to {
                stroke-dashoffset: -24;
              }
            }
            .loopy-dash-path {
              animation: dashFlow 1.8s linear infinite;
            }
          `}
        </style>
        {/* Loopy curved dashed stroke */}
        <path
          className="loopy-dash-path"
          d="M 28 22 C 20 66 38 108 72 118 C 89 123 105 110 98 88 C 91 66 68 76 74 102 C 80 128 116 132 142 136"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="7 7"
        />
        {/* Solid arrowhead */}
        <path
          d="M 132 124 L 148 138 L 128 145 Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Swooping curved dashed arrow pointing down or sideways with flowing dash animation.
 */
export function SwoopArrow({
  className = "",
  color = "#FF5A1F",
  width = 90,
  height = 70,
  flip = false,
}: StickerProps & { width?: number; height?: number; flip?: boolean }) {
  return (
    <motion.div
      className={`inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [0, -4, 0],
        x: [0, 3, 0],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-[0_2px_6px_rgba(255,90,31,0.25)]"
      >
        <path
          d="M 12 14 C 42 12 82 24 84 64"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
          className="loopy-dash-path"
        />
        <path
          d="M 74 54 L 85 68 L 94 54 Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}

/**
 * 4-Point organic sparkle star that twinkles and pulses.
 */
export function SparkleStar({
  className = "",
  color = "#FF5A1F",
  size = 28,
  delay = 0,
}: StickerProps & { delay?: number }) {
  return (
    <motion.div
      className={`inline-block select-none pointer-events-none ${className}`}
      initial={{ scale: 0.8, rotate: 0 }}
      animate={{
        scale: [0.85, 1.25, 0.85],
        rotate: [0, 45, 0],
        opacity: [0.75, 1, 0.75],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_0_8px_rgba(255,90,31,0.6)]"
      >
        <path d="M 20 2 C 20 12 12 20 2 20 C 12 20 20 28 20 38 C 20 28 28 20 38 20 C 28 20 20 12 20 2 Z" />
      </svg>
    </motion.div>
  );
}

/**
 * Hand-drawn 6-pointed burst / asterisk sticker that wiggles.
 */
export function BurstDoodle({
  className = "",
  color = "#FF5A1F",
  size = 24,
  delay = 0,
}: StickerProps & { delay?: number }) {
  return (
    <motion.div
      className={`inline-block select-none pointer-events-none ${className}`}
      animate={{
        rotate: [0, 15, -15, 0],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        className="filter drop-shadow-[0_0_6px_rgba(255,90,31,0.4)]"
      >
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="7.5" y1="7.5" x2="24.5" y2="24.5" />
        <line x1="24.5" y1="7.5" x2="7.5" y2="24.5" />
      </svg>
    </motion.div>
  );
}

/**
 * Playful rotating circular badge with circular text ("✦ CREATIVE DEVELOPER ✦ BUILD & SHIP ✦").
 */
export function RotatingBadgeSticker({
  className = "",
  text = "✦ CREATIVE DEVELOPER ✦ FULL STACK ✦",
  size = 110,
}: {
  className?: string;
  text?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text
          fontSize="9"
          fontWeight="bold"
          fill="#FF5A1F"
          letterSpacing="2.2"
          className="uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        >
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      {/* Center glowing dot/star */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-[#FF5A1F] shadow-[0_0_12px_#FF5A1F] animate-pulse" />
      </div>
    </motion.div>
  );
}

/**
 * Hand-drawn wavy underline highlight.
 */
export function DoodleUnderline({
  className = "",
  color = "#FF5A1F",
  width = 160,
  height = 14,
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`inline-block pointer-events-none select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 2 10 C 35 3 65 12 95 6 C 120 1 145 9 158 5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

/**
 * Playful hand-drawn sticker badge (e.g. "Explore ↓", "100% Passion", "Check it out!")
 */
export function HandDrawnPillBadge({
  text,
  className = "",
  color = "#FF5A1F",
}: {
  text: string;
  className?: string;
  color?: string;
}) {
  return (
    <motion.div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border shadow-md select-none pointer-events-none ${className}`}
      style={{
        color: color,
        borderColor: `${color}55`,
        backgroundColor: `${color}18`,
        backdropFilter: "blur(4px)",
      }}
      animate={{
        rotate: [-2, 2, -2],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span>✦</span>
      <span>{text}</span>
    </motion.div>
  );
}
