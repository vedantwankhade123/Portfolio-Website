import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowDown,
  ExternalLink,
  Download,
  ChevronDown,
  ChevronUp,
  Check,
  Minimize2,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  SITE,
  ABOUT,
  SERVICES,
  STATS,
  WORK,
  PROJECTS,
  ACHIEVEMENTS,
  ACHIEVEMENT_BENTO,
  CERTIFICATIONS,
  EDUCATION,
  FOOTER,
  RESUME_PATH,
  BROWN_AI_PROVIDERS,
  techLogo,
  type AchievementBentoImage,
  type Project,
} from "@/data/portfolio";
import {
  SparkleStar,
  BurstDoodle,
} from "./Stickers";

const ORANGE = "#FF5A1F";
const DARK_ORANGE = "#C2410C";
const DARK_ORANGE_GRADIENT = "linear-gradient(150deg, #C2410C 0%, #9A3412 100%)";
const BG = "#0D0D0D";
const BG_ELEV = "#111111";
const MUTED = "#A0A0A0";

const SHELL = "w-full px-5 sm:px-8 lg:px-12 xl:px-16";
const SECTION_Y = "py-24 sm:py-28 md:py-[7.5rem]";
const easeOut = [0.22, 1, 0.36, 1] as const;

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "services", label: "Expertise" },
  { id: "certifications", label: "Certifications" },
  { id: "work", label: "Work" },
  { id: "achievements", label: "Achievements" },
] as const;

function NameSpotlight({ name }: { name: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  const typeClass =
    "font-name-banner w-full text-center font-black leading-none tracking-tight text-[7.5vw] sm:text-[8.5vw] md:text-[9.5vw] whitespace-nowrap";

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="hidden md:block relative w-full overflow-hidden select-none py-6 sm:py-8 md:py-10"
      onMouseMove={reduceMotion ? undefined : onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="pointer-events-none absolute h-[65%] w-[36%] max-w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          opacity: hover && !reduceMotion ? 0.38 : 0.1,
          background: "radial-gradient(circle, #C45A28 0%, rgba(139,58,24,0.2) 42%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full items-center justify-center px-1">
        <div className="relative isolate w-full">
          <p
            className={`${typeClass} relative z-10 text-transparent`}
            style={{
              WebkitTextStroke: "1.25px rgba(255, 255, 255, 0.28)",
              paintOrder: "stroke fill",
            }}
          >
            {name}
          </p>

          <p
            className={`${typeClass} pointer-events-none absolute inset-0 z-20 flex items-center justify-center text-transparent transition-opacity duration-200`}
            style={{
              WebkitTextStroke: "0px transparent",
              backgroundImage:
                hover || reduceMotion
                  ? `radial-gradient(circle clamp(6rem, 16vw, 13rem) at ${pos.x}% ${pos.y}%, #D4652E 0%, #A84820 34%, transparent 68%)`
                  : "radial-gradient(circle 4.5rem at 50% 50%, rgba(168,72,32,0.28) 0%, transparent 70%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              opacity: hover || reduceMotion ? 1 : 0.4,
            }}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HighlightCopy({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  const parts = text.split(/(\[\[.+?\]\])/g);
  return (
    <p className={className} style={style}>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[(.+?)\]\]$/);
        if (m) {
          return (
            <span key={i} className="font-semibold text-white" style={{ color: ORANGE }}>
              {m[1]}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

function TypeTitle({
  text,
  className,
  as: Tag = "h2",
  nowrap = false,
}: {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p";
  nowrap?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const [count, setCount] = useState(reduceMotion ? text.length : 0);
  const wrapClass = nowrap ? "whitespace-nowrap" : "whitespace-pre-wrap";

  useEffect(() => {
    if (reduceMotion) {
      setCount(text.length);
      return;
    }
    if (!inView) {
      setCount(0);
      return;
    }
    if (count >= text.length) return;
    const t = window.setTimeout(() => setCount((c) => c + 1), 18);
    return () => window.clearTimeout(t);
  }, [inView, count, text, reduceMotion]);

  return (
    <Tag
      ref={ref as never}
      className={`${className ?? ""} cursor-default select-none ${nowrap ? "whitespace-nowrap" : ""}`}
      aria-label={text}
    >
      <span className="relative inline-block max-w-full align-top">
        <span className={`invisible block ${wrapClass}`} aria-hidden>
          {text}
        </span>
        <span className={`absolute left-0 top-0 ${wrapClass}`} aria-hidden>
          {text.slice(0, count)}
        </span>
      </span>
    </Tag>
  );
}

function CountStat({
  value,
  className,
  style,
}: {
  value: string;
  className?: string;
  style?: CSSProperties;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const currentRef = useRef(0);
  const inView = useInView(ref, { once: false, amount: 0.45 });
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const decimals = match?.[1].includes(".") ? (match[1].split(".")[1]?.length ?? 0) : 0;
  const format = (n: number) => {
    const num = decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
    return `${num}${suffix}`;
  };
  const [display, setDisplay] = useState(() => (reduceMotion ? value : format(0)));

  useEffect(() => {
    if (reduceMotion) {
      currentRef.current = target;
      setDisplay(value);
      return;
    }

    const from = currentRef.current;
    const to = inView ? target : 0;
    const start = performance.now();
    const duration = 900;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const current = from + (to - from) * eased;
      currentRef.current = current;
      setDisplay(format(current));
      if (t < 1) raf = requestAnimationFrame(tick);
      else currentRef.current = to;
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, target, decimals, suffix, value]);

  return (
    <p ref={ref} className={className} style={style}>
      {display}
    </p>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y: x !== 0 ? 0 : y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.25, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function PillButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-[#FF5A1F] hover:bg-[#FF6B2C] text-white"
      : variant === "dark"
        ? "bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white"
        : "border border-white/15 hover:border-white/35 text-white bg-transparent";

  const cls = `inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-base font-semibold transition-colors ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function ProjectActions({ project, className }: { project: Project; className?: string }) {
  const siteUnavailable = project.liveUrl === "not_live" || project.liveUrl === "#" || !project.liveUrl;

  const openLive = () => {
    if (siteUnavailable) return;
    window.open(project.liveUrl, "_blank");
  };
  const openGithub = () => {
    if (project.githubUrl === "private") {
      alert("This is a private live project — source code access isn't available.");
      return;
    }
    if (project.githubUrl === "unavailable" || project.githubUrl === "#") return;
    window.open(project.githubUrl, "_blank");
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 mt-5 ${className || ""}`}>
      {siteUnavailable ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] text-white/45 text-base font-semibold px-5 py-2.5 cursor-not-allowed">
          Site Unavailable
        </span>
      ) : (
        <button
          type="button"
          onClick={openLive}
          className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] hover:bg-[#FF6B2C] text-white text-base font-semibold px-5 py-2.5 transition-colors cursor-pointer"
        >
          Visit Site <ExternalLink size={16} />
        </button>
      )}
      <button
        type="button"
        onClick={openGithub}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-[#FF5A1F]/50 text-white/80 text-base font-semibold px-5 py-2.5 transition-colors cursor-pointer"
      >
        GitHub <Github size={16} />
      </button>
    </div>
  );
}

/** Full-bleed looping arc marquee — 16:9 cards, R→L, no overlap */
function ArcGallery({
  projects,
  onSelect,
  paused,
}: {
  projects: Project[];
  onSelect: (p: Project) => void;
  paused?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageW, setStageW] = useState(1200);
  const [shift, setShift] = useState(0);
  const [hoverPause, setHoverPause] = useState(false);

  const cardW = stageW < 480 ? 220 : stageW < 768 ? 280 : stageW < 1100 ? 320 : 360;
  const cardH = cardW * (9 / 16);
  const gap = stageW < 768 ? 28 : 40;
  const step = cardW + gap;
  const setWidth = projects.length * step;
  const loopItems = [...projects, ...projects, ...projects];

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setStageW(el.getBoundingClientRect().width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || hoverPause || setWidth <= 0) return;
    let raf = 0;
    let last = performance.now();
    const speed = stageW < 768 ? 36 : 48; // px/sec, right → left

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setShift((s) => {
        const next = s + speed * dt;
        return next >= setWidth ? next - setWidth : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, paused, hoverPause, setWidth, stageW]);

  // Arc geometry: ∩ curve across the viewport
  const radius = Math.max(stageW * 0.95, 520);
  const cx = stageW / 2;
  const stageH = cardH + 8 + radius * (1 - Math.cos(Math.min(0.55, (stageW * 0.48) / radius))) + 8;

  return (
    <div
      ref={stageRef}
      className="relative w-full overflow-hidden"
      style={{ height: stageH }}
      onMouseEnter={() => setHoverPause(true)}
      onMouseLeave={() => setHoverPause(false)}
    >
      {loopItems.map((p, i) => {
        const baseX = i * step - shift;
        // Center the middle of the duplicated strip roughly in view
        const x = baseX - setWidth + stageW * 0.08;
        const midX = x + cardW / 2;
        const dx = midX - cx;
        const clamped = Math.max(-radius * 0.92, Math.min(radius * 0.92, dx));
        const y = 12 + radius - Math.sqrt(Math.max(0, radius * radius - clamped * clamped));
        const angle = (Math.asin(clamped / radius) * 180) / Math.PI;

        // Only render when near viewport for perf
        if (midX < -cardW * 1.5 || midX > stageW + cardW * 1.5) return null;

        const pIdx = projects.findIndex((item) => item.title === p.title);
        const handleGoToProject = () => {
          if (pIdx >= 0) {
            const el = document.getElementById(`project-${pIdx}`);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }
          }
          const workEl = document.getElementById("work");
          workEl?.scrollIntoView({ behavior: "smooth" });
        };

        return (
          <div
            key={`${p.title}-${i}`}
            className="absolute top-0 will-change-transform"
            style={{
              width: cardW,
              height: cardH,
              left: x,
              transform: `translateY(${y}px) rotate(${angle}deg)`,
              zIndex: 1,
            }}
          >
            <button
              type="button"
              onClick={handleGoToProject}
              className="group relative block w-full h-full overflow-hidden border border-white/10 bg-[#111] shadow-[0_18px_40px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] cursor-pointer"
              style={{ borderRadius: 8 }}
              aria-label={`Scroll to ${p.title}`}
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />

              {/* Hover overlay with static bottom arrow button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white"
                  style={{ background: ORANGE }}
                >
                  <ChevronDown size={22} strokeWidth={2.5} />
                </span>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export function Portfolio() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeFit, setResumeFit] = useState(false);
  const resumeScrollRef = useRef<HTMLDivElement>(null);
  const mobileResumeScrollRef = useRef<HTMLDivElement>(null);
  const [providersModalOpen, setProvidersModalOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return;
    setResumeFit(false);
    if (resumeScrollRef.current) {
      resumeScrollRef.current.scrollTop = 0;
    }
    if (mobileResumeScrollRef.current) {
      mobileResumeScrollRef.current.scrollTop = 0;
    }
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("scrollbar-hide");
    document.documentElement.classList.add("scrollbar-hide");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.classList.remove("scrollbar-hide");
      document.documentElement.classList.remove("scrollbar-hide");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [resumeOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);
  const [booting, setBooting] = useState(true);
  const [ready, setReady] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [bentoOpen, setBentoOpen] = useState<AchievementBentoImage | null>(null);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const heroInView = useInView(heroRef, { amount: 0.2, once: false });
  const playHero = !booting && ready && heroInView;

  useEffect(() => {
    if (!workDropdownOpen) return;
    const handleGlobalClick = () => setWorkDropdownOpen(false);
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [workDropdownOpen]);

  const scrollWorkProjects = (direction: "up" | "down") => {
    const projectEls = PROJECTS.map((_, i) => document.getElementById(`project-${i}`)).filter(Boolean) as HTMLElement[];
    const scrollPos = window.scrollY + 140;
    if (direction === "down") {
      const next = projectEls.find((el) => el.offsetTop > scrollPos + 40);
      if (next) {
        next.scrollIntoView({ behavior: "smooth" });
      } else {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const prev = [...projectEls].reverse().find((el) => el.offsetTop < scrollPos - 40);
      if (prev) {
        prev.scrollIntoView({ behavior: "smooth" });
      } else {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offset = window.scrollY + 140;
      let current = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= offset) current = item.id;
      }
      setActiveNav(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setBooting(false);
      setReady(true);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setBooting(false);
      setReady(true);
    }, 1100);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!booting) document.documentElement.style.overflow = "";
  }, [booting]);

  const onNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="relative w-full min-h-screen min-w-0 overflow-x-clip text-white" style={{ background: BG }}>
      <AnimatePresence>
        {booting && (
          <motion.div
            key="boot"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
            style={{ background: BG }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <motion.p
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {SITE.fullName}
            </motion.p>
            <motion.div className="mt-6 h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full rounded-full"
                style={{ background: ORANGE }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: easeOut, delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar — glassmorphism black when scrolled */}
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
            : "border-b border-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(0, 0, 0, 0.72)",
                backdropFilter: "blur(18px) saturate(140%)",
                WebkitBackdropFilter: "blur(18px) saturate(140%)",
              }
            : { background: "transparent" }
        }
        initial={{ opacity: 0, y: -20 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
      >
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 h-14 sm:h-16 flex items-center justify-between bg-transparent py-0">
          <button
            type="button"
            onClick={() => onNav("home")}
            className="font-semibold tracking-tight text-white text-lg sm:text-xl leading-none"
          >
            {SITE.fullName}
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV.map((item) => {
              if (item.id === "work") {
                return (
                  <div key={item.id} className="relative flex items-center">
                    <button
                      type="button"
                      onClick={() => onNav("work")}
                      className={`text-base sm:text-[17px] font-medium leading-none transition-colors pr-1 ${
                        activeNav === "work" ? "text-white" : "text-[#A0A0A0] hover:text-white"
                      }`}
                    >
                      {item.label}
                      {activeNav === "work" && (
                        <span className="block h-0.5 mt-1 rounded-full" style={{ background: ORANGE }} />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setWorkDropdownOpen((prev) => !prev);
                      }}
                      aria-label="Toggle projects dropdown"
                      aria-expanded={workDropdownOpen}
                      className={`p-1 rounded-md transition-colors ${
                        workDropdownOpen
                          ? "text-[#FF5A1F] bg-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${workDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <AnimatePresence>
                      {workDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: easeOut }}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 sm:mt-7 rounded-2xl border border-white/15 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-[#121212] z-50 min-w-[280px] sm:min-w-[340px]"
                        >
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 px-1">
                            <span className="text-xs font-bold tracking-wider uppercase text-white/50">
                              Selected Projects
                            </span>
                            <span className="text-[11px] font-semibold text-[#FF5A1F] bg-[#FF5A1F]/15 px-2.5 py-0.5 rounded-full border border-[#FF5A1F]/20">
                              {PROJECTS.length} Works
                            </span>
                          </div>

                          {/* Grid with 5 items per column */}
                          <div
                            className="grid grid-flow-col gap-2"
                            style={{
                              gridTemplateRows: `repeat(${Math.min(5, PROJECTS.length)}, minmax(0, 1fr))`,
                            }}
                          >
                            {PROJECTS.map((proj, pIdx) => (
                              <button
                                key={proj.title}
                                type="button"
                                onClick={() => {
                                  setWorkDropdownOpen(false);
                                  const el = document.getElementById(`project-${pIdx}`);
                                  if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    onNav("work");
                                  }
                                }}
                                className="group flex items-center gap-3 p-2.5 rounded-xl text-left transition-all hover:bg-white/[0.08] border border-transparent hover:border-white/10 w-full min-w-[250px]"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5A1F] text-white text-xs font-bold shadow-sm transition-transform group-hover:scale-105">
                                  {String(pIdx + 1).padStart(2, "0")}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-semibold text-white group-hover:text-[#FF5A1F] transition-colors truncate">
                                    {proj.title}
                                  </p>
                                  <p className="text-xs text-white/50 truncate">
                                    {proj.tags.slice(0, 2).join(" · ")}
                                  </p>
                                </div>
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5A1F] text-white shadow-sm transition-all group-hover:scale-110 group-hover:rotate-12">
                                  <ArrowUpRight size={13} strokeWidth={2.4} />
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNav(item.id)}
                  className={`text-base sm:text-[17px] font-medium leading-none transition-colors ${
                    activeNav === item.id ? "text-white" : "text-[#A0A0A0] hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeNav === item.id && (
                    <span className="block h-0.5 mt-1 rounded-full" style={{ background: ORANGE }} />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="hidden md:inline-flex items-center gap-2 rounded-full text-sm sm:text-base font-semibold pl-1 pr-4 sm:pr-5 py-1 leading-none text-white transition-opacity hover:opacity-90"
              style={{ background: ORANGE }}
            >
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0D0D0D] shrink-0">
                <Download size={15} />
              </span>
              Resume
            </button>
            <button
              type="button"
              className="lg:hidden p-1.5 text-white"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="fixed inset-0 z-[150] w-screen h-[100dvh] flex flex-col justify-between bg-black text-white p-6 sm:p-8 select-none overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-end w-full pt-2 sm:pt-4">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-3 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={26} strokeWidth={1.8} />
              </button>
            </div>

            {/* Centered Navigation Links + Orange Resume Button */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-7 my-auto py-6">
              {NAV.map((item, idx) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: idx * 0.035 + 0.05, ease: easeOut }}
                  onClick={() => onNav(item.id)}
                  className={`text-2xl sm:text-3xl font-medium tracking-tight transition-colors cursor-pointer text-center ${
                    activeNav === item.id ? "text-[#FF5A1F]" : "text-white/90 hover:text-[#FF5A1F]"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Orange Resume Button matching reference image */}
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.92, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.32, delay: NAV.length * 0.035 + 0.08, ease: easeOut }}
                onClick={() => {
                  setMenuOpen(false);
                  setResumeOpen(true);
                }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full text-white px-8 py-2.5 text-base font-semibold shadow-[0_4px_24px_rgba(255,90,31,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                style={{ background: ORANGE }}
              >
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Clean bottom socials */}
            <div className="flex items-center justify-center gap-6 pb-4 text-white/50 text-sm">
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SITE.socials.email}
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 w-full">
        {/* ——— HERO ——— */}
        <section
          id="home"
          ref={heroRef}
          className="relative w-full min-h-[100svh] h-[100svh] overflow-hidden flex flex-col"
        >
          {/* Room / atmosphere background */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/scroll-opening-room-mobile.webp" />
              <img
                src="/images/scroll-opening-room.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              />
            </picture>
            <div className="absolute inset-0 bg-black/55" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 20%, rgba(13,13,13,0.55) 70%, #0D0D0D 100%)",
              }}
            />
            {/* Ambient background expertise logos — positioned at the bottom behind the orange faded area */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
              {[
                {
                  name: "React",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                  className: "bottom-[44%] sm:bottom-[18%] md:bottom-[20%] left-[1%] sm:left-[3%] md:left-[4%]",
                  size: "w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40",
                  opacity: 0.42,
                  mobileOpacity: 0.6,
                  rotate: -6,
                  delay: 0.2,
                },
                {
                  name: "TypeScript",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                  className: "bottom-[44%] sm:bottom-[6%] md:bottom-[7%] right-[1%] sm:left-[13%] md:left-[14%] sm:right-auto",
                  size: "w-24 h-24 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-34 lg:h-34",
                  opacity: 0.45,
                  mobileOpacity: 0.6,
                  rotate: 8,
                  delay: 0.3,
                },
                {
                  name: "Tailwind",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                  className: "bottom-[30%] sm:bottom-[10%] md:bottom-[11%] left-[0%] sm:left-[23%] md:left-[25%]",
                  size: "w-20 h-20 sm:w-20 sm:h-20 md:w-26 md:h-26 lg:w-28 lg:h-28",
                  opacity: 0.45,
                  mobileOpacity: 0.55,
                  rotate: 6,
                  delay: 0.4,
                },
                {
                  name: "GitHub",
                  src: "https://cdn.simpleicons.org/github/FFFFFF",
                  className: "bottom-[30%] sm:bottom-[10%] md:bottom-[11%] right-[0%] sm:right-[23%] md:right-[25%]",
                  size: "w-20 h-20 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-30 lg:h-30",
                  opacity: 0.38,
                  mobileOpacity: 0.55,
                  rotate: -4,
                  delay: 0.4,
                },
                {
                  name: "Node.js",
                  src: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
                  className: "bottom-[5%] sm:bottom-[15%] md:bottom-[16%] right-[22%] sm:right-[13%] md:right-[14%]",
                  size: "w-12 h-12 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-30 lg:h-30",
                  opacity: 0.46,
                  mobileOpacity: 0,
                  rotate: 6,
                  delay: 0.3,
                },
                {
                  name: "Python",
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                  className: "bottom-[5%] sm:bottom-[17%] md:bottom-[19%] left-[22%] sm:right-[3%] md:right-[4%] sm:left-auto",
                  size: "w-12 h-12 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-38 lg:h-38",
                  opacity: 0.48,
                  mobileOpacity: 0,
                  rotate: -6,
                  delay: 0.2,
                },
              ].map((logo) => {
                const isMobileHidden = logo.mobileOpacity === 0;
                return (
                <motion.div
                  key={logo.name}
                  className={`absolute ${logo.className} ${logo.size} filter drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] ${isMobileHidden ? "hidden sm:block" : ""}`}
                  style={{ rotate: `${logo.rotate}deg` }}
                  initial={{ opacity: 0, y: 32, scale: 0.88 }}
                  animate={
                    playHero
                      ? { opacity: logo.opacity, y: 0, scale: 1 }
                      : { opacity: 0, y: 32, scale: 0.88 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: playHero ? logo.delay : 0,
                    ease: easeOut,
                  }}
                >
                  <img
                    src={logo.src}
                    alt=""
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
                );
              })}
            </div>

            {/* Warm center backlight aura behind portrait shoulders — desktop only */}
            <div
              className="hidden sm:block absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 55% 42% at 50% 64%, rgba(255, 90, 31, 0.35) 0%, rgba(194, 65, 12, 0.20) 45%, transparent 72%)",
              }}
            />

            {/* Ambient copper-orange gradient glow matching the expertise cards — positioned at bottom side only on mobile */}
            <div
              className="absolute inset-x-0 bottom-0 h-[28%] sm:h-[54%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #0D0D0D 0%, rgba(194, 65, 12, 0.65) 16%, rgba(146, 52, 16, 0.42) 38%, rgba(26, 20, 16, 0.20) 65%, transparent 100%), radial-gradient(ellipse 95% 60% at 50% 100%, rgba(255, 90, 31, 0.35) 0%, rgba(194, 65, 12, 0.28) 45%, transparent 80%)",
              }}
            />
          </div>

          {/* Giant role titles — behind portrait */}
          <div className="absolute inset-x-0 top-[12%] sm:top-[16%] md:top-[14%] z-10 pointer-events-none select-none px-3 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, x: "-18%" }}
              animate={playHero ? { opacity: 1, x: 0 } : { opacity: 0, x: "-18%" }}
              transition={{ duration: 1, delay: playHero ? 0.12 : 0, ease: easeOut }}
              className="font-hero-title text-center font-black tracking-tighter leading-[0.95] text-white/70 whitespace-nowrap"
              style={{ fontSize: "clamp(1.85rem, 9vw, 8rem)" }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: "18%" }}
              animate={playHero ? { opacity: 1, x: 0 } : { opacity: 0, x: "18%" }}
              transition={{ duration: 1, delay: playHero ? 0.24 : 0, ease: easeOut }}
              className="font-hero-title text-center font-black tracking-tighter leading-[0.95] mt-1 sm:mt-2 whitespace-nowrap"
              style={{
                fontSize: "clamp(1.85rem, 9vw, 8rem)",
                WebkitTextStroke: "clamp(1px, 0.14vw, 2px) rgba(255,255,255,0.72)",
                color: "transparent",
              }}
            >
              & UI UX Designer
            </motion.h1>
          </div>

          {/* Mobile only: Explore Work button matching reference design */}
          <div className="sm:hidden absolute inset-x-0 top-[27%] -translate-y-1/2 z-30 flex justify-center pointer-events-none px-4">
            <motion.button
              type="button"
              onClick={() => onNav("work")}
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={playHero ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.94 }}
              transition={{ duration: 0.55, delay: playHero ? 0.35 : 0, ease: easeOut }}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full pl-5 pr-1.5 py-1.5 text-sm font-semibold tracking-wide text-white active:scale-95 transition-all hover:opacity-95 cursor-pointer"
              style={{ background: ORANGE }}
            >
              <span className="font-semibold">Explore Work</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white shrink-0">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </motion.button>
          </div>

          {/* Portrait — in front of titles, faded at bottom */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none h-[75%] sm:h-[78%] md:h-[82%]"
            initial={{ opacity: 0, y: "28%" }}
            animate={playHero ? { opacity: 1, y: 0 } : { opacity: 0, y: "28%" }}
            transition={{ duration: 1.15, delay: playHero ? 0.18 : 0, ease: easeOut }}
          >
            <div className="relative h-full w-auto max-w-[min(640px,92vw)] scale-[1.48] sm:scale-100 origin-bottom">
              <img
                src={SITE.profile}
                alt={SITE.fullName}
                width={1024}
                height={1024}
                className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-2xl hero-portrait-mask"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Smooth full-bleed fade to background across bottom */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 z-20"
            style={{
              background:
                "linear-gradient(to top, #0D0D0D 0%, rgba(13, 13, 13, 0.65) 30%, transparent 100%)",
            }}
          />

          {/* Bottom UI row */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-30 px-5 sm:px-8 lg:px-12 pb-6 sm:pb-8 pointer-events-none"
            initial={{ opacity: 0, y: 16 }}
            animate={playHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: playHero ? 0.55 : 0, ease: easeOut }}
          >
            <div className="relative flex items-end justify-between gap-4">
              {/* Left spacer for justify-between alignment */}
              <div className="hidden sm:block" />

              {/* Copyright + scroll cue */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 hidden md:flex flex-col items-center gap-1.5 pointer-events-none">
                <p className="text-xs tracking-wide text-white/35">
                  © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
                </p>
                <ChevronDown size={16} className="text-white/40 animate-bounce" />
              </div>

              {/* Socials — hidden on mobile, visible on desktop */}
              <div className="hidden sm:flex items-center gap-4 sm:gap-5 pointer-events-auto">
                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href={SITE.socials.email}
                  aria-label="Email"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ——— ABOUT ——— */}
        <section id="about" className={`${SHELL} ${SECTION_Y}`}>
          <Reveal className="w-full text-center">
            <div className="relative inline-block">
              <TypeTitle
                text={ABOUT.heading}
                className="text-[clamp(2.35rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] text-white"
              />
              <SparkleStar size={28} color={ORANGE} className="absolute -top-3 -right-6 hidden sm:inline-block pointer-events-none" />
            </div>
            <p className="mt-6 w-full mx-auto max-w-4xl text-base sm:text-lg font-light leading-relaxed text-white/85">
              {ABOUT.summary}
            </p>
            <HighlightCopy
              text={ABOUT.body}
              className="mt-4 w-full mx-auto max-w-4xl text-base sm:text-lg font-light leading-relaxed"
              style={{ color: MUTED }}
            />
            <div className="mt-4 w-full mx-auto max-w-4xl space-y-3">
              {ABOUT.extras.map((line) => (
                <p key={line} className="text-base sm:text-lg font-light leading-relaxed" style={{ color: MUTED }}>
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <PillButton onClick={() => onNav("work")}>
                {ABOUT.cta} <ArrowUpRight size={16} />
              </PillButton>
            </div>
          </Reveal>
        </section>

        {/* ——— EDUCATION (pricing-style cards) ——— */}
        <section id="education" className={`${SHELL} ${SECTION_Y}`}>
          <Reveal className="w-full mb-12 md:mb-16 text-center">
            <TypeTitle
              text={EDUCATION.heading}
              className="text-[clamp(2.35rem,5vw,4rem)] font-bold tracking-tight text-white mx-auto text-center"
            />
            <p className="mt-3 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto text-center" style={{ color: MUTED }}>
              {EDUCATION.body}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch md:items-center max-w-7xl mx-auto">
            {EDUCATION.cards.map((card, i) => {
              const featured = card.featured;
              return (
                <Reveal
                  key={card.id}
                  delay={i * 0.08}
                  y={36}
                  className={`relative flex flex-col rounded-[22px] p-5 sm:p-6 lg:p-7 ${
                    featured ? "md:scale-[1.04] md:z-10 shadow-[0_24px_60px_rgba(255,107,44,0.35)]" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 rounded-[22px]"
                    style={{ background: featured ? "#FF6B2C" : "#1A1A1A" }}
                  />
                  <div className="relative z-10 flex flex-col h-full min-h-[420px]">
                    <p
                      className="text-sm font-semibold tracking-normal text-white"
                    >
                      {card.label}
                    </p>
                    <p className="mt-4 text-[clamp(2.85rem,5.5vw,4rem)] font-bold tracking-tight text-white leading-none">
                      {card.value}
                      {"valueNote" in card && card.valueNote ? (
                        <span className={`ml-2 text-lg font-semibold ${featured ? "text-white/80" : "text-white/50"}`}>
                          {card.valueNote}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-4 text-xl font-semibold text-white">{card.tagline}</p>

                    <ul className="mt-8 space-y-3.5 flex-1">
                      {card.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-base font-light text-white/90">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              featured ? "bg-white/20 text-white" : "bg-[#FF5A1F]/15 text-[#FF5A1F]"
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className={featured ? "text-white/95" : "text-white/70"}>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setResumeOpen(true)}
                      className={`mt-8 inline-flex w-full items-center gap-3 rounded-full pl-1.5 pr-5 py-2 text-base font-semibold transition-opacity hover:opacity-90 ${
                        featured ? "bg-[#0D0D0D] text-white" : "text-white"
                      }`}
                      style={featured ? undefined : { background: ORANGE }}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full shrink-0 ${
                          featured ? "bg-white/10" : "bg-white/15"
                        }`}
                      >
                        <ArrowUpRight size={16} />
                      </span>
                      <span className="flex-1 text-center pr-6">{card.cta}</span>
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ——— EXPERTISE + TOOLS ——— */}
        <section id="services" className={`${SHELL} ${SECTION_Y}`}>
          <Reveal className="w-full mb-8 md:mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <TypeTitle
                text={SERVICES.heading}
                className="text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold tracking-tight text-white text-center"
              />
              <BurstDoodle size={28} color={ORANGE} className="hidden sm:inline-block pointer-events-none" />
            </div>
            <p className="mt-2 sm:mt-3 max-w-3xl mx-auto text-center text-base sm:text-lg font-light leading-snug text-balance" style={{ color: MUTED }}>
              {SERVICES.body[0]}
              <br />
              {SERVICES.body[1]}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} y={28}>
                <div
                  className="rounded-[22px] border border-white/[0.06] p-5 sm:p-6 flex flex-col h-full"
                  style={{
                    background: "linear-gradient(to bottom, #141414 0%, #1A1410 42%, #5C2410 100%)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {item.stack.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.src}
                        alt={tech.name}
                        title={tech.name}
                        className={`h-7 w-7 object-contain ${tech.name === "GitHub" ? "invert" : ""}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg font-light leading-snug" style={{ color: MUTED }}>
                    {item.quote}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-lg font-bold text-white">{item.title}</p>
                    <p className="mt-0.5 text-base font-light" style={{ color: MUTED }}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— CERTIFICATIONS ——— */}
        <section id="certifications" className={`${SHELL} ${SECTION_Y}`}>
          <Reveal className="w-full mb-10 md:mb-14 text-center">
            <TypeTitle
              text={CERTIFICATIONS.heading}
              className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold tracking-tight text-white mx-auto text-center"
            />
            <p className="mt-3 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto text-center" style={{ color: MUTED }}>
              {CERTIFICATIONS.body}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {CERTIFICATIONS.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} y={28}>
                <button
                  type="button"
                  onClick={() =>
                    setBentoOpen({
                      kind: "image",
                      src: item.src,
                      title: `${item.issuer} — ${item.title}`,
                      year: "Cert",
                    })
                  }
                  className="group relative block w-full overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem] border border-white/10 bg-[#111] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C]/70"
                >
                  <img
                    src={item.src}
                    alt={`${item.issuer} — ${item.title}`}
                    className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] sm:h-[28%]"
                    style={{
                      background: `linear-gradient(to top, #9A3412 0%, #9A3412E6 35%, #C2410C66 70%, transparent 100%)`,
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                        {item.issuer}
                      </p>
                      <p className="mt-1 text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                        {item.title}
                      </p>
                    </div>
                    <span
                      className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#9A3412] transition-transform duration-300 group-hover:rotate-12"
                      aria-hidden
                    >
                      <ArrowUpRight size={16} strokeWidth={2.25} />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— STATS ——— */}
        <section className={`${SHELL} py-16 sm:py-20 md:py-24 relative z-10 border-y border-white/5`}>
          <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-14 items-center w-full">
            <div className="min-w-0 text-center lg:text-left">
              <TypeTitle
                text={STATS.heading}
                nowrap
                className="text-[clamp(1.35rem,2.8vw,2.85rem)] font-bold tracking-tight text-white mx-auto lg:mx-0 text-center lg:text-left"
              />
              <p className="mt-3 text-lg font-light leading-relaxed text-center lg:text-left" style={{ color: MUTED }}>
                {STATS.body}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {STATS.items.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.06} y={20} className="text-center sm:text-left min-w-0">
                  <CountStat
                    value={stat.value}
                    className="text-[clamp(2.4rem,5vw,3.65rem)] font-bold tracking-tight leading-none tabular-nums"
                    style={{ color: ORANGE }}
                  />
                  <p className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-normal tracking-wide truncate" style={{ color: MUTED }}>
                    {stat.title}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— WORK ARC (own full-bleed section) ——— */}
        <section id="work" className="relative z-0 w-full pt-12 sm:pt-16 md:pt-24 pb-10 overflow-hidden">
          {/* Curvy carousel visible on desktop, hidden on mobile */}
          <div className="w-full hidden md:block">
            <ArcGallery projects={PROJECTS} onSelect={setSelectedProject} />
          </div>

          <div className={`${SHELL} mt-0 md:-mt-14`}>
            <Reveal className="w-full text-center">
              <div className="relative inline-block">
                <TypeTitle
                  text={WORK.heading}
                  className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold tracking-tight text-white leading-tight"
                />
                {/* Accent sparkle on the left */}
                <div className="hidden md:block absolute -left-12 -top-4 pointer-events-none">
                  <SparkleStar size={26} color={ORANGE} />
                </div>
              </div>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-light leading-snug" style={{ color: MUTED }}>
                {WORK.body}
              </p>
              <div className="mt-6 sm:mt-7 flex justify-center items-center gap-3">
                <PillButton onClick={() => setSelectedProject(PROJECTS[0])}>
                  {WORK.cta} <ArrowUpRight size={16} />
                </PillButton>
              </div>
            </Reveal>

            {/* Detailed project list */}
            <div className="mt-20 md:mt-28 space-y-16 md:space-y-24">
              {PROJECTS.map((project, index) => {
                const flipped = index % 2 === 1;
                return (
                  <div
                    key={project.title}
                    id={`project-${index}`}
                    className={`scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                      flipped ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <Reveal x={flipped ? 80 : -80} y={0} className="min-w-0">
                      <div className="relative aspect-[16/9] w-full rounded-[8px] sm:rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full rounded-[8px] sm:rounded-2xl"
                          style={{ objectFit: (project.objectFit as "contain" | "cover") || "cover" }}
                          loading="lazy"
                        />
                      </div>
                    </Reveal>
                    <Reveal x={flipped ? -80 : 80} y={0} delay={0.08} className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                        <span className="font-bold tabular-nums inline-block mr-2.5 sm:mr-3.5" style={{ color: ORANGE }}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{project.title}</span>
                      </h3>
                      <p className="mt-4 text-base sm:text-lg font-light leading-relaxed text-balance" style={{ color: MUTED }}>
                        {project.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
                        {project.tags.map((tag) => {
                          const logo = techLogo(tag);
                          return (
                            <span
                              key={tag}
                              title={tag}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
                            >
                              {logo ? (
                                <img
                                  src={logo.src}
                                  alt=""
                                  className={`h-5 w-5 object-contain ${logo.invert ? "invert" : ""}`}
                                  loading="lazy"
                                />
                              ) : null}
                              <span className="text-xs sm:text-sm font-medium" style={{ color: MUTED }}>
                                {tag}
                              </span>
                            </span>
                          );
                        })}
                        {project.title.toLowerCase().includes("brown") && (
                          <button
                            type="button"
                            onClick={() => setProvidersModalOpen(true)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5A1F] hover:bg-[#e04812] text-white px-3.5 py-1.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(255,90,31,0.35)] group"
                            title="Click to view all supported AI Inference Providers & Models"
                          >
                            <Sparkles size={14} className="text-white transition-transform group-hover:rotate-12" />
                            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                              Multiple AI Providers
                            </span>
                            <span className="inline-flex items-center justify-center rounded-full bg-white text-[#FF5A1F] text-[10px] font-bold px-1.5 py-0.5 leading-none shadow-sm">
                              10+
                            </span>
                          </button>
                        )}
                      </div>
                      <ProjectActions project={project} />
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ——— ACHIEVEMENTS (bento) ——— */}
        <section id="achievements" className={`${SHELL} ${SECTION_Y}`}>
          <Reveal className="w-full mb-10 md:mb-14 text-center">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <TypeTitle
                text="Achievements"
                className="sm:hidden text-[clamp(1.95rem,5.5vw,3.25rem)] font-bold tracking-tight text-white whitespace-nowrap"
              />
              <TypeTitle
                text={ACHIEVEMENTS.heading}
                className="hidden sm:inline-block text-[clamp(2.1rem,4vw,3.25rem)] font-bold tracking-tight text-white"
              />
              <SparkleStar size={28} color={ORANGE} className="shrink-0" />
            </div>
            <p className="mt-3 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto text-center" style={{ color: MUTED }}>
              {ACHIEVEMENTS.body}
            </p>
          </Reveal>

          {(() => {
            const hgxCert = {
              src: "/images/achievements/hgx.webp",
              title: "HackGenX — Consolation Prize",
              year: "2026",
            };
            const rppCert = {
              src: "/images/achievements/rpp.webp",
              title: "MACCS Research Poster — 3rd Rank",
              year: "2024",
            };

            const col1 = [
              { kind: "image" as const, data: hgxCert },
              { kind: "js-cert" as const },
            ];

            const col2 = [
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/hack.webp",
                  title: "HackGenX — Consolation Prize",
                  year: "2026",
                },
              },
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/gen.webp",
                  title: "HackGenX — Consolation Prize",
                  year: "2026",
                },
              },
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/coc.webp",
                  title: "Codorithm 2K25",
                  year: "2025",
                },
              },
            ];

            const col3 = [
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/circuitron.webp",
                  title: "Circuitron — 2nd Winner",
                  year: "2024",
                },
              },
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/cec.webp",
                  title: "Circuitron — 2nd Winner",
                  year: "2024",
                },
              },
              {
                kind: "image" as const,
                data: {
                  src: "/images/achievements/rac.webp",
                  title: "Rackathon",
                  year: "2024",
                },
              },
            ];

            const col4 = [
              { kind: "image" as const, data: rppCert },
              { kind: "python-cert" as const },
            ];

            const columns = [col1, col2, col3, col4];

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-start">
                {columns.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-3 sm:gap-4">
                    {col.map((item, itemIdx) => {
                      if (item.kind === "js-cert") {
                        return (
                          <Reveal key="js-cert" delay={0.05} y={20}>
                            <button
                              type="button"
                              onClick={() =>
                                setBentoOpen({
                                  kind: "image",
                                  src: CERTIFICATIONS.items[0].src,
                                  title: `${CERTIFICATIONS.items[0].issuer} — ${CERTIFICATIONS.items[0].title}`,
                                  year: "Cert",
                                })
                              }
                              className="group relative flex flex-col justify-between w-full rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(237,232,223,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDE8DF]"
                              style={{ background: "#EDE8DF", minHeight: 190 }}
                            >
                              <div className="flex items-start justify-between gap-3 w-full">
                                <h4 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#141414] leading-[1.12]">
                                  JavaScript
                                  <span className="block font-medium text-lg sm:text-xl text-[#333]">
                                    Basic
                                  </span>
                                </h4>
                                <span
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#141414] text-[#EDE8DF] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                                  aria-hidden
                                >
                                  <ArrowUpRight size={17} strokeWidth={2.4} />
                                </span>
                              </div>
                              <div className="mt-8 pt-3 border-t border-[#141414]/10">
                                <p className="text-[11px] font-bold tracking-wider uppercase text-[#141414]/60 mb-1">
                                  HackerRank Verified
                                </p>
                                <p className="text-xs sm:text-[13px] font-medium leading-snug text-[#141414]/80">
                                  Language fundamentals, algorithms, and DOM problem-solving.
                                </p>
                              </div>
                            </button>
                          </Reveal>
                        );
                      }

                      if (item.kind === "python-cert") {
                        return (
                          <Reveal key="python-cert" delay={0.08} y={20}>
                            <button
                              type="button"
                              onClick={() =>
                                setBentoOpen({
                                  kind: "image",
                                  src: CERTIFICATIONS.items[1].src,
                                  title: `${CERTIFICATIONS.items[1].issuer} — ${CERTIFICATIONS.items[1].title}`,
                                  year: "Cert",
                                })
                              }
                              className="group relative flex flex-col justify-between w-full rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,107,44,0.3)] hover:shadow-[0_16px_40px_rgba(255,107,44,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]"
                              style={{ background: "#FF6B2C", minHeight: 190 }}
                            >
                              <div className="flex items-start justify-between gap-3 w-full">
                                <h4 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-[1.12]">
                                  Python
                                  <span className="block font-medium text-lg sm:text-xl text-white/90">
                                    Programming
                                  </span>
                                </h4>
                                <span
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#FF6B2C] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                                  aria-hidden
                                >
                                  <ArrowUpRight size={17} strokeWidth={2.4} />
                                </span>
                              </div>
                              <div className="mt-8 pt-3 border-t border-white/20">
                                <p className="text-[11px] font-bold tracking-wider uppercase text-white/70 mb-1">
                                  Udemy · Abdul Bari
                                </p>
                                <p className="text-xs sm:text-[13px] font-medium leading-snug text-white/90">
                                  Data structures, object-oriented concepts, and clean coding.
                                </p>
                              </div>
                            </button>
                          </Reveal>
                        );
                      }

                      const tile = item.data;
                      return (
                        <Reveal
                          key={tile.src}
                          delay={Math.min((colIdx * 2 + itemIdx) * 0.03, 0.24)}
                          y={20}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setBentoOpen({
                                kind: "image",
                                src: tile.src,
                                title: tile.title,
                                year: tile.year,
                              })
                            }
                            className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]/70"
                          >
                            <img
                              src={tile.src}
                              alt={tile.title}
                              className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] sm:h-[30%] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-out"
                              style={{
                                background: `linear-gradient(to top, ${ORANGE} 0%, ${ORANGE}B8 45%, ${ORANGE}40 75%, transparent 100%)`,
                              }}
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-3.5 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-1.5 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
                              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                                {tile.year}
                              </p>
                              <p className="mt-0.5 text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                                {tile.title}
                              </p>
                            </div>
                          </button>
                        </Reveal>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })()}
        </section>

        {/* ——— FOOTER CTA ——— */}
        <section className={`${SHELL} pb-10`}>
          <Reveal y={36}>
            <div
              className="relative rounded-[24px] overflow-hidden border border-white/10 min-h-[240px] sm:min-h-[280px] flex items-center justify-center"
              style={{ background: BG_ELEV }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${ORANGE}66 0%, ${ORANGE}33 28%, transparent 62%), radial-gradient(ellipse 80% 55% at 50% 100%, ${ORANGE}44, transparent 70%)`,
                }}
              />
              <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 md:py-16 text-center max-w-3xl mx-auto">
                <SparkleStar size={30} color={ORANGE} className="absolute top-4 right-4 sm:top-6 sm:right-8 pointer-events-none" />
                <h2 className="text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold tracking-tight text-white leading-tight">
                  <span className="sm:hidden">
                    Let’s build
                    <br />
                    <span className="whitespace-nowrap">something impactful</span>
                    <br />
                    together.
                  </span>
                  <span className="hidden sm:inline">
                    Let’s build something
                    <br />
                    impactful together.
                  </span>
                </h2>
                <div className="relative mt-7 flex flex-wrap gap-3 justify-center items-center">
                  <PillButton href={SITE.email}>Contact me</PillButton>
                  <PillButton variant="ghost" onClick={() => setResumeOpen(true)}>
                    Resume
                  </PillButton>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ——— SITE FOOTER ——— */}
        <footer className="border-t border-white/10">
          <NameSpotlight name={SITE.fullName} />

          <div className={`${SHELL} pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-4`}>
            <div className="text-center">
              <p className="mx-auto max-w-xl text-lg font-light leading-relaxed" style={{ color: MUTED }}>
                {FOOTER.blurb[0]}
                <br />
                {FOOTER.blurb[1]}
              </p>
            </div>

            <div className="mt-14 flex flex-col items-center gap-6 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
              <p className="order-2 sm:order-1 text-base font-light sm:justify-self-start text-center sm:text-left" style={{ color: MUTED }}>
                © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
              </p>
              <div className="order-1 sm:order-2 flex items-center justify-center gap-6">
                <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
                  <Github size={22} />
                </a>
                <a href={SITE.socials.email} aria-label="Email" className="text-white/70 hover:text-white transition-colors">
                  <Mail size={22} />
                </a>
              </div>
              <div className="order-3 sm:justify-self-end">
                <PillButton variant="ghost" onClick={() => setResumeOpen(true)}>
                  Resume
                </PillButton>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Project quick modal from arc */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-t-xl sm:rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: BG_ELEV }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black/40">
                <img src={selectedProject.thumbnail} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <button type="button" onClick={() => setSelectedProject(null)} className="p-1 text-white/60 hover:text-white" aria-label="Close">
                    <X size={20} />
                  </button>
                </div>
                <p className="mt-3 text-base font-light leading-relaxed" style={{ color: MUTED }}>
                  {selectedProject.desc}
                </p>
                {selectedProject.title.toLowerCase().includes("brown") && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setProvidersModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] hover:bg-[#e04812] text-white px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(255,90,31,0.35)] group"
                    >
                      <Sparkles size={15} className="text-white transition-transform group-hover:rotate-12" />
                      <span className="text-sm font-semibold tracking-wide text-white">
                        Multiple AI Providers
                      </span>
                      <span className="inline-flex items-center justify-center rounded-full bg-white text-[#FF5A1F] text-[10px] font-bold px-1.5 py-0.5 leading-none shadow-sm">
                        10+ Supported
                      </span>
                    </button>
                  </div>
                )}
                <ProjectActions project={selectedProject} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brown AI Multi-Provider Modal */}
      <AnimatePresence>
        {providersModalOpen && (
          <motion.div
            className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProvidersModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-white/15 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              style={{ background: BG_ELEV }}
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Brown AI Supported Providers
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-light text-[#A0A0A0]">
                    Run 100% offline local inference or connect high-throughput cloud models seamlessly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setProvidersModalOpen(false)}
                  className="rounded-full p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Providers Grid */}
              <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BROWN_AI_PROVIDERS.map((provider) => (
                    <div
                      key={provider.name}
                      className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-[#FF5A1F]/50 hover:bg-white/[0.06] transition-all duration-200 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A] p-2.5 group-hover:border-[#FF5A1F]/50 transition-colors">
                        <img
                          src={provider.src}
                          alt={provider.name}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate group-hover:text-[#FF5A1F] transition-colors">
                          {provider.name}
                        </p>
                        <p className="text-xs text-[#A0A0A0] truncate">
                          {provider.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Work Navigation Arrows in bottom-left */}
      <AnimatePresence>
        {activeNav === "work" && (
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -24, scale: 0.9 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="fixed bottom-6 left-6 z-40 flex flex-col gap-2.5 pointer-events-auto"
          >
            <button
              type="button"
              onClick={() => scrollWorkProjects("up")}
              title="Previous project"
              aria-label="Previous project"
              className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(255,90,31,0.4)] transition-all hover:scale-105 active:scale-95"
              style={{ background: ORANGE }}
            >
              <ChevronUp size={22} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollWorkProjects("down")}
              title="Next project"
              aria-label="Next project"
              className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#161616]/90 text-white border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:bg-[#222] hover:border-white/35 hover:scale-105 active:scale-95"
            >
              <ChevronDown size={22} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Bottom Sheet (Direct resume document + floating right controls) */}
      <AnimatePresence>
        {resumeOpen && (
          <>
            {/* Blurred Backdrop */}
            <motion.div
              key="resume-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setResumeOpen(false)}
              className="fixed inset-0 z-[130] bg-black/80 backdrop-blur-md cursor-pointer"
              aria-label="Close resume overlay"
            />

            {/* Desktop Only: Floating Controls on the right side */}
            <div className="hidden sm:flex fixed right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[140] flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto">
              {/* Scroll Up */}
              <button
                type="button"
                onClick={() =>
                  resumeScrollRef.current?.scrollBy({ top: -360, behavior: "smooth" })
                }
                title="Scroll up"
                aria-label="Scroll up resume"
                className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#181818]/90 text-white border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronUp size={22} className="transition-transform group-hover:-translate-y-0.5" />
              </button>

              {/* Scroll Down */}
              <button
                type="button"
                onClick={() =>
                  resumeScrollRef.current?.scrollBy({ top: 360, behavior: "smooth" })
                }
                title="Scroll down"
                aria-label="Scroll down resume"
                className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#181818]/90 text-white border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronDown size={22} className="transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Subtle divider line */}
              <div className="w-6 h-[1px] bg-white/20 my-0.5" />

              {/* Maximize / Expand (Half Mode) */}
              <button
                type="button"
                onClick={() => setResumeFit(false)}
                title="Expand / Half view (scrollable)"
                aria-label="Expand resume to half view"
                className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                  !resumeFit
                    ? "bg-[#FF5A1F] border-[#FF5A1F] text-white scale-105"
                    : "bg-[#181818]/90 border-white/20 text-white/70 hover:text-white hover:bg-[#252525]"
                }`}
              >
                <Maximize2 size={19} />
              </button>

              {/* Minimize (Fit to Screen) */}
              <button
                type="button"
                onClick={() => setResumeFit(true)}
                title="Minimize / Fit entire resume in viewport"
                aria-label="Fit entire resume in viewport"
                className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all active:scale-95 cursor-pointer ${
                  resumeFit
                    ? "bg-[#FF5A1F] border-[#FF5A1F] text-white scale-105"
                    : "bg-[#181818]/90 border-white/20 text-white/70 hover:text-white hover:bg-[#252525]"
                }`}
              >
                <Minimize2 size={19} />
              </button>

              {/* Download PDF */}
              <a
                href={RESUME_PATH}
                download
                title="Download Resume PDF"
                aria-label="Download Resume PDF"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#181818]/90 text-white/80 border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:text-white hover:bg-[#252525] active:scale-95 cursor-pointer"
              >
                <Download size={18} />
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setResumeOpen(false)}
                title="Close (Esc)"
                aria-label="Close Resume"
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#181818]/90 text-white/80 border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:text-white hover:bg-red-500/80 hover:border-red-500 active:scale-95 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Desktop Only: Bottom Sheet */}
            <div className="hidden sm:flex fixed inset-x-0 bottom-0 z-[132] justify-center pointer-events-none px-4 sm:px-8">
              <motion.div
                key="resume-sheet"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  damping: 32,
                  stiffness: 300,
                  mass: 0.9,
                }}
                className={`pointer-events-auto relative w-full max-w-3xl lg:max-w-4xl flex flex-col items-center overflow-hidden transition-[height] duration-500 ease-out ${
                  resumeFit
                    ? "h-[92vh] sm:h-[94vh]"
                    : "h-[68vh] sm:h-[72vh]"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {resumeFit ? (
                  /* Fit Mode: Sized to fit completely within viewport height */
                  <div className="w-full h-full flex items-center justify-center overflow-hidden pb-4">
                    <img
                      src="/resume/resume-preview.webp"
                      alt="Vedant Wankhade Resume"
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded-t-2xl shadow-[0_-20px_70px_rgba(0,0,0,0.9)] bg-white select-none pointer-events-auto border border-white/10"
                      style={{ aspectRatio: "612 / 792" }}
                    />
                  </div>
                ) : (
                  /* Default Mode: Large, generous half view with natural aspect ratio and smooth scrolling */
                  <div
                    ref={resumeScrollRef}
                    className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center scroll-smooth rounded-t-2xl px-2 scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    <img
                      src="/resume/resume-preview.webp"
                      alt="Vedant Wankhade Resume"
                      className="w-full max-w-[760px] h-auto shrink-0 object-contain rounded-t-2xl shadow-[0_-25px_80px_rgba(0,0,0,0.95)] bg-white select-none pointer-events-auto border-t border-x border-white/15"
                      style={{ aspectRatio: "612 / 792" }}
                    />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Mobile Only: Vertically Centered with Top Controls Bar and All Rounded Corners */}
            <div className="sm:hidden fixed inset-0 z-[132] flex flex-col items-center justify-center p-3 pointer-events-none">
              <motion.div
                key="resume-modal-mobile"
                initial={{ opacity: 0, scale: 0.94, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 14 }}
                transition={{ duration: 0.28, ease: easeOut }}
                className="pointer-events-auto w-full max-w-[365px] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Controls Bar */}
                <div className="mb-2.5 flex items-center justify-center gap-1.5 rounded-full bg-[#181818]/95 border border-white/20 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.8)] backdrop-blur-md">
                  {/* Scroll Up */}
                  <button
                    type="button"
                    onClick={() =>
                      mobileResumeScrollRef.current?.scrollBy({ top: -260, behavior: "smooth" })
                    }
                    title="Scroll up"
                    aria-label="Scroll up resume"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronUp size={18} />
                  </button>

                  {/* Scroll Down */}
                  <button
                    type="button"
                    onClick={() =>
                      mobileResumeScrollRef.current?.scrollBy({ top: 260, behavior: "smooth" })
                    }
                    title="Scroll down"
                    aria-label="Scroll down resume"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronDown size={18} />
                  </button>

                  {/* Divider */}
                  <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

                  {/* Maximize / Expand (Scroll Mode) */}
                  <button
                    type="button"
                    onClick={() => setResumeFit(false)}
                    title="Expand / Scrollable view"
                    aria-label="Expand resume view"
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all active:scale-95 cursor-pointer ${
                      !resumeFit
                        ? "bg-[#FF5A1F] text-white shadow-sm"
                        : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Maximize2 size={15} />
                  </button>

                  {/* Minimize (Fit to Viewport) */}
                  <button
                    type="button"
                    onClick={() => setResumeFit(true)}
                    title="Fit entire resume in view"
                    aria-label="Fit resume in view"
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all active:scale-95 cursor-pointer ${
                      resumeFit
                        ? "bg-[#FF5A1F] text-white shadow-sm"
                        : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Minimize2 size={15} />
                  </button>

                  {/* Divider */}
                  <div className="w-[1px] h-4 bg-white/20 mx-0.5" />

                  {/* Download PDF */}
                  <a
                    href={RESUME_PATH}
                    download
                    title="Download Resume PDF"
                    aria-label="Download Resume PDF"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <Download size={15} />
                  </a>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    title="Close"
                    aria-label="Close Resume"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/25 text-red-300 hover:bg-red-500 hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Resume Card — All Corners Rounded (Top & Bottom), Vertically Centered */}
                <div
                  className={`w-full overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.95)] bg-white transition-[height] duration-300 ease-out ${
                    resumeFit ? "h-[74vh] max-h-[620px]" : "h-[72vh] max-h-[580px]"
                  }`}
                >
                  {resumeFit ? (
                    <div className="w-full h-full flex items-center justify-center p-1.5 bg-white rounded-2xl overflow-hidden">
                      <img
                        src="/resume/resume-preview.webp"
                        alt="Vedant Wankhade Resume"
                        className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl select-none"
                        style={{ aspectRatio: "612 / 792" }}
                      />
                    </div>
                  ) : (
                    <div
                      ref={mobileResumeScrollRef}
                      className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center scroll-smooth rounded-2xl bg-white scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      <img
                        src="/resume/resume-preview.webp"
                        alt="Vedant Wankhade Resume"
                        className="w-full h-auto shrink-0 object-contain rounded-2xl select-none"
                        style={{ aspectRatio: "612 / 792" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Achievement bento lightbox */}
      <AnimatePresence>
        {bentoOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/88 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBentoOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setBentoOpen(null)}
                className="absolute -top-10 right-0 sm:top-3 sm:right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                <img src={bentoOpen.src} alt={bentoOpen.title} className="w-full max-h-[75vh] object-contain bg-black" />
                <div className="px-5 py-4 border-t border-white/10">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: ORANGE }}>
                    {bentoOpen.year}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">{bentoOpen.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
