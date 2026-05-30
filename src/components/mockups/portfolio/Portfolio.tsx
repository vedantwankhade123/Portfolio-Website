import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Code,
  Layers,
  Smartphone,
  Server,
  Zap,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Send,
  Loader2,
  Download,
  Mail,
  Play,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Building,
  MapPin,
  Trophy,
  Cpu,
  Terminal,
  Sparkles,
  BookOpen,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = ['home', 'about', 'education', 'skills', 'projects', 'achievements'];

const SKILLS_DATA = [
  { name: 'React', icon: 'devicon-react-original', color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6', category: 'Languages' },
  { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB', category: 'Languages' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original', color: '#06B6D4', category: 'Frontend' },
  { name: 'Git', icon: 'devicon-git-plain', color: '#F05032', category: 'Tools' },
  { name: 'GitHub', icon: 'devicon-github-original', color: '#181717', category: 'Tools' },
  { name: 'SQL', icon: 'devicon-postgresql-plain', color: '#4169E1', category: 'Backend' },
  { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E', category: 'Languages' },
  { name: 'jQuery', icon: 'devicon-jquery-plain', color: '#0769AD', category: 'Frontend' },
  { name: 'Django', icon: 'devicon-django-plain', color: '#092E20', category: 'Backend' },
  { name: 'Bootstrap 5', icon: 'devicon-bootstrap-plain', color: '#7952B3', category: 'Frontend' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain', color: '#003B57', category: 'Backend' },
  { name: 'Postgres', icon: 'devicon-postgresql-plain', color: '#336791', category: 'Backend' },
];

const CERTIFICATES_DATA = [
  {
    title: "Python - Beginner to Master",
    instructors: ["Abdul Bari"],
    platform: "Udemy",
    date: "April 2, 2025",
    image: "/images/Python.jpg",
    credentialId: "UC-914a488d-bd1d-4118-8806-3a85c3acf6c4",
    credentialUrl: "https://ude.my/UC-914a488d-bd1d-4118-8806-3a85c3acf6c4",
    associatedSkills: ['Python', 'SQL', 'Git'],
    content: [
      "PyCharm, Jupyter Notebook & IDLE",
      "Numeric & Advance Datatypes (List, Tuple, Set, Dict)",
      "Conditional and Loop Statements",
      "Exception Handling & Multithreaded Programs",
      "Functional & Object-Oriented Programming"
    ]
  }
];

const SkillsFade = ({ isDark, onSkillClick }: { isDark: boolean; onSkillClick: (name: string) => void }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => onSkillClick(skill.name)}
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="relative mb-3">
              <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                   style={{ background: skill.color }} />
              <i className={`${skill.icon} text-5xl md:text-6xl filter drop-shadow-md`} 
                 style={{ color: skill.color }}></i>
            </div>
            <span className={`text-xs md:text-sm font-bold uppercase tracking-wider text-center
               ${isDark ? 'text-white/80' : 'text-[#3D2817]/80'}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PROJECTS = [
  {
    title: 'HealBook – AI-Powered Doctor Booking & Chatbot',
    desc: 'An AI-powered appointment booking system where users or patients can book appointments with any doctor in their city or area. Features an AI-powered symptom-identification chatbot that communicates using voice, powered by Gemini AI and Gemini QTS text-to-speech.',
    tags: ['React', 'Gemini AI', 'Node.js', 'Tailwind'],
    icon: <span className="text-4xl">🩺</span>,
    gradient: 'from-[#FF8C42] to-[#993300]',
    video: '',
    thumbnail: '/images/healbook.jpg',
    objectFit: 'contain',
    liveUrl: 'not_live',
    githubUrl: 'https://github.com/vedantwankhade123/healbook'
  },
  {
    title: 'Ekdanta E-commerce Website',
    desc: 'A client-centric e-commerce website built for a client, enabling the client to list products and users to view, purchase, and pay securely with all essential e-commerce features.',
    tags: ['React', 'Firebase', 'Tailwind', 'Node.js'],
    icon: <span className="text-4xl">🛍️</span>,
    gradient: 'from-[#8B5A3C] to-[#4D1A00]',
    video: '',
    thumbnail: '/images/ekdanta.png',
    objectFit: 'contain',
    liveUrl: 'https://ekdanta-c4074.web.app/',
    githubUrl: 'https://github.com/vedantwankhade123/ekdanta-ecommerce'
  },
  {
    title: 'Engineering Project Hub – Marketplace for Projects',
    desc: 'A marketplace where students, professionals, and individuals can request or order engineering projects, including pre-built and fully customized solutions. Users can browse a curated catalog or submit their requirements, and projects are designed, developed, and delivered end-to-end.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    icon: <span className="text-4xl">✨</span>,
    gradient: 'from-[#6F4830] to-[#3D2817]',
    video: 'https://www.youtube.com/embed/KNsh4871Ke8?si=dPX2Q_iLSYGgQMTk&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=KNsh4871Ke8',
    thumbnail: '/images/eph.png',
    liveUrl: 'https://engineeringprojecthub.online',
    githubUrl: 'private'
  },
  {
    title: 'Drawgit Repository Visualizer',
    desc: 'A GitHub repository visualizer that turns any repository into a tree structure where each file and directory is a node.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    icon: <span className="text-4xl">🤖</span>,
    gradient: 'from-[#5C3A24] to-[#8B5A3C]',
    video: 'https://www.youtube.com/embed/g5Jm7cfGxOI?si=82K-R0Wy7nhCeweE&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=g5Jm7cfGxOI',
    thumbnail: '/images/drawgit.jpg',
    liveUrl: 'https://drawgit.netlify.app/',
    githubUrl: 'https://github.com/vedantwankhade123/drawgit.git'
  },
  {
    title: 'NeuCV Resume Builder',
    desc: 'A modern platform for anyone to quickly build professional resumes using pre-designed templates and integrated AI features to enhance content.',
    tags: ['Vue.js', 'Python', 'FastAPI'],
    icon: <span className="text-4xl">🌤️</span>,
    gradient: 'from-[#3D2817] to-[#6F4830]',
    video: 'https://www.youtube.com/embed/M7qJBLAaquA?si=dG6yznPgrNTtfgsj&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=M7qJBLAaquA',
    thumbnail: '/images/neucv.png',
    liveUrl: 'not_live',
    githubUrl: 'unavailable'
  }
];

const SERVICES_DATA = [
  { 
    icon: <Code size={32} />, 
    title: "Web Development", 
    desc: "Fast, responsive, and accessible websites built with modern frameworks like React and Next.js.",
    grad: "from-orange-600/20 via-orange-950/40 to-[#0F0800]",
    lightGrad: "from-orange-100 via-orange-50 to-white",
    span: "lg:col-span-8"
  },
  { 
    icon: <Layers size={32} />, 
    title: "UI Rendering", 
    desc: "Crafting visually stunning and functional interfaces.",
    grad: "from-orange-500/20 via-orange-900/30 to-[#0F0800]",
    lightGrad: "from-[#FFEDD8] via-orange-50 to-white",
    span: "lg:col-span-4" 
  },
  { 
    icon: <Server size={32} />, 
    title: "Backend APIs", 
    desc: "Architecting robust and scalable server-side systems.",
    grad: "from-orange-400/20 via-orange-800/30 to-[#0F0800]",
    lightGrad: "from-orange-50 via-white to-orange-100",
    span: "lg:col-span-4" 
  },
  { 
    icon: <Zap size={32} />, 
    title: "Performance Optimization", 
    desc: "Ensuring lighting speed across every platform and device.",
    grad: "from-orange-700/20 via-orange-950/40 to-[#0F0800]",
    lightGrad: "from-white via-orange-50 to-orange-100",
    span: "lg:col-span-8" 
  },
  { 
    icon: <Smartphone size={32} />, 
    title: "Cross-Platform", 
    desc: "Delivering consistent experiences on mobile and desktop.",
    grad: "from-orange-600/10 via-orange-900/20 to-[#0F0800]",
    lightGrad: "from-orange-100 via-white to-orange-50",
    span: "lg:col-span-7" 
  },
  { 
    icon: <MessageSquare size={32} />, 
    title: "Consulting", 
    desc: "Technical guidance for your next big idea.",
    grad: "from-orange-800/20 via-orange-950/40 to-[#0F0800]",
    lightGrad: "from-[#FFF5EC] via-white to-orange-50",
    span: "lg:col-span-5" 
  }
];

const ACHIEVEMENT_IMAGES = [
  { 
    title: "HackGenX 2026", 
    subtitle: "Consolation Prize (AI Project)",
    description: "Developed an AI-powered leak and anomaly detection system for urban water infrastructure, earning recognition at a national-level hackathon.",
    images: ["/images/HGX.png", "/images/Hack.jpg", "/images/gen.jpg"], 
    isVertical: true
  },
  { 
    title: "Codorithm 2K25", 
    subtitle: "State-Level Coding Competition",
    description: "Participated in a state-level coding competition, enhancing problem-solving, algorithmic thinking, and competitive programming skills in a high-pressure environment.",
    images: ["/images/COC.jpg"], 
    isVertical: false
  },
  { 
    title: "Research Poster Presentation – 3rd Rank", 
    subtitle: "International Conference (MACCS-2024)",
    description: "Presented a research poster at an international conference and secured 3rd rank, demonstrating strong communication, innovation, and technical presentation skills.",
    images: ["/images/RPP.jpg"], 
    isVertical: true
  },
  { 
    title: "Circuitron 2024", 
    subtitle: "2nd Winner (Electronics Competition)",
    description: "Secured 2nd place in Circuitron 2024 at G H Raisoni University by designing and developing electronic circuit solutions across multiple competitive rounds, demonstrating strong problem-solving and hardware skills.",
    images: ["/images/circuitron.jpg", "/images/CEC.jpg"], 
    isVertical: true 
  },
  { 
    title: "Rackathon 2024", 
    subtitle: "Innovation & Design Competition",
    description: "Actively participated in a national-level innovation competition, working on creative problem-solving and product design thinking.",
    images: ["/images/rackathon.jpg", "/images/RAC.png"], 
    isVertical: false
  }
];


const EDUCATION_TIMELINE = [
  {
    year: "10th",
    period: "SSC",
    title: "10th Grade",
    subtitle: "Secondary School Certificate",
    institution: "Prabodhan Vidyalaya, Daryapur",
    score: "97.20%",
    note: "Completed foundational schooling with focus on core subjects."
  },
  {
    year: "11th",
    period: "HSC Year 1",
    title: "11th Grade",
    subtitle: "Higher Secondary (Vocational)",
    institution: "P.R. Pote Patil Kanishtha Mahavidyalaya, Amravati",
    score: "95.03%",
    note: "Started advanced vocational coursework and analytical preparation."
  },
  {
    year: "12th",
    period: "HSC Year 2",
    title: "12th Grade",
    subtitle: "Higher Secondary (Vocational)",
    institution: "P.R. Pote Patil Kanishtha Mahavidyalaya, Amravati",
    score: "61.0%",
    note: "Completed higher secondary with vocational and engineering focus."
  },
  {
    year: "Present",
    period: "Current",
    title: "B.Tech - 3rd Year",
    subtitle: "Computer Science & Engineering",
    institution: "G.H.Raisoni University, Amravati",
    cgpa: [
      { sem: "Sem 1", val: "9.35" },
      { sem: "Sem 2", val: "8.78" },
      { sem: "Sem 3", val: "8.67" },
      { sem: "Sem 4", val: "8.61" },
      { sem: "Sem 5", val: "8.68" }
    ],
    note: "Building full-stack and AI projects with practical, real-world work."
  },
];


const AnimatedTypewriter = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      y: 5,
    },
  };

  return (
    <motion.p
      className={`${className} flex flex-wrap justify-center`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className="inline-block mr-[0.25em] mb-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [skillPage, setSkillPage] = useState(0);
  const [highlightPage, setHighlightPage] = useState(0);
  const [instructorPage, setInstructorPage] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isProjectPlaying, setIsProjectPlaying] = useState(false);
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(0);
  const [subImageIndex, setSubImageIndex] = useState(0);
  const [activeEduIndex, setActiveEduIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visualProgress, setVisualProgress] = useState(0);
  const visualProgressSpring = useSpring(0, { stiffness: 150, damping: 30 });
  const [isAchievementsHovered, setIsAchievementsHovered] = useState(false);
  const [isAchievementDescOpen, setIsAchievementDescOpen] = useState(false);
  const [resumeToast, setResumeToast] = useState<'idle' | 'unavailable'>('idle');
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
  const [resumeZoom, setResumeZoom] = useState(1.0);
  const [selectedAchievementImg, setSelectedAchievementImg] = useState<string | null>(null);
  const [mobileAchievementSubIndex, setMobileAchievementSubIndex] = useState(0);
  // Bento layout state
  const [bentoImageIndices, setBentoImageIndices] = useState<number[]>(ACHIEVEMENT_IMAGES.map(() => 0));
  const [expandedAchievement, setExpandedAchievement] = useState(-1);
  const [expandedImgIndex, setExpandedImgIndex] = useState(0);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [isTourAudioPlaying, setIsTourAudioPlaying] = useState(false);
  const [showTourTooltip, setShowTourTooltip] = useState(false);
  const dismissTooltip = () => {
    setShowTourTooltip(false);
  };

  const hasShownTooltipRef = useRef(false);

  useEffect(() => {
    if (!isTourPlaying && !hasShownTooltipRef.current) {
      const timer = setTimeout(() => {
        setShowTourTooltip(true);
        hasShownTooltipRef.current = true;
      }, 2200); // 2.2s delay to allow initial website entry animations to complete first
      return () => clearTimeout(timer);
    }
  }, [isTourPlaying]);

  const [tooltipTimeLeft, setTooltipTimeLeft] = useState(8);

  useEffect(() => {
    if (showTourTooltip) {
      setTooltipTimeLeft(8);
      const timer = setInterval(() => {
        setTooltipTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            dismissTooltip();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showTourTooltip]);

  const [tourTime, setTourTime] = useState(0);
  const [tourDuration, setTourDuration] = useState(0);
  const [virtualCursor, setVirtualCursor] = useState({ x: 500, y: 300, visible: false, clicking: false });
  const tourAudioRef = useRef<HTMLAudioElement | null>(null);
  const lastTourMilestoneRef = useRef<number>(-1);
  const [educationScrollEl, setEducationScrollEl] = useState<HTMLDivElement | null>(null);
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);
  const currentCert = CERTIFICATES_DATA[activeCertIndex] || CERTIFICATES_DATA[0];

  // Auto-cycle images in each bento card independently
  useEffect(() => {
    if (activeSection !== 'achievements') return undefined;
    const intervals = ACHIEVEMENT_IMAGES.map((ach, idx) => {
      if (ach.images.length <= 1) return null;
      return setInterval(() => {
        setBentoImageIndices(prev => {
          const next = [...prev];
          next[idx] = (next[idx] + 1) % ach.images.length;
          return next;
        });
      }, 3000 + idx * 500); // stagger intervals so cards don't all flip at once
    });
    return () => intervals.forEach(i => i && clearInterval(i));
  }, [activeSection]);

  const handleNextAchievement = () => {
    setDirection(1);
    setSubImageIndex(0);
    setMobileAchievementSubIndex(0);
    setActiveAchievementIndex(prev => (prev + 1) % ACHIEVEMENT_IMAGES.length);
  };

  const handlePrevAchievement = () => {
    setDirection(-1);
    setSubImageIndex(0);
    setMobileAchievementSubIndex(0);
    setActiveAchievementIndex(prev => (prev - 1 + ACHIEVEMENT_IMAGES.length) % ACHIEVEMENT_IMAGES.length);
  };

  // Voice Tour Handlers & Synchronization
  const startTour = () => {
    setIsTourPlaying(true);
    setTourTime(0);
    setIsTourAudioPlaying(true);
    setVirtualCursor(prev => ({ ...prev, visible: true }));
    setShowTourTooltip(false);
    hasShownTooltipRef.current = true;
    localStorage.setItem("voice_tour_tooltip_completed", "true");
    
    // Stop any current audio guide
    if (tourAudioRef.current) {
      tourAudioRef.current.pause();
    }
    
    const audio = new Audio('/Voice-Tour.mp3');
    audio.currentTime = 0;
    tourAudioRef.current = audio;
    
    audio.addEventListener('timeupdate', () => {
      setTourTime(audio.currentTime);
    });
    audio.addEventListener('durationchange', () => {
      setTourDuration(audio.duration);
    });
    audio.addEventListener('ended', () => {
      exitTour();
    });
    
    // Play with a small delay so that the bottom player bar has time to slide up and appear first
    setTimeout(() => {
      if (tourAudioRef.current === audio) {
        audio.play().catch(err => {
          console.warn("Audio play failed, user gesture required:", err);
        });
      }
    }, 400);
  };

  const toggleTourPlayback = () => {
    const audio = tourAudioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play().catch(() => {});
        setIsTourAudioPlaying(true);
      } else {
        audio.pause();
        setIsTourAudioPlaying(false);
      }
    }
  };

  const exitTour = () => {
    setIsTourPlaying(false);
    setIsTourAudioPlaying(false);
    setVirtualCursor(prev => ({ ...prev, visible: false }));
    const audio = tourAudioRef.current;
    if (audio) {
      audio.pause();
      tourAudioRef.current = null;
    }
    setExpandedAchievement(-1);
    setIsResumePreviewOpen(false);
    lastTourMilestoneRef.current = -1;
  };

  const handleTourScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setTourTime(time);
    const audio = tourAudioRef.current;
    if (audio) {
      audio.currentTime = time;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 1. Sync section navigation and modal views based on Tour playback time
  useEffect(() => {
    if (!isTourPlaying) return;

    if (tourTime < 15) {
      if (activeSection !== 'home') handleNavClick('home');
    } else if (tourTime >= 15 && tourTime < 32) {
      if (activeSection !== 'about') handleNavClick('about');
    } else if (tourTime >= 32 && tourTime < 48) {
      if (activeSection !== 'education') handleNavClick('education');
      if (educationScrollEl) {
        let milestone = 0;
        let targetProgress = 0.0;
        if (tourTime < 36) {
          milestone = 0;
          targetProgress = 0.0;
        } else if (tourTime >= 36 && tourTime < 40) {
          milestone = 1;
          targetProgress = 0.37;
        } else if (tourTime >= 40 && tourTime < 44) {
          milestone = 2;
          targetProgress = 0.62;
        } else {
          milestone = 3;
          targetProgress = 1.0;
        }
        
        if (lastTourMilestoneRef.current !== milestone) {
          lastTourMilestoneRef.current = milestone;
          const targetScrollTop = targetProgress * (educationScrollEl.scrollHeight - educationScrollEl.clientHeight);
          educationScrollEl.scrollTop = targetScrollTop;
        }
      }
    } else if (tourTime >= 48 && tourTime < 82) {
      if (activeSection !== 'projects') handleNavClick('projects');
      if (tourTime < 65) {
        if (activeProjectIndex !== 0) setActiveProjectIndex(0);
      } else {
        if (activeProjectIndex !== 1) setActiveProjectIndex(1);
      }
    } else if (tourTime >= 82 && tourTime < 115) {
      if (activeSection !== 'achievements') handleNavClick('achievements');
      
      // Auto open HackGenX details modal from 88s to 98s
      if (tourTime >= 88 && tourTime < 98) {
        if (expandedAchievement !== 0) {
          setExpandedAchievement(0);
          setExpandedImgIndex(0);
        }
      } 
      // Auto open MACCS poster details modal from 102s to 112s
      else if (tourTime >= 102 && tourTime < 112) {
        if (expandedAchievement !== 2) {
          setExpandedAchievement(2);
          setExpandedImgIndex(0);
        }
      } else {
        if (expandedAchievement !== -1) setExpandedAchievement(-1);
      }
    } else {
      if (activeSection !== 'home') handleNavClick('home');
      if (expandedAchievement !== -1) setExpandedAchievement(-1);
    }
  }, [tourTime, isTourPlaying, activeSection, educationScrollEl, activeProjectIndex, expandedAchievement]);

  // 2. Animate the virtual cursor to the active target element coordinates dynamically
  useEffect(() => {
    if (!isTourPlaying) {
      if (virtualCursor.visible) {
        setVirtualCursor(prev => ({ ...prev, visible: false }));
      }
      return;
    }

    let selector = '';
    
    if (tourTime < 3) {
      selector = '.cursor-pointer span'; // Logo Wankhade
    } else if (tourTime >= 4 && tourTime < 6) {
      selector = '#nav-about-btn';
    } else if (tourTime >= 15 && tourTime < 32) {
      if (tourTime < 19) selector = '#stat-card-0';
      else if (tourTime < 22) selector = '#stat-card-1';
      else if (tourTime < 25) selector = '#stat-card-2';
      else selector = '#stat-card-3';
    } else if (tourTime >= 32 && tourTime < 48) {
      selector = '.scroll-track';
    } else if (tourTime >= 48 && tourTime < 65) {
      if (tourTime >= 54 && tourTime < 62) {
        selector = '#project-live-btn';
      } else {
        selector = '#project-title-heading';
      }
    } else if (tourTime >= 65 && tourTime < 82) {
      selector = '#project-title-heading';
    } else if (tourTime >= 82 && tourTime < 115) {
      if (tourTime < 88) {
        selector = '#bento-card-0';
      } else if (tourTime >= 88 && tourTime < 98) {
        selector = '.absolute.top-4.right-4'; // Close X in bento expanded view
      } else if (tourTime >= 98 && tourTime < 102) {
        selector = '#bento-card-2';
      } else if (tourTime >= 102 && tourTime < 112) {
        selector = '.absolute.top-4.right-4'; // Close X in bento expanded view
      } else {
        selector = '#bento-card-1';
      }
    } else {
      selector = '#resume-download-btn-floating';
    }

    if (selector) {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        setVirtualCursor(prev => ({
          ...prev,
          x: targetX,
          y: targetY,
          visible: true,
        }));
      } else {
        setVirtualCursor(prev => ({ ...prev, visible: false }));
      }
    } else {
      setVirtualCursor(prev => ({ ...prev, visible: false }));
    }
  }, [tourTime, isTourPlaying, virtualCursor.visible]);
  useEffect(() => {
    visualProgressSpring.set(visualProgress);
  }, [visualProgress, visualProgressSpring]);
  const educationImagesRef = useRef<HTMLImageElement[]>([]);
  const localProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastProgressUpdateRef = useRef(0);
  const activeEduIndexRef = useRef(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollbarHovered, setIsScrollbarHovered] = useState(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    if (!isDragging) {
        setVisualProgress(scrollProgress);
    }
    return undefined;
  }, [scrollProgress, isDragging]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Role Rotation State
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["FULL STACK DEVELOPER", "PYTHON PROGRAMMER", "UI & UX DESIGNER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (activeSection !== 'skills') return undefined;
    const skills = CERTIFICATES_DATA[activeCertIndex].associatedSkills;
    if (skills.length <= 3) return undefined;

    const timer = setInterval(() => {
      setSkillPage(prev => (prev + 1) % Math.ceil(skills.length / 3));
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSection, activeCertIndex, skillPage]);




  useEffect(() => {
    setIsVideoLoaded(false);
    setIsProjectPlaying(false);
  }, [activeProjectIndex]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleResumeDownload = async () => {
    const RESUME_PATH = '/resume.pdf';
    try {
      const res = await fetch(RESUME_PATH, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = RESUME_PATH;
        link.download = 'Vedant_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setResumeToast('unavailable');
        setTimeout(() => setResumeToast('idle'), 3000);
      }
    } catch {
      setResumeToast('unavailable');
      setTimeout(() => setResumeToast('idle'), 3000);
    }
  };

  const handleLiveSiteClick = (url: string) => {
    if (url === 'not_live') {
      alert("Currently this site is not live.");
    } else if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleGithubClick = (url: string) => {
    if (url === 'private') {
      alert("This is a private live project which is functional so we cannot give you the access to the source code. 🙂");
    } else if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleNavClick = (id: string) => {
    if (isScrolling) return;
    const currentIndex = SECTIONS.indexOf(activeSection);
    const nextIndex = SECTIONS.indexOf(id);
    if (currentIndex === nextIndex) return;
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setIsMenuOpen(false);
    setIsScrolling(true);
    setActiveSection(id);
    setTimeout(() => setIsScrolling(false), 500);
  };

  const getWrappedAchievementIndex = useCallback(
    (index: number) =>
      (index + ACHIEVEMENT_IMAGES.length) % ACHIEVEMENT_IMAGES.length,
    []
  );

  const prevAchievementIndex = getWrappedAchievementIndex(activeAchievementIndex - 1);
  const nextAchievementIndex = getWrappedAchievementIndex(activeAchievementIndex + 1);
  const farPrevAchievementIndex = getWrappedAchievementIndex(activeAchievementIndex - 2);
  const farNextAchievementIndex = getWrappedAchievementIndex(activeAchievementIndex + 2);

  const getSectionTitle = () => {
    if (activeSection === 'home') return '';
    return activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
  };

  // Scroll Handling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const currentIndex = SECTIONS.indexOf(activeSection);

      if (e.deltaY > 50) {
        // Scroll Down
        if (activeSection === 'projects' && activeProjectIndex < PROJECTS.length - 1) {
          setDirection(1);
          setIsScrolling(true);
          setActiveProjectIndex(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 600);
          return;
        }

        if (activeSection === 'skills') {
          const currentCert = CERTIFICATES_DATA[activeCertIndex];
          if (!currentCert) return;
          const maxSkillPage = Math.ceil(currentCert.associatedSkills.length / 3) - 1;
          
          if (window.innerWidth < 1024 && skillPage < maxSkillPage) {
            setDirection(1);
            setIsScrolling(true);
            setSkillPage(prev => prev + 1);
            setTimeout(() => setIsScrolling(false), 400);
            return;
          }

          if (activeCertIndex < CERTIFICATES_DATA.length - 1) {
            setDirection(1);
            setIsScrolling(true);
            setActiveCertIndex(prev => prev + 1);
            setSkillPage(0);
            setHighlightPage(0);
            setInstructorPage(0);
            setTimeout(() => setIsScrolling(false), 500);
            return;
          }
        }

        if (activeSection === 'education') {
          const edu = educationScrollEl;
          if (edu) {
            const isAtBottom = edu.scrollTop + edu.clientHeight >= edu.scrollHeight - 5;
            if (!isAtBottom) {
              return;
            }
          }
        }

        if (currentIndex < SECTIONS.length - 1) {
          setDirection(1);
          setIsScrolling(true);
          const nextSection = SECTIONS[currentIndex + 1];
          setActiveSection(nextSection);
          if (nextSection === 'projects') setActiveProjectIndex(0);
          if (nextSection === 'skills') {
            setActiveCertIndex(0);
            setSkillPage(0);
            setHighlightPage(0);
            setInstructorPage(0);
          }
          setTimeout(() => setIsScrolling(false), 300); 
         }
      } else if (e.deltaY < -50) {
        // Scroll Up
        if (activeSection === 'education') {
          const edu = educationScrollEl;
          if (edu) {
            const isAtTop = edu.scrollTop <= 5;
            if (!isAtTop) {
              return;
            }
          }
        }

        if (activeSection === 'projects' && activeProjectIndex > 0) {
          setDirection(-1);
          setIsScrolling(true);
          setActiveProjectIndex(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 300);
          return;
        }

        if (activeSection === 'skills') {
          if (window.innerWidth < 1024 && skillPage > 0) {
            setDirection(-1);
            setIsScrolling(true);
            setSkillPage(prev => prev - 1);
            setTimeout(() => setIsScrolling(false), 400);
            return;
          }

          if (activeCertIndex > 0) {
            const prevCert = CERTIFICATES_DATA[activeCertIndex - 1];
            if (!prevCert) return;
            setDirection(-1);
            setIsScrolling(true);
            setActiveCertIndex(prev => prev - 1);
            const prevCertSkills = prevCert.associatedSkills;
            setSkillPage(window.innerWidth < 1024 ? Math.ceil(prevCertSkills.length / 3) - 1 : 0);
            setHighlightPage(0);
            setInstructorPage(0);
            setTimeout(() => setIsScrolling(false), 500);
            return;
          }
        }

        if (currentIndex > 0) {
          setDirection(-1);
          setIsScrolling(true);
          const prevSection = SECTIONS[currentIndex - 1];
          setActiveSection(prevSection);
          if (prevSection === 'projects') setActiveProjectIndex(PROJECTS.length - 1);
          if (prevSection === 'skills') {
            setActiveCertIndex(CERTIFICATES_DATA.length - 1);
            setSkillPage(0);
            setHighlightPage(0);
            setInstructorPage(0);
          }
          setTimeout(() => setIsScrolling(false), 300); // Reduced delay
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      (window as any).touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = (window as any).touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 50) {
        handleWheel({ deltaY } as WheelEvent);
      }
    };
     window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSection, isScrolling, activeProjectIndex, activeCertIndex, activeEduIndex, educationScrollEl, skillPage]);


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Removed
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Removed
  };

  // Animation Variants
  const pageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      y: 0,
      scale: 0.97,
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring" as any,
        stiffness: 85,
        damping: 18,
        mass: 0.8,
        restDelta: 0.001
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: 0,
      scale: 0.97,
      transition: { 
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as any
      }
    })
  };

  const heroBgVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      y: 0,
      scale: 1.05,
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: 0,
      scale: 1.05,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  const skillsContainerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
  };
  // Animation Variants

  const textLeftVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" as any } },
    exit: { opacity: 0, x: -400, transition: { duration: 0.8, ease: "easeInOut" as any } }
  };

  const textRightVariants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" as any } },
    exit: { opacity: 0, x: 400, transition: { duration: 0.8, ease: "easeInOut" as any } }
  };

  const imageVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" as any } },
    exit: { opacity: 0, y: 400, transition: { duration: 0.8, ease: "easeInOut" as any } }
  };

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const projectSlideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      filter: isMobile ? "none" : "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: isMobile ? "none" : "blur(0px)",
      transition: {
        x: { type: "spring" as any, stiffness: 150, damping: 25 },
        opacity: { duration: 0.6, ease: "easeOut" as any },
        scale: { duration: 0.6, ease: "easeOut" as any },
        filter: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      filter: isMobile ? "none" : "blur(4px)",
      transition: {
        x: { type: "spring" as any, stiffness: 150, damping: 25 },
        opacity: { duration: 0.5, ease: "easeIn" as any },
        scale: { duration: 0.5, ease: "easeIn" as any },
        filter: { duration: 0.3 }
      }
    })
  };

  const projectStaggerVariants = {
    center: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const projectItemVariants = {
    initial: { opacity: 0, y: 30, filter: isMobile ? "none" : "blur(2px)" },
    center: { 
      opacity: 1, 
      y: 0, 
      filter: isMobile ? "none" : "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      filter: isMobile ? "none" : "blur(2px)",
      transition: { duration: 0.3 }
    }
  };
  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const skillVariants = {
    hover: { 
      scale: 1.15, 
      rotate: 5, 
      transition: { type: "spring", stiffness: 300, damping: 10 } 
    }
  };

  const calculateProgress = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(activeSection);
    const progress = currentIndex / (SECTIONS.length - 1);
    setScrollProgress(progress);
  }, [activeSection]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const updateCardsStyles = useCallback((p: number) => {
    const cardRanges = [
      { start: 0.00, end: 0.20 },
      { start: 0.30, end: 0.45 },
      { start: 0.55, end: 0.70 },
      { start: 0.80, end: 1.00 }
    ];
    
    cardRanges.forEach((range, idx) => {
      const card = cardRefs.current[idx];
      if (!card) return;
      
      const { start, end } = range;
      const fadeWidth = 0.05;
      
      let opacity = 0;
      let y = 0;
      let blur = 8;
      let scale = 0.97;
      let pointerEvents = 'none';
      
      if (idx === 0) {
        // First card: always visible at the start (no fade in)
        if (p <= end) {
          opacity = 1;
          y = 0;
          blur = 0;
          scale = 1;
          pointerEvents = 'auto';
        } else if (p > end && p <= end + fadeWidth) {
          const t = (p - end) / fadeWidth;
          opacity = 1 - t;
          y = -30 * t;
          blur = 8 * t;
          scale = 1 - 0.03 * t;
        } else {
          opacity = 0;
          y = -30;
          blur = 8;
          scale = 0.97;
        }
      } else if (idx === 3) {
        // Last card: always visible at the end (no fade out)
        if (p >= start) {
          opacity = 1;
          y = 0;
          blur = 0;
          scale = 1;
          pointerEvents = 'auto';
        } else if (p < start && p >= start - fadeWidth) {
          const t = (p - (start - fadeWidth)) / fadeWidth;
          opacity = t;
          y = 30 * (1 - t);
          blur = 8 * (1 - t);
          scale = 0.97 + 0.03 * t;
        } else {
          opacity = 0;
          y = 30;
          blur = 8;
          scale = 0.97;
        }
      } else {
        // Middle cards: fade in and fade out
        if (p < start - fadeWidth) {
          opacity = 0;
          y = 30;
          blur = 8;
          scale = 0.97;
        } else if (p >= start - fadeWidth && p < start) {
          const t = (p - (start - fadeWidth)) / fadeWidth;
          opacity = t;
          y = 30 * (1 - t);
          blur = 8 * (1 - t);
          scale = 0.97 + 0.03 * t;
        } else if (p >= start && p <= end) {
          opacity = 1;
          y = 0;
          blur = 0;
          scale = 1;
          pointerEvents = 'auto';
        } else if (p > end && p <= end + fadeWidth) {
          const t = (p - end) / fadeWidth;
          opacity = 1 - t;
          y = -30 * t;
          blur = 8 * t;
          scale = 1 - 0.03 * t;
        } else {
          opacity = 0;
          y = -30;
          blur = 8;
          scale = 0.97;
        }
      }
      
      card.style.opacity = `${opacity}`;
      card.style.transform = `translateY(${y}px) scale(${scale})`;
      card.style.filter = `blur(${blur}px)`;
      card.style.pointerEvents = pointerEvents;
    });
  }, []);

  // Preload Images
  useEffect(() => {
    const totalFrames = 80;
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameStr = String(i).padStart(3, '0');
      img.src = `/images/campus_frames/ezgif-frame-${frameStr}.png`;
      // Asynchronously decode the frame in the GPU before we draw it
      img.decode().catch(() => {});
      loadedImages.push(img);
    }
    educationImagesRef.current = loadedImages;
  }, []);

  // Reset Scroll on entry
  useEffect(() => {
    if (activeSection === 'education' && educationScrollEl) {
      const edu = educationScrollEl;
      if (direction > 0) {
        edu.scrollTop = 0;
      } else {
        edu.scrollTop = edu.scrollHeight - edu.clientHeight;
      }
      const p = edu.scrollTop / (edu.scrollHeight - edu.clientHeight || 1);
      localProgressRef.current = p;
      smoothProgressRef.current = p;
    }
  }, [activeSection, direction, educationScrollEl]);

  // GSAP ScrollTrigger Scroll Sync
  useEffect(() => {
    const scroller = educationScrollEl;
    if (!scroller || activeSection !== 'education') return;
    
    calculateProgress();
    
    const trigger = ScrollTrigger.create({
      trigger: scroller.querySelector(".scroll-track"),
      scroller: scroller,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        localProgressRef.current = p;
        
        // Throttle setScrollProgress to avoid React state reconciliation overload
        const now = Date.now();
        if (now - lastProgressUpdateRef.current > 30) {
          const sectionIndex = SECTIONS.indexOf('education');
          const nextSectionIndex = sectionIndex + 1;
          const sectionBase = sectionIndex / (SECTIONS.length - 1);
          const nextSectionBase = nextSectionIndex / (SECTIONS.length - 1);
          const currentProgress = sectionBase + (p * (nextSectionBase - sectionBase));
          setScrollProgress(currentProgress);
          lastProgressUpdateRef.current = now;
        }
        
        const eduIdx = Math.min(
          EDUCATION_TIMELINE.length - 1,
          Math.floor(p * EDUCATION_TIMELINE.length)
        );
        if (eduIdx !== activeEduIndexRef.current) {
          activeEduIndexRef.current = eduIdx;
          setActiveEduIndex(eduIdx);
        }
      }
    });
    
    const initialProgress = scroller.scrollTop / (scroller.scrollHeight - scroller.clientHeight || 1);
    localProgressRef.current = initialProgress;
    smoothProgressRef.current = initialProgress;
    
    return () => {
      trigger.kill();
    };
  }, [activeSection, calculateProgress, activeEduIndex, educationScrollEl]);

  // Card styles update loop (runs on every animation frame for smooth transition)
  useEffect(() => {
    if (activeSection !== 'education') return;
    
    let animFrame: number;
    
    const updateLoop = () => {
      const targetP = localProgressRef.current;
      smoothProgressRef.current += (targetP - smoothProgressRef.current) * 0.08;
      const p = smoothProgressRef.current;
      
      updateCardsStyles(p);
      
      animFrame = requestAnimationFrame(updateLoop);
    };
    
    animFrame = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animFrame);
  }, [activeSection, updateCardsStyles]);

  // Canvas loop
  useEffect(() => {
    const canvas = canvasEl;
    if (!canvas || activeSection !== 'education') return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const raindrops: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    const rippleCount = 20;
    const ripples: { x: number; y: number; radius: number; maxRadius: number; opacity: number; speed: number }[] = [];
    
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
      
      if (raindrops.length === 0) {
        const dropCount = 120;
        for (let i = 0; i < dropCount; i++) {
          raindrops.push({
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * canvas.clientHeight,
            speed: 12 + Math.random() * 8,
            length: 12 + Math.random() * 10,
            opacity: 0.1 + Math.random() * 0.2
          });
        }
        for (let i = 0; i < rippleCount; i++) {
          ripples.push({
            x: Math.random() * canvas.clientWidth,
            y: canvas.clientHeight - Math.random() * (canvas.clientHeight * 0.15),
            radius: Math.random() * 5,
            maxRadius: 8 + Math.random() * 10,
            opacity: 0,
            speed: 0.15 + Math.random() * 0.2
          });
        }
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    const mistParticles: { x: number; y: number; radius: number; vx: number; vy: number; opacity: number }[] = [];
    const mistCount = 4;
    for (let i = 0; i < mistCount; i++) {
      mistParticles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        radius: 180 + Math.random() * 150,
        vx: -0.15 - Math.random() * 0.15,
        vy: -0.04 + Math.random() * 0.08,
        opacity: 0.03 + Math.random() * 0.05
      });
    }
    
    const drawCoverImage = (img: HTMLImageElement, opacity: number, scale: number) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      try {
        ctx.save();
        ctx.globalAlpha = opacity;
        
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;
        
        let drawWidth, drawHeight;
        if (imgRatio > canvasRatio) {
          drawHeight = height;
          drawWidth = height * imgRatio;
        } else {
          drawWidth = width;
          drawHeight = width / imgRatio;
        }
        
        drawWidth *= scale;
        drawHeight *= scale;
        
        const x = (width - drawWidth) / 2;
        const y = (height - drawHeight) / 2;
        
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      } catch (err) {
        console.error("Error drawing cover image", err);
      } finally {
        ctx.restore();
      }
    };
    
    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      
      const p = smoothProgressRef.current;
      
      const images = educationImagesRef.current;
      
      if (images.length === 80) {
        const frameIndex = Math.min(79, Math.floor(p * 79));
        let drawImg: HTMLImageElement | null = null;
        
        if (images[frameIndex] && images[frameIndex].complete && images[frameIndex].naturalWidth > 0) {
          drawImg = images[frameIndex];
        } else {
          for (let i = frameIndex - 1; i >= 0; i--) {
            if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
              drawImg = images[i];
              break;
            }
          }
          if (!drawImg) {
            for (let i = frameIndex + 1; i < 80; i++) {
              if (images[i] && images[i].complete) {
                drawImg = images[i];
                break;
              }
            }
          }
        }
        
        if (drawImg) {
          drawCoverImage(drawImg, 1.0, 1.0);
        }
      }
      
      ctx.save();
      ripples.forEach(ripple => {
        if (ripple.opacity <= 0) {
          ripple.x = Math.random() * width;
          ripple.y = height - Math.random() * (height * 0.18);
          ripple.radius = 1;
          ripple.maxRadius = 6 + Math.random() * 8;
          ripple.opacity = 0.15 + Math.random() * 0.25;
          ripple.speed = 0.1 + Math.random() * 0.15;
        } else {
          ripple.radius += ripple.speed;
          ripple.opacity -= 0.005;
          
          if (ripple.opacity > 0) {
            ctx.strokeStyle = `rgba(180, 200, 220, ${ripple.opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.ellipse(ripple.x, ripple.y, ripple.radius, ripple.radius * 0.2, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      });
      ctx.restore();
      
      ctx.save();
      ctx.lineWidth = 1.0;
      raindrops.forEach(drop => {
        drop.y += drop.speed;
        drop.x -= drop.speed * 0.04;
        
        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
          drop.speed = 12 + Math.random() * 8;
          drop.length = 12 + Math.random() * 10;
          drop.opacity = 0.1 + Math.random() * 0.2;
        }
        
        ctx.strokeStyle = `rgba(160, 185, 210, ${drop.opacity})`;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.speed * 0.04, drop.y + drop.length);
        ctx.stroke();
      });
      ctx.restore();
      
      mistParticles.forEach(mist => {
        mist.x += mist.vx;
        mist.y += mist.vy;
        
        if (mist.x < -mist.radius) {
          mist.x = width + mist.radius;
        }
        if (mist.y < -mist.radius) {
          mist.y = height + mist.radius;
        } else if (mist.y > height + mist.radius) {
          mist.y = -mist.radius;
        }
        
        const grad = ctx.createRadialGradient(mist.x, mist.y, 0, mist.x, mist.y, mist.radius);
        grad.addColorStop(0, `rgba(195, 210, 225, ${mist.opacity})`);
        grad.addColorStop(0.5, `rgba(195, 210, 225, ${mist.opacity * 0.4})`);
        grad.addColorStop(1, 'rgba(195, 210, 225, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mist.x, mist.y, mist.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      const vign = ctx.createRadialGradient(width/2, height/2, Math.min(width, height) * 0.25, width/2, height/2, Math.max(width, height) * 0.75);
      vign.addColorStop(0, 'rgba(6, 10, 16, 0)');
      vign.addColorStop(0.6, 'rgba(4, 7, 12, 0.45)');
      vign.addColorStop(1, 'rgba(2, 4, 8, 0.92)');
      
      ctx.fillStyle = vign;
      ctx.fillRect(0, 0, width, height);
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSection, canvasEl]);

  const handleScrollbarAction = useCallback((clientY: number) => {
    if (!scrollbarRef.current) return;
    const rect = scrollbarRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    
    setVisualProgress(pos);

    const targetIndex = Math.round(pos * (SECTIONS.length - 1));
    const section = SECTIONS[targetIndex];
    
    if (targetIndex > SECTIONS.indexOf(activeSection)) {
      setDirection(1);
    } else if (targetIndex < SECTIONS.indexOf(activeSection)) {
      setDirection(-1);
    }
    
    if (section !== activeSection) {
      setActiveSection(section);
    }
    
    if (section === 'education' && educationScrollEl) {
      const sectionIndex = SECTIONS.indexOf('education');
      const base = sectionIndex / (SECTIONS.length - 1);
      const nextBase = (sectionIndex + 1) / (SECTIONS.length - 1);
      const internalProgress = Math.max(0, Math.min(1, (pos - base) / (nextBase - base)));
      
      const edu = educationScrollEl;
      edu.scrollTop = internalProgress * (edu.scrollHeight - edu.clientHeight);
    }
  }, [activeSection, educationScrollEl]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleScrollbarAction(e.clientY);
      }
    };
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [handleScrollbarAction]);


  return (
    <div className={`h-screen w-screen overflow-hidden transition-colors duration-300 theme-container ${isDark ? 'dark text-[#FFEDD8]' : 'text-[#3D2817]'} ${isDragging ? 'select-none' : ''}`}>
      <style>{`
        /* ── Fonts ───────────────────────────────────────────────────── */
        * { box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; overscroll-behavior-y: none; }
        .font-display, h3, h4 { font-family: 'Poppins', sans-serif; }

        /* Dynamic Theme Variables */
        :root {
          --portfolio-light-1: #FFFFFF;
          --portfolio-light-2: #FFF5EC;
          --portfolio-light-3: #FFE8D6;
          --portfolio-light-4: #FFB380;
          --portfolio-dark-1: #FF8C42;
          --portfolio-dark-2: #F56E0F;
          --portfolio-dark-3: #E65100;
          --portfolio-dark-4: #CC4400;
          --portfolio-dark-5: #993300;
          --portfolio-dark-6: #4D1A00;
        }

        .theme-container {
          background-color: ${isDark ? '#0F0800' : '#FFFFFF'};
        }

        /* Mesh hero base */
        .hero-mesh-light { background: radial-gradient(ellipse at 30% 60%, #FFFFFF 0%, #FFF0E0 45%, #FFD1B3 100%); }
        .hero-mesh-dark  { background: radial-gradient(ellipse at 30% 60%, #1A0D00 0%, #0D0600 55%, #050200 100%); }

        /* Blob animations */
        @keyframes blob1 { 
          0%, 100% { transform: translate(0, 0) scale(1); } 
          25% { transform: translate(200px, -250px) scale(1.1); } 
          50% { transform: translate(-150px, 200px) scale(0.9); } 
          75% { transform: translate(300px, 100px) scale(1.05); } 
        }
        @keyframes blob2 { 
          0%, 100% { transform: translate(0, 0) scale(1); } 
          33% { transform: translate(-300px, -200px) scale(1.2); } 
          66% { transform: translate(200px, 300px) scale(0.8); } 
        }
        @keyframes blob3 { 
          0%, 100% { transform: translate(0, 0) scale(1); } 
          20% { transform: translate(250px, 150px) scale(1.1); } 
          40% { transform: translate(-200px, 250px) scale(0.95); } 
          60% { transform: translate(150px, -300px) scale(1.15); } 
          80% { transform: translate(-250px, -100px) scale(0.9); } 
        }
        
        .blob { position: absolute; border-radius: 50%; filter: blur(90px); will-change: transform; transition: background-color 0.5s ease; }
        @media (max-width: 1024px) {
          .blob { filter: blur(40px); }
        }
        .blob-1 { animation: blob1 25s ease-in-out infinite; }
        .blob-2 { animation: blob2 32s ease-in-out infinite; }
        .blob-3 { animation: blob3 22s ease-in-out infinite; }
        
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .card-hover:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px rgba(45, 20, 0, 0.15); 
          border-color: ${isDark ? '#FF8C42' : '#F56E0F'};
        }
        
        .glass-nav {
          background: transparent;
          backdrop-filter: none;
          border-bottom: none;
        }

        .btn-primary {
          background-color: ${isDark ? '#D4A276' : '#8B5A3C'};
          color: ${isDark ? '#3D2817' : '#FFEDD8'};
          border: none;
        }
        .btn-primary:hover {
          background-color: ${isDark ? '#E7BC91' : '#6F4830'};
          transform: scale(1.02);
        }
        .btn-outline {
          border-color: ${isDark ? '#A47148' : '#A47148'};
          color: ${isDark ? '#F3D5B5' : '#5C3A24'};
        }
        .btn-outline:hover {
          background-color: ${isDark ? 'rgba(164, 113, 72, 0.1)' : 'rgba(164, 113, 72, 0.1)'};
          transform: scale(1.02);
        }

        .skill-badge {
          background: ${isDark ? 'rgba(164, 113, 72, 0.15)' : 'rgba(212, 162, 118, 0.15)'};
          color: ${isDark ? '#F3D5B5' : '#6F4830'};
          border: 1px solid ${isDark ? 'rgba(164, 113, 72, 0.3)' : 'rgba(212, 162, 118, 0.3)'};
        }
        .skill-badge:hover {
          background: ${isDark ? 'rgba(164, 113, 72, 0.25)' : 'rgba(212, 162, 118, 0.25)'};
          transform: translateY(-2px);
        }

        .custom-input {
          background: ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
          border: 1px solid ${isDark ? 'rgba(164, 113, 72, 0.3)' : 'rgba(164, 113, 72, 0.2)'};
          color: ${isDark ? '#FFEDD8' : '#3D2817'};
        }
        .custom-input:focus {
          border-color: ${isDark ? '#D4A276' : '#8B5A3C'};
          box-shadow: 0 0 0 1px ${isDark ? '#D4A276' : '#8B5A3C'};
        }

        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-mesh {
          background-size: 200% 200%;
          animation: gradient-rotate 10s ease infinite;
        }

      `}</style>

      {/* Main Container Frame */}
      <div className="p-[10px] h-full w-full">
        <div className={`relative h-full w-full overflow-hidden rounded-3xl ${isDark ? 'bg-[#0F0800]' : 'bg-[#FFF5EC]'} flex flex-col`}>
          
          {/* Global Viewport Background Image with Scroll Transition */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden rounded-3xl"
            initial={{ opacity: 0, scale: 1.15, y: 0 }}
            animate={{
              opacity: activeSection === 'home' ? 1 : 0,
              scale: activeSection === 'home' ? 1 : 1.08,
              y: activeSection === 'home' ? 0 : (direction > 0 ? -80 : 80),
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: isDark 
                  ? 'linear-gradient(rgba(15, 8, 0, 0.72), rgba(15, 8, 0, 0.72)), url("/images/hero-bg.png")' 
                  : 'linear-gradient(rgba(255, 245, 236, 0.38), rgba(255, 245, 236, 0.38)), url("/images/hero-bg.png")',
              }}
            />
          </motion.div>

            <motion.nav 
              className={`absolute top-0 left-0 right-0 z-[60] transition-all duration-500 ${showTourTooltip ? 'opacity-25 blur-[1px] pointer-events-none' : 'opacity-100'} ${activeSection === 'achievements' && !isMenuOpen ? 'lg:hidden' : ''}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-full px-4 md:px-16 h-18 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 md:gap-4 cursor-pointer" onClick={() => handleNavClick('home')}>
                  {/* Desktop: Full Name */}
                  <span className="hidden md:block text-xl font-black whitespace-nowrap"
                    style={{color: activeSection === 'education' ? '#FFFFFF' : (isDark ? '#FFEDD8' : '#3D2817'), fontFamily: "'Poppins', sans-serif"}}>
                    Vedant Wankhade
                  </span>
                  {/* Mobile: Short Name */}
                  <span className="md:hidden text-xl font-black whitespace-nowrap"
                    style={{color: activeSection === 'education' ? '#FFFFFF' : (isDark ? '#FFEDD8' : '#3D2817'), fontFamily: "'Poppins', sans-serif"}}>
                    Vedant Wankhade
                  </span>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex items-center gap-10">
                  {['Home', 'About', 'Education', 'Skills & certifications', 'Projects', 'Achievements'].map((item) => {
                    const id = item === 'Skills & certifications' ? 'skills' : item.toLowerCase();
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={item}
                        id={`nav-${id}-btn`}
                        onClick={() => handleNavClick(id)}
                        className={`text-[12px] font-bold transition-all relative group whitespace-nowrap
                          ${isActive 
                            ? (activeSection === 'education' ? 'text-white' : (isDark ? 'text-white' : 'text-[#3D2817]')) 
                            : (activeSection === 'education' ? 'text-white/60 hover:text-white' : (isDark ? 'text-white/50 hover:text-white' : 'text-[#3D2817]/50 hover:text-[#3D2817]'))}`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item}
                        {isActive && (
                          <motion.div 
                            layoutId="navline" 
                            className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-orange-500 rounded-full" 
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-5 md:gap-8">
                  <div className="hidden md:flex items-center gap-4">
                    <button
                      onClick={toggleTheme}
                      className={`p-2.5 rounded-full transition-all hover:scale-110 active:scale-90 ${activeSection === 'education' ? 'text-white hover:text-white/80' : (isDark ? 'text-[#F3D5B5]' : 'text-[#3D2817]')}`}
                    >
                      {activeSection === 'education' ? <Sun size={20} /> : (isDark ? <Sun size={20} /> : <Moon size={20} />)}
                    </button>
                    <motion.button
                       onClick={() => setIsResumePreviewOpen(true)}
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center gap-2 px-6 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                      style={{
                        background: activeSection === 'education'
                          ? 'linear-gradient(135deg, #FF8C42, #F56E0F)'
                          : (isDark
                            ? 'linear-gradient(135deg, #FF8C42, #F56E0F)'
                            : 'linear-gradient(135deg, #8B5A3C, #5C3A24)'),
                        color: activeSection === 'education' ? '#FFFFFF' : (isDark ? '#FFFFFF' : '#FFEDD8'),
                        boxShadow: activeSection === 'education'
                          ? '0 4px 10px rgba(0, 0, 0, 0.15)'
                          : (isDark
                            ? '0 4px 10px rgba(0, 0, 0, 0.15)'
                            : '0 4px 10px rgba(0, 0, 0, 0.12)'),
                        border: activeSection === 'education'
                          ? '1px solid rgba(255, 255, 255, 0.2)'
                          : (isDark ? '1px solid rgba(255, 140, 66, 0.3)' : '1px solid rgba(139, 90, 60, 0.2)'),
                        fontFamily: "'Poppins', sans-serif"
                      }}
                    >
                      <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
                      <span>Resume</span>
                    </motion.button>
                  </div>

                  <div className="lg:hidden flex items-center gap-1">
                    <button onClick={toggleTheme} className="p-1">
                      {activeSection === 'education' ? <Sun size={22} className="text-white" /> : (isDark ? <Sun size={22} className="text-[#F3D5B5]" /> : <Moon size={22} className="text-[#3D2817]" />)}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
                      {isMenuOpen 
                        ? <X size={28} className={activeSection === 'education' ? 'text-white' : (isDark ? 'text-[#FFEDD8]' : 'text-[#3D2817]')} /> 
                        : <Menu size={28} className={activeSection === 'education' ? 'text-white' : (isDark ? 'text-[#FFEDD8]' : 'text-[#3D2817]')} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile menu handled in main content area */}
            </motion.nav>

            {/* Background Blobs and Overlays Removed to let the global background image show clearly */}

            {/* Dynamic Content Area */}
            <main className={`relative z-10 flex-grow overflow-hidden flex flex-col justify-center ${(activeSection === 'achievements' || activeSection === 'education') && !isMenuOpen ? 'pt-0' : 'pt-20'}`}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="mobile-menu-overlay"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-start py-20 gap-8 px-6 h-full w-full"
                  >
                    {['Home', 'About', 'Education', 'Skills & certifications', 'Projects', 'Achievements'].map((item, idx) => {
                      const id = item === 'Skills & certifications' ? 'skills' : item.toLowerCase();
                      const isActive = activeSection === id;
                      return (
                        <motion.button
                          key={item}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: idx * 0.08, 
                            type: "spring",
                            stiffness: 120,
                            damping: 14
                          }}
                          onClick={() => handleNavClick(id)}
                          className={`text-xl font-bold whitespace-nowrap transition-all
                            ${isActive 
                              ? 'text-orange-500 scale-110' 
                              : (isDark ? 'text-white/80 hover:text-white' : 'text-[#3D2817]/80 hover:text-[#3D2817]')}`}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="section-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full flex flex-col overflow-hidden"
                  >
                    <AnimatePresence mode="wait" custom={direction}>
                {activeSection === 'home' && (
                  <motion.div 
                    key="home"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full flex flex-col justify-center md:justify-center relative"
                  >


                    {/* Background Text - Positioned at the top just below the header */}
                    <div className="absolute top-[44px] md:top-14 left-0 right-0 pointer-events-none select-none z-10 flex flex-col items-center justify-start">
                      {/* Decorative Metadata Row above background text */}
                      <div className="hidden md:flex w-full max-w-[70vw] justify-between items-end mb-1 select-none opacity-30">
                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: isDark ? '#FFFFFF' : '#000000', fontFamily: "'Poppins', sans-serif" }}>
                          CREATIVE DEVELOPER
                        </span>
                        <div className="text-right flex flex-col leading-none">
                          <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: isDark ? '#FFFFFF' : '#000000', fontFamily: "'Poppins', sans-serif" }}>
                            2026
                          </span>
                          <span className="text-[8px] font-semibold tracking-[0.2em] uppercase opacity-80 mt-1" style={{ color: isDark ? '#FFFFFF' : '#000000', fontFamily: "'Poppins', sans-serif" }}>
                            VISUAL IDENTITY
                          </span>
                        </div>
                      </div>
                      {/* Two-line layout centered horizontally */}
                      <div className="flex flex-col items-center justify-center w-full leading-[0.95] select-none px-4 md:px-8">
                        {/* Line 1: Full Stack Developer (slides from left) */}
                        <motion.h1 
                            variants={textLeftVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-[clamp(1.4rem,6.2vw,2.2rem)] md:text-[clamp(5.5rem,8.2vw,11.5rem)] font-black tracking-tighter m-0 p-0 text-center whitespace-nowrap"
                            style={{
                                    color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(61, 40, 23, 0.60)',
                                    fontFamily: "'Poppins', sans-serif"}}>
                          Full Stack Developer
                        </motion.h1>

                        {/* Line 2: & UI UX Designer (slides from right) */}
                        <motion.h1 
                            variants={textRightVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-[clamp(1.4rem,6.2vw,2.2rem)] md:text-[clamp(5.5rem,8.2vw,11.5rem)] max-md:font-bold md:font-black tracking-tighter m-0 p-0 text-center whitespace-nowrap mt-2 md:mt-3"
                            style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    WebkitTextStroke: isMobile
                                      ? (isDark ? '1px rgba(255, 255, 255, 0.68)' : '1px rgba(61, 40, 23, 0.60)')
                                      : (isDark ? '2.5px rgba(255, 255, 255, 0.68)' : '2px rgba(61, 40, 23, 0.60)'),
                                    color: 'transparent'}}>
                          & UI UX Designer
                        </motion.h1>
                      </div>
                    </div>
                    <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 h-full items-center md:items-end pb-0">
                      {/* Backdrop overlay for voice tour tooltip highlight */}
                      <AnimatePresence>
                        {showTourTooltip && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="fixed inset-0 bg-black/65 backdrop-blur-[2px] z-[40] pointer-events-auto"
                            onClick={dismissTooltip}
                          />
                        )}
                      </AnimatePresence>
                      {/* Left: Spacer to keep layout balanced & centered */}
                      {!isTourPlaying ? (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          className="hidden md:flex md:col-span-3 order-1 md:order-1 flex-col items-start justify-end pb-14 pl-8 translate-x-[-8px] z-[50] relative"
                        >
                          <div className="relative w-fit">
                            <AnimatePresence>
                              {showTourTooltip && (
                                <motion.div
                                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className="absolute bottom-full left-[32px] mb-3.5 w-[320px] p-4 border bg-white border-zinc-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] text-[#3D2817] pointer-events-auto z-50 flex flex-col gap-3"
                                  style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    borderRadius: '8px'
                                  }}
                                >
                                  {/* Arrow pointing to the play button */}
                                  <div className="absolute top-full left-[12px] w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.06)]" />
                                  
                                  <p className="text-[13px] font-medium leading-relaxed">
                                    Listen to my portfolio by taking a automated voice tour
                                  </p>
                                  <div className="flex gap-2.5 items-center">
                                    <button
                                      onClick={() => {
                                        startTour();
                                      }}
                                      className="text-[11px] font-bold text-white bg-[#3D2817] hover:bg-[#5C3A24] transition-all px-3.5 py-2 rounded-md flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer"
                                    >
                                      <Play size={10} fill="currentColor" className="translate-x-px" /> Let's Go
                                    </button>
                                    <button
                                      onClick={() => {
                                        dismissTooltip();
                                      }}
                                      className="text-[11px] font-semibold text-zinc-600 hover:text-[#3D2817] transition-colors px-2 py-2 cursor-pointer"
                                    >
                                      Dismiss ({tooltipTimeLeft}s)
                                    </button>
                                  </div>
                                  
                                  {/* Auto-dismiss progress bar */}
                                  <div 
                                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-100 overflow-hidden pointer-events-none"
                                    style={{
                                      borderBottomLeftRadius: '7px',
                                      borderBottomRightRadius: '7px'
                                    }}
                                  >
                                    <motion.div
                                      animate={{ width: `${(tooltipTimeLeft / 8) * 100}%` }}
                                      transition={{ duration: 1.0, ease: "linear" }}
                                      className="h-full bg-orange-500"
                                    />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <motion.button
                              onClick={startTour}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2.5 pl-2 pr-5 py-2 w-fit rounded-full border shadow-lg transition-all duration-300 pointer-events-auto backdrop-blur-md"
                              style={{
                                background: isDark ? 'rgba(15, 8, 0, 0.75)' : 'rgba(255, 245, 236, 0.75)',
                                borderColor: isDark ? 'rgba(255, 140, 66, 0.3)' : 'rgba(139, 90, 60, 0.3)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                fontFamily: "'Poppins', sans-serif"
                              }}
                            >
                              <div className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-md shrink-0 ${isDark ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}>
                                <Play size={11} fill="currentColor" className="translate-x-0.5" />
                              </div>
                              <span className={`text-[13px] font-black tracking-wide ${isDark ? 'text-white' : 'text-[#3D2817]'}`}>
                                Voice Tour
                              </span>
                            </motion.button>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="hidden md:block md:col-span-3 order-1 md:order-1"></div>
                      )}

                      <div className="max-md:absolute max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[calc(100vw-20px)] max-md:h-[75vh] max-md:z-10 md:col-span-6 flex items-end justify-center h-full relative order-3 md:order-2">
                        <div className="relative w-full max-md:h-full max-md:w-full h-[65vh] md:h-[85vh] flex items-end justify-center overflow-visible">
                            <motion.img 
                              variants={imageVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              src="/images/vedant-profile.png" 
                              alt="Vedant Wankhade - Full Stack Developer & AI Enthusiast Profile Picture" 
                              className="h-full w-auto object-contain drop-shadow-2xl mx-auto"
                              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                            />
                            
                         </div>
                      </div>

                      {/* Mobile Voice Tour Trigger (placed here to escape z-index stacking context on mobile) */}
                      {!isTourPlaying && (
                        <div className="md:hidden absolute bottom-6 left-6 z-[50] w-fit h-fit">
                          <AnimatePresence>
                            {showTourTooltip && (
                              <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute bottom-full left-[28px] mb-3 w-[280px] p-3.5 border bg-white border-zinc-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] text-[#3D2817] pointer-events-auto z-50 flex flex-col gap-3"
                                style={{
                                  fontFamily: "'Poppins', sans-serif",
                                  borderRadius: '8px'
                                }}
                              >
                                {/* Arrow pointing down to the mobile play button */}
                                <div className="absolute top-full left-[12px] w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.06)]" />
                                
                                <p className="text-[12px] font-medium leading-relaxed">
                                  Listen to my portfolio by taking a automated voice tour
                                </p>
                                <div className="flex gap-2.5 items-center">
                                  <button
                                    onClick={() => {
                                      startTour();
                                    }}
                                    className="text-[10px] font-bold text-white bg-[#3D2817] hover:bg-[#5C3A24] transition-all px-3 py-1.5 rounded-md flex items-center gap-1 shadow-sm shrink-0 cursor-pointer"
                                  >
                                    <Play size={8} fill="currentColor" className="translate-x-px" /> Let's Go
                                  </button>
                                  <button
                                    onClick={() => {
                                      dismissTooltip();
                                    }}
                                    className="text-[10px] font-semibold text-zinc-600 hover:text-[#3D2817] transition-colors px-2 py-1.5 cursor-pointer"
                                  >
                                    Dismiss ({tooltipTimeLeft}s)
                                  </button>
                                </div>
                                
                                {/* Auto-dismiss progress bar */}
                                <div 
                                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-100 overflow-hidden pointer-events-none"
                                  style={{
                                    borderBottomLeftRadius: '7px',
                                    borderBottomRightRadius: '7px'
                                  }}
                                >
                                  <motion.div
                                    animate={{ width: `${(tooltipTimeLeft / 8) * 100}%` }}
                                    transition={{ duration: 1.0, ease: "linear" }}
                                    className="h-full bg-orange-500"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <motion.button
                            onClick={startTour}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2.5 pl-2 pr-5 py-2 rounded-full border shadow-lg w-fit pointer-events-auto backdrop-blur-md"
                            style={{
                              background: isDark ? 'rgba(15, 8, 0, 0.75)' : 'rgba(255, 245, 236, 0.75)',
                              borderColor: isDark ? 'rgba(255, 140, 66, 0.3)' : 'rgba(139, 90, 60, 0.3)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                              fontFamily: "'Poppins', sans-serif"
                            }}
                          >
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-md shrink-0 ${isDark ? 'bg-orange-500 text-white' : 'bg-orange-600 text-white'}`}>
                              <Play size={11} fill="currentColor" className="translate-x-0.5" />
                            </div>
                            <span className={`text-[13px] font-black tracking-wide ${isDark ? 'text-white' : 'text-[#3D2817]'}`}>Voice Tour</span>
                          </motion.button>
                        </div>
                      )}


                      {/* Right: Social Icons */}
                      <motion.div 
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="max-md:absolute max-md:top-[6px] max-md:bottom-auto max-md:left-1/2 max-md:-translate-x-1/2 max-md:pb-0 max-md:z-[20] md:col-span-3 flex flex-col items-center justify-center md:justify-end h-auto md:h-full order-2 md:order-3 pb-8 md:pb-14 md:translate-x-8">
                        <div className="flex items-center gap-6 md:gap-7">
                          {[
                            { name: 'Linkedin', icon: <Linkedin className="w-5 h-5 md:w-[26px] md:h-[26px]" />, url: "https://www.linkedin.com/in/vedant-wankhade123" },
                            { name: 'Github', icon: <Github className="w-5 h-5 md:w-[26px] md:h-[26px]" />, url: "https://github.com/vedant-wankhade123" },
                            { name: 'Email', icon: <Mail className="w-5 h-5 md:w-[26px] md:h-[26px]" />, url: "mailto:vedantwankhade47@gmail.com" }
                          ].map((social) => (
                             <motion.a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.15, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              title={social.name}
                              aria-label={`Visit Vedant's ${social.name}`}
                              className={`transition-colors duration-300 ${isDark ? 'text-[#F3D5B5] hover:text-[#FFEDD8]' : 'text-[#0F0800] hover:text-[#3D2817]'}`}
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'about' && (
                  <motion.div 
                    key="about"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full flex items-center max-md:items-start justify-center p-4 md:p-8 max-md:pt-0 overflow-y-auto lg:overflow-hidden relative"
                  >
                    <div
                      className="max-w-6xl w-full mx-auto relative z-10 px-4 py-8 md:py-12 max-md:py-0 max-md:px-2"
                      style={{ color: isDark ? '#FFEDD8' : '#3D2817' }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-md:gap-4">
                        {/* Left Column: Quick Info & Stats */}
                        <motion.div 
                          variants={contentVariants}
                          className="lg:col-span-5 flex flex-col space-y-6 max-md:space-y-3"
                        >
                          {/* Profile Header Card */}
                          <motion.div 
                            whileHover={{ y: -4, scale: 1.015 }}
                            className={`p-6 max-md:p-4 rounded-2xl max-md:rounded-xl border backdrop-blur-md transition-all duration-500 cursor-default
                              ${isDark 
                                ? 'bg-[#1e140d]/40 border-orange-500/20 hover:border-orange-500/35 shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.55)]' 
                                : 'bg-white/60 border-orange-200/80 hover:border-orange-300 shadow-[0_12px_32px_rgba(61,40,23,0.06)] hover:shadow-[0_18px_40px_rgba(61,40,23,0.12)]'
                              }`}
                          >
                            <div className="flex flex-col justify-center max-md:items-center max-md:text-center">
                              <h3 className="text-2xl font-bold tracking-tight animate-fade-in" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Vedant Wankhade
                              </h3>
                              <p className={`text-sm mt-1 ${isDark ? 'text-white/60' : 'text-[#3D2817]/60'}`}>
                                <span className="hidden md:inline">Bachelor's In Computer Science and Engineering</span>
                                <span className="md:hidden">B.Tech CSE</span>
                              </p>
                              <p className="text-xs font-semibold text-[#FF8C42] mt-1.5 tracking-wider">G.H. Raisoni University</p>
                            </div>
                          </motion.div>

                          {/* Quick Stats Grid */}
                          <div className="grid grid-cols-2 gap-4 max-md:gap-2.5">
                            {[
                              { label: 'Avg sem gpa', value: '8.82', desc: 'Average Score', icon: <GraduationCap className="w-5 h-5 text-[#FF8C42]" /> },
                              { label: 'Projects built', value: '10+', desc: 'Full-stack & AI', icon: <Terminal className="w-5 h-5 text-[#FF8C42]" /> },
                              { label: 'Hackathons', value: '5+', desc: 'State & National', icon: <Trophy className="w-5 h-5 text-[#FF8C42]" /> },
                              { label: 'Core focus', value: 'AI & UI/UX', desc: 'Apps & Design', icon: <Cpu className="w-5 h-5 text-[#FF8C42]" /> },
                            ].map((stat, i) => (
                              <motion.div
                                key={stat.label}
                                id={`stat-card-${i}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`p-4 max-md:p-3 rounded-[15px] border backdrop-blur-sm transition-all duration-500 flex flex-col justify-between group
                                  ${isDark 
                                    ? 'bg-[#1a100a]/30 border-orange-500/10 hover:border-orange-500/35 hover:bg-[#25180f]/40 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(255,140,66,0.08),_0_8px_25px_rgba(0,0,0,0.4)]' 
                                    : 'bg-white/40 border-orange-100 hover:border-orange-200 hover:bg-orange-50/50 shadow-[0_8px_20px_rgba(61,40,23,0.04)] hover:shadow-[0_15px_30px_rgba(61,40,23,0.09)]'
                                  }`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className={`text-[10px] font-semibold normal-case tracking-wider ${isDark ? 'text-white/40' : 'text-[#3D2817]/40'}`}>{stat.label}</span>
                                  <div className="p-1.5 max-md:p-1 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                                    {stat.icon}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xl md:text-2xl font-bold tracking-tight">{stat.value}</div>
                                  <div className={`text-[10px] mt-0.5 hidden md:block ${isDark ? 'text-white/55' : 'text-[#3D2817]/55'}`}>{stat.desc}</div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Right Column: Narrative & Pillars */}
                        <motion.div 
                          variants={contentVariants}
                          className="lg:col-span-7 flex flex-col space-y-6 max-md:space-y-4 text-left max-md:text-center max-md:items-center"
                        >
                          <div className="space-y-4">
                            <div className={`text-sm md:text-base leading-relaxed space-y-4 ${isDark ? 'text-white/95' : 'text-[#3D2817]/95'}`}>
                               {/* Desktop view: original paragraphs */}
                               <div className="hidden md:block space-y-4">
                                 <p>
                                   Computer Science & Engineering student with a growing foundation in Python, Data Science, and Machine Learning. I am actively learning and building AI-powered applications, intelligent systems, and full-stack projects to solve real-world problems.
                                 </p>
                                 <p>
                                   From standalone solutions to integrated platforms, I focus on improving my skills through practical development. Continuously exploring core technologies, I aim to build scalable AI-driven products and evolve into a proficient developer.
                                 </p>
                               </div>
                               {/* Mobile view: summarized single paragraph */}
                               <div className="block md:hidden text-center text-sm leading-relaxed">
                                 <p>
                                   Computer Science & Engineering student actively building AI-powered systems and full-stack web applications. I focus on developing practical, scalable solutions while continuously exploring new technologies to grow as a proficient developer.
                                 </p>
                               </div>
                             </div>
                          </div>

                          {/* Focus Areas: MERN Stack Hexagonal Logos */}
                          <div className="space-y-3 w-full">
                            <h5 className={`text-xs font-bold uppercase tracking-[0.2em] max-md:text-center hidden md:block ${isDark ? 'text-white/40' : 'text-[#3D2817]/40'}`}>Areas of Expertise</h5>
                            <div className="flex gap-3 py-1 max-md:justify-center">
                              {/* MongoDB */}
                              <motion.div 
                                whileHover={{ scale: 1.15, zIndex: 10, y: -2 }}
                                className="relative w-12 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                                title="MongoDB"
                              >
                                <svg
                                  viewBox="0 0 100 116"
                                  className="absolute inset-0 w-full h-full transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(77,179,61,0.5)]"
                                >
                                  <polygon
                                    points="50 4, 96 30, 96 86, 50 112, 4 86, 4 30"
                                    fill={isDark ? 'rgba(77, 179, 61, 0.15)' : 'rgba(77, 179, 61, 0.08)'}
                                    stroke="#4DB33D"
                                    strokeWidth="6"
                                    className="transition-colors duration-300"
                                  />
                                </svg>
                                <div className="relative z-10 flex items-center justify-center">
                                  <i className="devicon-mongodb-plain text-[22px] text-[#4DB33D]"></i>
                                </div>
                              </motion.div>

                              {/* Express */}
                              <motion.div 
                                whileHover={{ scale: 1.15, zIndex: 10, y: -2 }}
                                className="relative w-12 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                                title="Express.js"
                              >
                                <svg
                                  viewBox="0 0 100 116"
                                  className="absolute inset-0 w-full h-full transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(224,108,98,0.5)]"
                                >
                                  <polygon
                                    points="50 4, 96 30, 96 86, 50 112, 4 86, 4 30"
                                    fill={isDark ? 'rgba(224, 108, 98, 0.15)' : 'rgba(224, 108, 98, 0.08)'}
                                    stroke="#E06C62"
                                    strokeWidth="6"
                                    className="transition-colors duration-300"
                                  />
                                </svg>
                                <div className="relative z-10 flex items-center justify-center">
                                  <span className="text-[15px] font-black tracking-tight select-none" style={{ color: '#E06C62', fontFamily: "'Poppins', sans-serif" }}>ex</span>
                                </div>
                              </motion.div>

                              {/* React */}
                              <motion.div 
                                whileHover={{ scale: 1.15, zIndex: 10, y: -2 }}
                                className="relative w-12 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                                title="React.js"
                              >
                                <svg
                                  viewBox="0 0 100 116"
                                  className="absolute inset-0 w-full h-full transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.5)]"
                                >
                                  <polygon
                                    points="50 4, 96 30, 96 86, 50 112, 4 86, 4 30"
                                    fill={isDark ? 'rgba(97, 218, 251, 0.15)' : 'rgba(97, 218, 251, 0.08)'}
                                    stroke="#61DAFB"
                                    strokeWidth="6"
                                    className="transition-colors duration-300"
                                  />
                                </svg>
                                <div className="relative z-10 flex items-center justify-center">
                                  <i className="devicon-react-original text-[22px] text-[#61DAFB]"></i>
                                </div>
                              </motion.div>

                              {/* Node.js */}
                              <motion.div 
                                whileHover={{ scale: 1.15, zIndex: 10, y: -2 }}
                                className="relative w-12 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                                title="Node.js"
                              >
                                <svg
                                  viewBox="0 0 100 116"
                                  className="absolute inset-0 w-full h-full transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(131,205,41,0.5)]"
                                >
                                  <polygon
                                    points="50 4, 96 30, 96 86, 50 112, 4 86, 4 30"
                                    fill={isDark ? 'rgba(131, 205, 41, 0.15)' : 'rgba(131, 205, 41, 0.08)'}
                                    stroke="#83CD29"
                                    strokeWidth="6"
                                    className="transition-colors duration-300"
                                  />
                                </svg>
                                <div className="relative z-10 flex items-center justify-center">
                                  <i className="devicon-nodejs-plain text-[22px] text-[#83CD29]"></i>
                                </div>
                              </motion.div>
                            </div>
                          </div>

                          {/* Socials & Resume Call-to-Action */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-orange-500/10 w-full max-md:justify-center max-md:pt-3 max-md:gap-3">
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.8 }}
                              className="flex items-center gap-4"
                            >
                              {[
                                { name: 'Linkedin', icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/vedant-wankhade123" },
                                { name: 'Github', icon: <Github className="w-5 h-5" />, url: "https://github.com/vedant-wankhade123" },
                                { name: 'Email', icon: <Mail className="w-5 h-5" />, url: "mailto:vedantwankhade47@gmail.com" }
                              ].map((social) => (
                                <motion.a
                                  key={social.name}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.15, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  title={social.name}
                                  className={`transition-colors duration-300 ${isDark ? 'text-[#F3D5B5] hover:text-[#FFEDD8]' : 'text-[#0F0800] hover:text-[#3D2817]'}`}
                                >
                                  {social.icon}
                                </motion.a>
                              ))}
                            </motion.div>

                            <motion.p 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                              className="text-xs md:text-sm font-semibold text-[#FF8C42]"
                            >
                              Driven by curiosity. Focused on growth. 🚀
                            </motion.p>
                          </div>

                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'education' && (
                  <motion.div 
                    key="education"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden"
                  >
                    {/* The Cinematic Walkthrough Canvas */}
                    <canvas 
                      ref={setCanvasEl}
                      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                    />
                    
                    {/* Dark overlay to darken background for text readability */}
                    <div className="absolute inset-0 bg-black/55 z-[5] pointer-events-none" />
                    
                    {/* Cards Container */}
                    <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center p-4">
                      <div className="relative w-full max-w-xl h-[450px] flex items-center justify-center">
                        {EDUCATION_TIMELINE.map((item, idx) => {
                          return (
                            <div
                              key={idx}
                              ref={el => { cardRefs.current[idx] = el; }}
                              className="absolute w-full p-6 md:p-8 flex flex-col justify-start items-center text-center transition-all duration-300 pointer-events-none opacity-0"
                              style={{
                                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.7)',
                                willChange: 'transform, opacity, filter',
                              }}
                            >

                              
                              {/* Header */}
                              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {item.title}
                              </h3>
                              <p className="text-sm md:text-xl font-bold text-orange-300 mb-3">
                                {item.subtitle}
                              </p>
                              
                              {/* Location */}
                              <div className="flex items-center justify-center gap-2 mb-6 text-white/80">
                                <MapPin size={18} className="text-[#FF8C42]" />
                                <span className="text-xs md:text-lg font-medium">{item.institution}</span>
                              </div>
                              
                              {/* Score Display inside the card */}
                              <div className="mt-auto w-full">
                                {item.cgpa ? (
                                  <div className="flex flex-col items-center gap-3">
                                    <span className="text-xs font-extrabold text-[#FF8C42] bg-white/[0.05] border border-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm mb-1 shadow-inner">
                                      CGPA progress
                                    </span>
                                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-2 max-w-lg mx-auto">
                                      {item.cgpa.map((c, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                          <span className="text-[10px] sm:text-[11px] font-bold text-[#FF8C42] uppercase tracking-wider mb-1">{c.sem.toUpperCase()}</span>
                                          <span className="text-base sm:text-lg font-extrabold text-white leading-none drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]">{c.val}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : item.score ? (
                                  <div className="flex flex-col items-center gap-2 mt-2">
                                    <span className="text-xs font-extrabold text-[#FF8C42] bg-white/[0.05] border border-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm mb-1 shadow-inner">
                                      Score
                                    </span>
                                    <div className="flex items-baseline gap-0.5 justify-center">
                                      <span className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {item.score.replace('%', '')}
                                      </span>
                                      <span className="text-2xl md:text-3xl font-bold text-white/80">%</span>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div 
                      ref={setEducationScrollEl}
                      className="absolute inset-0 overflow-y-auto z-20"
                      style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        scrollBehavior: isTourPlaying ? 'smooth' : 'auto'
                      }}
                    >
                      <div className="scroll-track h-[400vh] w-full pointer-events-none" />
                    </div>
                  </motion.div>
                )}

                {activeSection === 'skills' && (
                  <motion.div 
                    key="skills"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full flex flex-col items-center bg-transparent relative max-md:pt-0 overflow-y-auto"
                  >
                     <div className="max-w-6xl w-full flex flex-col items-center justify-center min-h-[85vh] max-md:min-h-0 max-md:justify-start">
                        <AnimatePresence mode="popLayout" custom={direction}>
                             <motion.div
                               key={activeCertIndex}
                               custom={direction}
                               variants={pageVariants}
                               initial="initial"
                               animate="animate"
                               exit="exit"
                               className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 max-md:gap-4 w-full px-4 py-4 lg:px-8 max-md:pt-0 max-md:mt-3"
                             >
                                {/* Left Side: Certificate Image */}
                                <motion.div 
                                  whileHover={{ scale: 1.02 }}
                                  className={`relative w-full max-w-xl shrink-0 rounded-[1.5rem] overflow-hidden border shadow-2xl bg-white p-1 sm:p-1.5 lg:-translate-x-8
                                    ${isDark ? 'border-white/10' : 'border-[#F3D5B5]'}`}
                                >
                                  <img 
                                    src={currentCert.image} 
                                    alt={`Certification: ${currentCert.title} from ${currentCert.platform}`} 
                                    className="w-full h-auto object-contain mix-blend-multiply rounded-xl pointer-events-none"
                                  />
                                </motion.div>

                                 {/* Right Side: Info & Skills */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-md:gap-3 h-full overflow-visible">
                                  <div className="space-y-1 relative h-12 max-md:h-8 w-full flex justify-center lg:justify-start">
                                    <AnimatePresence mode="wait">
                                       <motion.div 
                                         key={instructorPage}
                                         initial={{ y: 10, opacity: 0 }}
                                         animate={{ y: 0, opacity: 1 }}
                                         exit={{ y: -10, opacity: 0 }}
                                         className="flex items-center gap-4 whitespace-nowrap"
                                       >
                                         <p className={`text-xl md:text-3xl font-semibold tracking-tight ${isDark ? 'text-orange-400' : 'text-orange-850'}`}>
                                           Instructor : {currentCert.instructors[instructorPage]}
                                         </p>
                                         {currentCert.instructors.length > 1 && (
                                           <button 
                                             onClick={() => setInstructorPage(prev => (prev + 1) % currentCert.instructors.length)}
                                             className="text-xs opacity-50 underline hover:opacity-100 transition-opacity"
                                           >
                                             + {currentCert.instructors.length - 1} more
                                           </button>
                                         )}
                                       </motion.div>
                                    </AnimatePresence>
                                  </div>

                                   <div 
                                     onClick={() => {
                                       if (window.innerWidth < 1024) {
                                         const maxPage = Math.ceil(currentCert.associatedSkills.length / 3) - 1;
                                         setSkillPage(prev => (prev >= maxPage ? 0 : prev + 1));
                                       }
                                     }}
                                     className="flex flex-row items-center justify-center lg:justify-start gap-4 h-[120px] md:h-[140px] max-md:h-[90px] w-full relative cursor-pointer lg:cursor-default"
                                   >
                                     <div className="flex flex-row items-center justify-center lg:justify-start w-[280px] md:w-[320px] h-full overflow-hidden">
                                       <AnimatePresence mode="wait">
                                         <motion.div 
                                           key={skillPage}
                                           initial={{ x: 50, opacity: 0 }}
                                           animate={{ x: 0, opacity: 1 }}
                                           exit={{ x: -50, opacity: 0 }}
                                           transition={{ duration: 0.3 }}
                                           className="flex flex-row items-center justify-center lg:justify-start gap-8 min-w-full"
                                         >
                                           {currentCert.associatedSkills
                                             .slice(skillPage * 3, skillPage * 3 + 3)
                                             .map((skillName) => {
                                               const skill = SKILLS_DATA.find(s => s.name === skillName);
                                               return skill ? (
                                                 <motion.div
                                                   key={skill.name}
                                                   whileHover={{ y: -5 }}
                                                   className="flex flex-col items-center gap-2 w-20"
                                                 >
                                                   <div className="transition-all duration-500">
                                                     <i className={`${skill.icon} text-5xl max-md:text-4xl`} style={{ color: skill.color }} />
                                                   </div>
                                                   <span className={`text-[10px] font-medium uppercase tracking-[0.1em] text-center ${isDark ? 'text-white/40' : 'text-[#3D2817]/50'}`}>
                                                     {skill.name}
                                                   </span>
                                                 </motion.div>
                                               ) : null;
                                             })}
                                         </motion.div>
                                       </AnimatePresence>
                                     </div>
                                     {currentCert.associatedSkills.length > 3 && (
                                       <button 
                                         onClick={() => setSkillPage(prev => {
                                           const maxPage = Math.ceil(currentCert.associatedSkills.length / 3) - 1;
                                           return prev >= maxPage ? 0 : prev + 1;
                                         })}
                                         className={`hidden lg:block text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-3 rounded-full border transition-all h-fit whitespace-nowrap min-w-[140px] shadow-sm
                                           ${isDark ? 'border-white/10 text-white/40 hover:bg-white/5 hover:border-white/20' : 'border-[#3D2817]/10 text-[#3D2817]/40 hover:bg-[#3D2817]/5 hover:border-[#3D2817]/20'}`}
                                       >
                                         {skillPage === Math.ceil(currentCert.associatedSkills.length / 3) - 1 
                                           ? "Show First" 
                                           : `+${currentCert.associatedSkills.length - (skillPage * 3 + 3)} MORE`}
                                       </button>
                                     )}
                                   </div>

                                  <div className="flex flex-col items-center lg:items-start gap-3 h-[120px] md:h-[140px] max-md:h-[90px] w-full relative">
                                    <div className="flex flex-col gap-2 w-full max-w-[90%] lg:max-w-lg items-center lg:items-start relative">
                                      <AnimatePresence mode="wait">
                                        <motion.div 
                                          key={highlightPage}
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          exit={{ y: -20, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="flex flex-col items-center lg:items-start gap-2 w-full h-full"
                                        >
                                          {currentCert.content
                                            .slice(highlightPage * 3, highlightPage * 3 + 3)
                                            .map((item, j, arr) => (
                                              <div key={j} className="flex flex-row items-center gap-3 max-w-full">
                                                <span className={`text-[10px] md:text-sm font-medium px-4 py-2 rounded-full border tracking-wide transition-all duration-300 w-fit whitespace-nowrap overflow-hidden text-ellipsis
                                                  ${isDark ? 'bg-white/5 border-white/10 text-orange-200/50 hover:bg-white/10' : 'bg-orange-950/5 border-orange-950/10 text-orange-950/80 hover:bg-orange-950/10'}`}>
                                                  {item}
                                                </span>
                                                {j === arr.length - 1 && currentCert.content.length > 3 && (
                                                  <button 
                                                    onClick={() => setHighlightPage(prev => {
                                                      const maxPage = Math.ceil(currentCert.content.length / 3) - 1;
                                                      return prev >= maxPage ? 0 : prev + 1;
                                                    })}
                                                    className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all shadow-sm shrink-0 whitespace-nowrap
                                                      ${isDark ? 'border-white/10 text-white/30 hover:bg-white/5 hover:border-white/20' : 'border-orange-950/10 text-orange-950/30 hover:bg-orange-950/5 hover:border-orange-950/20'}`}
                                                  >
                                                    {highlightPage === Math.ceil(currentCert.content.length / 3) - 1
                                                      ? "First"
                                                      : `+${currentCert.content.length - (highlightPage * 3 + 3)} More`}
                                                  </button>
                                                )}
                                              </div>
                                            ))}
                                        </motion.div>
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                </div>
                             </motion.div>
                        </AnimatePresence>
                     </div>
                  </motion.div>
                )}

                {activeSection === 'projects' && (
                  <motion.div 
                    key="projects"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full flex items-start lg:items-center justify-center p-6 md:p-12 pt-2 max-md:pt-16 max-md:pb-24 lg:pt-0 max-md:overflow-y-auto lg:overflow-hidden overflow-x-hidden relative"
                  >
                    {/* Projects Navigation - Moved to full-width container */}
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-6 md:px-10 z-50 pointer-events-none">
                      <button 
                        onClick={() => {
                          setDirection(-1);
                          setActiveProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
                        }}
                        className={`p-4 rounded-full backdrop-blur-md border transition-all duration-300 pointer-events-auto shadow-lg ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/20' : 'bg-black/5 border-black/10 hover:bg-black/20'} ${isDark ? 'text-white' : 'text-black'}`}
                      >
                        <ArrowRight className="rotate-180" size={24} />
                      </button>
                      <button 
                        onClick={() => {
                          setDirection(1);
                          setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
                        }}
                        className={`p-4 rounded-full backdrop-blur-md border transition-all duration-300 pointer-events-auto shadow-lg ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/20' : 'bg-black/5 border-black/10 hover:bg-black/20'} ${isDark ? 'text-white' : 'text-black'}`}
                      >
                        <ArrowRight size={24} />
                      </button>
                    </div>

                    <div className="max-w-6xl w-full flex flex-col items-center justify-center relative min-h-[80vh] max-md:min-h-0">

                      <div className="relative w-full h-full flex flex-col items-center justify-start lg:justify-center gap-12 max-md:gap-4">
                        <AnimatePresence mode="popLayout" custom={direction}>
                          <motion.div 
                            key={activeProjectIndex}
                            custom={direction}
                            variants={projectSlideVariants}
                            initial="initial"
                            animate="center"
                            exit="exit"
                            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-6xl max-md:gap-4 max-md:-mt-10"
                          >
                            {/* Left Side: Project Media */}
                            <motion.div 
                              variants={projectItemVariants}
                              className="w-full lg:w-1/2 flex justify-center lg:justify-end min-w-0"
                            >
                              <div className={`relative group rounded-[2rem] max-md:rounded-[1.5rem] overflow-hidden border shadow-2xl transition-all duration-700 aspect-video w-full max-w-[600px] max-md:max-w-[320px] lg:max-w-[700px]
                                ${isDark ? 'bg-[#1A0904] border-[#2A1208]' : 'bg-white border-[#F3D5B5]'}`}
                                style={{
                                  boxShadow: isDark ? '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)' : '0 30px 60px rgba(0,0,0,0.15)'
                                }}
                              >
                                 <div className="absolute inset-0 bg-black flex items-center justify-center">
                                   <div className={`absolute inset-0 bg-gradient-to-br ${PROJECTS[activeProjectIndex].gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                                   
                                   {PROJECTS[activeProjectIndex].video ? (
                                     <div className="relative w-full h-full">
                                       <AnimatePresence>
                                         {!isProjectPlaying && (
                                           <motion.div 
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             exit={{ opacity: 0 }}
                                             className="absolute inset-0 z-20 flex items-center justify-center bg-black"
                                           >
                                             <img 
                                               src={PROJECTS[activeProjectIndex].thumbnail} 
                                               alt={`Thumbnail for ${PROJECTS[activeProjectIndex].title}`}
                                               className="w-full h-full opacity-60 transition-transform duration-700 group-hover:scale-105"
                                               style={{ objectFit: (PROJECTS[activeProjectIndex].objectFit as any) || 'cover' }}
                                             />
                                             <motion.button
                                               whileHover={{ scale: 1.1 }}
                                               whileTap={{ scale: 0.9 }}
                                               onClick={() => setIsProjectPlaying(true)}
                                               aria-label={`Play demo video for ${PROJECTS[activeProjectIndex].title}`}
                                               className="absolute z-30 w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-orange-500 transition-colors"
                                             >
                                               <Play size={32} fill="white" className="ml-1" />
                                             </motion.button>
                                           </motion.div>
                                         )}
                                       </AnimatePresence>

                                       {isProjectPlaying && (
                                         <div className="relative w-full h-full">
                                            <div 
                                              className={`absolute inset-0 z-10 transition-opacity duration-1000 flex items-center justify-center bg-black ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                            >
                                              <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
                                            </div>
                                            <iframe 
                                              className={`w-full h-full transition-opacity duration-1000 relative z-0 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                                              src={`${PROJECTS[activeProjectIndex].video}&autoplay=1`}
                                              title={PROJECTS[activeProjectIndex].title}
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              onLoad={() => setIsVideoLoaded(true)}
                                              allowFullScreen
                                            />
                                         </div>
                                       )}
                                     </div>
                                   ) : (
                                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                        {PROJECTS[activeProjectIndex].thumbnail ? (
                                          <>
                                            <img 
                                              src={PROJECTS[activeProjectIndex].thumbnail} 
                                              alt={`Thumbnail for ${PROJECTS[activeProjectIndex].title}`}
                                              className="w-full h-full opacity-80 transition-transform duration-700 group-hover:scale-105"
                                              style={{ objectFit: (PROJECTS[activeProjectIndex].objectFit as any) || 'cover' }}
                                              onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                if (fallback) {
                                                  fallback.style.display = 'flex';
                                                }
                                              }}
                                            />
                                            <div 
                                              style={{ display: 'none', objectFit: (PROJECTS[activeProjectIndex].objectFit as any) || 'cover' }}
                                              className="absolute inset-0 items-center justify-center transform scale-[2] md:scale-[3] transition-all duration-700 group-hover:scale-[3.5] group-hover:-rotate-6 filter drop-shadow-2xl opacity-90"
                                            >
                                              {PROJECTS[activeProjectIndex].icon}
                                            </div>
                                          </>
                                        ) : (
                                          <div className="relative z-10 transform scale-[2] md:scale-[3] transition-all duration-700 group-hover:scale-[3.5] group-hover:-rotate-6 filter drop-shadow-2xl opacity-90">
                                            {PROJECTS[activeProjectIndex].icon}
                                          </div>
                                        )}
                                      </div>
                                   )}
                                 </div>
                              </div>
                            </motion.div>

                            {/* Right Side: Project Info */}
                            <motion.div 
                              variants={projectStaggerVariants}
                              className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start px-4 min-w-0"
                            >
                              <motion.h3 
                                variants={projectItemVariants}
                                id="project-title-heading"
                                className={`text-2xl md:text-3xl font-black tracking-tight mb-4 w-full truncate ${isDark ? 'text-[#FFEDD8]' : 'text-[#3D2817]'}`} 
                                title={PROJECTS[activeProjectIndex].title}
                              >
                                {PROJECTS[activeProjectIndex].title}
                              </motion.h3>
                              <motion.p 
                                variants={projectItemVariants}
                                className={`text-lg md:text-xl opacity-90 leading-relaxed mb-6 max-md:mb-4 w-full line-clamp-3 ${isDark ? 'text-orange-200' : 'text-[#A47148]'}`}
                                title={PROJECTS[activeProjectIndex].desc}
                              >
                                {PROJECTS[activeProjectIndex].desc}
                              </motion.p>

                              <motion.div 
                                variants={projectItemVariants}
                                className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 max-md:flex-nowrap max-md:justify-center max-md:gap-2.5"
                              >
                                {PROJECTS[activeProjectIndex].liveUrl === 'not_live' || PROJECTS[activeProjectIndex].liveUrl === '#' ? (
                                  <Button 
                                    disabled
                                    className={`px-8 py-3 max-md:px-4 max-md:py-2.5 rounded-full text-lg font-bold flex items-center gap-2 max-md:gap-1.5 shadow-inner border transition-all duration-300 cursor-not-allowed opacity-60
                                      ${isDark ? 'bg-white/5 border-white/10 text-white/50 hover:bg-white/5' : 'bg-black/5 border-black/10 text-black/50 hover:bg-black/5'}`}
                                  >
                                    <ExternalLink size={20} className="max-md:w-4.5 max-md:h-4.5" />
                                    <span className="text-base md:text-lg">Site Unavailable</span>
                                  </Button>
                                ) : (
                                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                      <Button 
                                        id="project-live-btn"
                                        onClick={() => handleLiveSiteClick(PROJECTS[activeProjectIndex].liveUrl)}
                                        aria-label={`View live site for ${PROJECTS[activeProjectIndex].title}`}
                                        className={`px-6 md:px-8 py-2 md:py-3 max-md:px-4 max-md:py-2.5 rounded-full text-base md:text-lg font-bold flex items-center gap-2 max-md:gap-1.5 shadow-xl transition-all duration-300
                                          ${isDark ? 'bg-orange-600 hover:bg-orange-500 text-white' : 'bg-[#3D2817] hover:bg-[#5C3A24] text-white'}`}
                                      >
                                        <ExternalLink size={18} className="max-md:w-4.5 max-md:h-4.5" />
                                        <span className="text-sm md:text-lg">View Live Site</span>
                                      </Button>
                                   </motion.div>
                                )}

                                {PROJECTS[activeProjectIndex].githubUrl === 'private' ? (
                                  <Button 
                                    disabled
                                    variant="outline"
                                    className={`px-8 py-3 max-md:px-4 max-md:py-2.5 rounded-full text-lg font-bold flex items-center gap-2 max-md:gap-0 border-2 transition-all duration-300 cursor-not-allowed opacity-60
                                      ${isDark ? 'border-white/20 text-white/70 hover:bg-transparent' : 'border-black/10 text-black/50 hover:bg-transparent'}`}
                                    title="Private Repository"
                                  >
                                    <Github size={20} className={`max-md:w-5 max-md:h-5 ${isDark ? 'text-white' : 'text-[#3D2817]'}`} />
                                    <span className="hidden md:inline">Private Repository</span>
                                  </Button>
                                ) : PROJECTS[activeProjectIndex].githubUrl === 'unavailable' || PROJECTS[activeProjectIndex].githubUrl === '#' ? (
                                  <Button 
                                    disabled
                                    variant="outline"
                                    className={`px-8 py-3 max-md:px-4 max-md:py-2.5 rounded-full text-lg font-bold flex items-center gap-2 max-md:gap-0 border-2 transition-all duration-300 cursor-not-allowed opacity-60
                                      ${isDark ? 'border-white/20 text-white/70 hover:bg-transparent' : 'border-black/10 text-black/50 hover:bg-transparent'}`}
                                    title="Unavailable"
                                  >
                                    <Github size={20} className={`max-md:w-5 max-md:h-5 ${isDark ? 'text-white' : 'text-[#3D2817]'}`} />
                                    <span className="hidden md:inline">Unavailable</span>
                                  </Button>
                                ) : (
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button 
                                      onClick={() => handleGithubClick(PROJECTS[activeProjectIndex].githubUrl)}
                                      variant="outline"
                                      className={`px-6 md:px-8 py-2 md:py-3 max-md:px-4 max-md:py-2.5 rounded-full text-base md:text-lg font-bold flex items-center gap-2 max-md:gap-0 border-2 transition-all duration-300
                                        ${isDark ? 'border-orange-500/30 text-orange-200 hover:bg-orange-500/10' : 'border-[#3D2817]/20 text-[#3D2817] hover:bg-[#3D2817]/5'}`}
                                      title="Source Code"
                                    >
                                      <Github size={18} className={`max-md:w-5 max-md:h-5 ${isDark ? 'text-white' : 'text-[#3D2817]'}`} />
                                      <span className="hidden md:inline">Source Code</span>
                                    </Button>
                                  </motion.div>
                                )}
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Manual pagination dots */}
                      <div className="absolute bottom-[2%] max-md:bottom-[-64px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
                        <button 
                          onClick={() => {
                            setDirection(-1);
                            setActiveProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
                          }}
                          className={`md:hidden p-2 rounded-full border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-black/5 border-black/10 text-black/50'}`}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <div className="flex gap-3">
                          {PROJECTS.map((_, idx) => (
                            <button 
                              key={idx}
                              onClick={() => {
                                setDirection(idx > activeProjectIndex ? 1 : -1);
                                setActiveProjectIndex(idx);
                              }}
                              className={`h-2 rounded-full transition-all duration-300 ${activeProjectIndex === idx ? 'w-10 bg-orange-500' : 'w-2 bg-gray-400 opacity-30 hover:opacity-100 cursor-pointer'}`}
                            />
                          ))}
                        </div>
                        <button 
                          onClick={() => {
                            setDirection(1);
                            setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
                          }}
                          className={`md:hidden p-2 rounded-full border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-black/5 border-black/10 text-black/50'}`}
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}



                {activeSection === 'achievements' && (
                  <motion.div 
                    key="achievements"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full relative overflow-hidden"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full w-full z-10 flex flex-col items-center justify-center px-3 sm:px-6 md:px-10 pt-16 lg:pt-8 pb-4"
                    >
                      {/* Bento Grid */}
                      <div className="w-full max-w-6xl h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 auto-rows-fr gap-3 md:gap-4">
                        {ACHIEVEMENT_IMAGES.map((ach, idx) => {
                          const spanClass = idx === 0
                            ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
                            : idx === 2
                              ? 'sm:col-span-1 lg:col-span-1 lg:row-span-2'
                              : '';
                          const currentImgIdx = bentoImageIndices[idx] ?? 0;

                          return (
                            <motion.div
                              key={`bento-${idx}`}
                              id={`bento-card-${idx}`}
                              initial={{ opacity: 0, y: 30, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                              className={`relative rounded-2xl overflow-hidden cursor-pointer group min-h-[140px] sm:min-h-[160px] ${spanClass}`}
                              onClick={() => {
                                setExpandedAchievement(idx);
                                setExpandedImgIndex(bentoImageIndices[idx] ?? 0);
                              }}
                              whileHover={{ scale: 1.015 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {/* Background image with crossfade */}
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={`bento-img-${idx}-${currentImgIdx}`}
                                  src={ach.images[currentImgIdx]}
                                  alt={ach.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                                />
                              </AnimatePresence>

                              {/* Hover zoom effect on the image */}
                              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" />

                              {/* Gradient scrim overlay */}
                              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/45 to-transparent sm:bg-gradient-to-t sm:from-black/95 sm:via-black/50 sm:to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                              {/* Multi-image indicator dots */}
                              {ach.images.length > 1 && (
                                <div className="absolute bottom-3 right-3 sm:bottom-auto sm:top-3 flex gap-1.5 z-10">
                                  {ach.images.map((_, dotIdx) => (
                                    <div
                                      key={dotIdx}
                                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        dotIdx === currentImgIdx
                                          ? 'bg-orange-400 scale-125'
                                          : 'bg-white/40'
                                      }`}
                                    />
                                  ))}
                                </div>
                              )}

                              {/* Text overlay - top left on mobile, bottom left on desktop */}
                              <div className="absolute top-0 sm:top-auto sm:bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-10">
                                <motion.div
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 + idx * 0.08 }}
                                >
                                  <p 
                                    className="text-orange-400 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase mb-0.5 sm:mb-1"
                                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.95)' }}
                                  >
                                    {ach.subtitle}
                                  </p>
                                  <h3 
                                    className={`text-white font-bold leading-tight ${
                                      idx === 0 ? 'text-xs sm:text-base md:text-lg lg:text-xl' : 'text-[10px] sm:text-xs md:text-sm'
                                    }`}
                                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}
                                  >
                                    {ach.title}
                                  </h3>
                                  {/* Description visible on hover for the large card */}
                                  {idx === 0 && (
                                    <div 
                                      className="max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden hidden md:block"
                                    >
                                      <p 
                                        className="text-white/85 text-[10px] md:text-xs mt-1 md:mt-2 line-clamp-2"
                                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                                      >
                                        {ach.description}
                                      </p>
                                    </div>
                                  )}
                                </motion.div>
                              </div>

                              {/* Subtle border glow */}
                              <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-shadow duration-500 ${
                                isDark
                                  ? 'group-hover:shadow-[inset_0_0_0_1.5px_rgba(251,146,60,0.3)]'
                                  : 'group-hover:shadow-[inset_0_0_0_1.5px_rgba(234,88,12,0.25)]'
                              }`} />
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Expanded Achievement Modal */}
                    <AnimatePresence>
                      {expandedAchievement >= 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md pointer-events-auto"
                          onClick={() => setExpandedAchievement(-1)}
                        >
                          <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 40 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] rounded-2xl overflow-y-auto sm:overflow-hidden bg-[#0C0703] border border-white/10 shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Expanded image with crossfade */}
                            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black shrink-0">
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={`expanded-img-${expandedAchievement}-${expandedImgIndex}`}
                                  src={ACHIEVEMENT_IMAGES[expandedAchievement]?.images[expandedImgIndex]}
                                  alt={ACHIEVEMENT_IMAGES[expandedAchievement]?.title}
                                  className="absolute inset-0 w-full h-full object-contain bg-black"
                                  initial={{ opacity: 0, scale: 1.03 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.97 }}
                                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                                />
                              </AnimatePresence>

                              {/* Gradient overlay for text - DESKTOP ONLY */}
                              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                              {/* Text overlay bottom-left - DESKTOP ONLY */}
                              <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                <p className="text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-lg">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.subtitle}
                                </p>
                                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg mb-2">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.title}
                                </h2>
                                <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-lg">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.description}
                                </p>
                              </div>

                              {/* Close button */}
                              <button
                                onClick={() => setExpandedAchievement(-1)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 border border-white/10 backdrop-blur-sm z-20"
                              >
                                <X size={20} />
                              </button>

                              {/* Multi-image navigation */}
                              {ACHIEVEMENT_IMAGES[expandedAchievement]?.images.length > 1 && (
                                <>
                                  {/* Prev/Next arrows - DESKTOP ONLY */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const imgCount = ACHIEVEMENT_IMAGES[expandedAchievement].images.length;
                                      setExpandedImgIndex(prev => (prev - 1 + imgCount) % imgCount);
                                    }}
                                    className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all border border-white/10 backdrop-blur-sm z-20 items-center justify-center"
                                  >
                                    <ChevronLeft size={22} />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const imgCount = ACHIEVEMENT_IMAGES[expandedAchievement].images.length;
                                      setExpandedImgIndex(prev => (prev + 1) % imgCount);
                                    }}
                                    className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all border border-white/10 backdrop-blur-sm z-20 items-center justify-center"
                                  >
                                    <ChevronRight size={22} />
                                  </button>

                                  {/* Dots - DESKTOP ONLY */}
                                  <div className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 gap-2 z-20">
                                    {ACHIEVEMENT_IMAGES[expandedAchievement].images.map((_, dotIdx) => (
                                      <button
                                        key={dotIdx}
                                        onClick={(e) => { e.stopPropagation(); setExpandedImgIndex(dotIdx); }}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                          dotIdx === expandedImgIndex
                                            ? 'w-6 bg-orange-400'
                                            : 'w-2 bg-white/30 hover:bg-white/60'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* MOBILE ONLY Layout - Controls and text below the image */}
                            <div className="sm:hidden flex flex-col w-full bg-[#0C0703]">
                              {/* Mobile Navigation bar (Only if multi-image) */}
                              {ACHIEVEMENT_IMAGES[expandedAchievement]?.images.length > 1 && (
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#120B06]">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const imgCount = ACHIEVEMENT_IMAGES[expandedAchievement].images.length;
                                      setExpandedImgIndex(prev => (prev - 1 + imgCount) % imgCount);
                                    }}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-transform"
                                  >
                                    <ChevronLeft size={18} />
                                  </button>
                                  <div className="flex gap-1.5">
                                    {ACHIEVEMENT_IMAGES[expandedAchievement].images.map((_, dotIdx) => (
                                      <div
                                        key={dotIdx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                          dotIdx === expandedImgIndex
                                            ? 'w-4 bg-orange-400'
                                            : 'w-1.5 bg-white/30'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const imgCount = ACHIEVEMENT_IMAGES[expandedAchievement].images.length;
                                      setExpandedImgIndex(prev => (prev + 1) % imgCount);
                                    }}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-transform"
                                  >
                                    <ChevronRight size={18} />
                                  </button>
                                </div>
                              )}

                              {/* Mobile Text block */}
                              <div className="p-5 flex flex-col gap-1.5 text-left">
                                <p className="text-orange-400 text-xs font-semibold tracking-wider uppercase">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.subtitle}
                                </p>
                                <h2 className="text-white text-lg font-bold">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.title}
                                </h2>
                                <p className="text-white/70 text-xs leading-relaxed mt-1">
                                  {ACHIEVEMENT_IMAGES[expandedAchievement]?.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Desktop-only Absolute Footer */}
      {!isMobile && (
        <footer className={`absolute bottom-3 left-0 right-0 z-40 text-center py-2 text-xs transition-colors duration-300 pointer-events-none ${isDark ? 'text-[#FFEDD8]/30' : 'text-[#3D2817]/30'}`}>
          <p>© {new Date().getFullYear()} Vedant Wankhade. All rights reserved.</p>
        </footer>
      )}



      {/* Scroll Indicator (Only on Home) */}
      {activeSection === 'home' && (
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bounce-arrow cursor-pointer opacity-60 hover:opacity-100 transition-opacity z-20" onClick={() => handleNavClick('about')}>
           <ChevronDown size={28} style={{color: isDark ? '#D4A276' : '#3D2817'}} />
         </div>
      )}
        </div>
      </div>


      {/* Floating Header controls for Achievements Desktop Section */}
      {activeSection === 'achievements' && !isMenuOpen && (
        <>
          {/* Top-Left: Hamburger Icon for Nav Links */}
          <motion.button
            id="hamburger-btn-floating"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            className="fixed top-6 left-6 z-[60] hidden lg:flex items-center justify-center w-12 h-12 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(61, 40, 23, 0.1)',
              color: isDark ? '#ffffff' : '#3D2817',
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDesktopMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>

          {/* Vertical Navigation options directly below Hamburger Icon */}
          <AnimatePresence>
            {isDesktopMenuOpen && (
              <div 
                className="fixed top-20 left-6 z-[60] hidden lg:flex flex-col items-start gap-1 p-2 transition-all duration-300"
              >
                {['Home', 'About', 'Education', 'Skills & certifications', 'Projects', 'Achievements'].map((item, idx) => {
                  const id = item === 'Skills & certifications' ? 'skills' : item.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -15, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.9 }}
                      transition={{ duration: 0.2, delay: idx * 0.04 }}
                      onClick={() => {
                        handleNavClick(id);
                        setIsDesktopMenuOpen(false);
                      }}
                      className={`px-4 py-1.5 text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-start whitespace-nowrap rounded-lg w-full ${
                        isDark ? 'hover:bg-white/10' : 'hover:bg-[#3D2817]/5'
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: isActive 
                          ? '#ff8c42' 
                          : (isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(61, 40, 23, 0.75)')
                      }}
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          {/* Top-Right: Download Resume Icon */}
          <motion.button
            id="resume-download-btn-floating"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsResumePreviewOpen(true)}
            className="fixed top-6 right-6 z-[60] hidden lg:flex items-center justify-center w-12 h-12 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(61, 40, 23, 0.1)',
              color: isDark ? '#ffffff' : '#3D2817',
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={22} />
          </motion.button>

          {/* Bottom-Right: Theme Toggle Icon */}
          <motion.button
            id="theme-toggle-btn-floating"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-[60] hidden lg:flex items-center justify-center w-12 h-12 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(61, 40, 23, 0.1)',
              color: isDark ? '#ffffff' : '#3D2817',
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </motion.button>
        </>
      )}

      {/* Resume Unavailable Toast */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            transform: resumeToast === 'unavailable' ? 'translateY(0)' : 'translateY(20px)',
            opacity: resumeToast === 'unavailable' ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            background: 'linear-gradient(135deg, rgba(30,20,10,0.96), rgba(50,25,5,0.98))',
            border: '1px solid rgba(255, 140, 66, 0.4)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,140,66,0.15)',
            backdropFilter: 'blur(12px)',
            fontFamily: "'Poppins', sans-serif",
            minWidth: '220px',
          }}
        >
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(255,140,66,0.15)', border: '1.5px solid rgba(255,140,66,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#FF8C42', letterSpacing: '0.03em' }}>No Resume Available</p>
            <p style={{ margin: '2px 0 0', fontSize: '11px', color: 'rgba(255,237,216,0.6)', fontWeight: 400 }}>Will be uploaded soon</p>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isResumePreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsResumePreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden relative ${isDark ? 'bg-[#150D08] border-orange-500/20' : 'bg-[#FFF5EC] border-orange-200'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Print Stylesheet */}
              <style>{`
                @media print {
                  body * {
                    visibility: hidden;
                  }
                  .resume-print-area, .resume-print-area * {
                    visibility: visible;
                  }
                  .resume-print-area {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    margin: 0 !important;
                    padding: 2.5cm !important;
                    box-shadow: none !important;
                    background: white !important;
                    color: black !important;
                    transform: none !important;
                    zoom: 1 !important;
                  }
                }
              `}</style>

              {/* Modal Header */}
              <div className={`p-4 flex items-center justify-between border-b ${isDark ? 'border-orange-500/10' : 'border-orange-200'}`}>
                <div className="flex items-center gap-2">
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#3D2817]'}`}>Resume Preview</h3>
                </div>

                {/* Controls: Zoom & Downloads */}
                <div className="flex flex-wrap items-center gap-3 md:gap-5">
                  {/* Zoom Controls */}
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${isDark ? 'border-orange-500/10 bg-white/5' : 'border-orange-200 bg-white/50'}`}>
                    <button 
                      onClick={() => setResumeZoom(z => Math.max(0.6, z - 0.1))}
                      className={`p-1.5 rounded-full hover:scale-105 active:scale-95 transition-all ${isDark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-black/70 hover:text-black hover:bg-black/5'}`}
                      title="Zoom Out"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <span className={`text-xs font-semibold select-none w-12 text-center ${isDark ? 'text-white/80' : 'text-[#3D2817]/80'}`}>
                      {Math.round(resumeZoom * 100)}%
                    </span>
                    <button 
                      onClick={() => setResumeZoom(z => Math.min(1.5, z + 0.1))}
                      className={`p-1.5 rounded-full hover:scale-105 active:scale-95 transition-all ${isDark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-black/70 hover:text-black hover:bg-black/5'}`}
                      title="Zoom In"
                    >
                      <ZoomIn size={16} />
                    </button>
                    <button 
                      onClick={() => setResumeZoom(1.0)}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${isDark ? 'border-white/15 text-white/55 hover:bg-white/10' : 'border-black/10 text-black/55 hover:bg-black/5'}`}
                      title="Reset Zoom"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Downloads */}
                  <div className="flex items-center gap-2">
                    {/* DOCX Download */}
                    <a 
                      href="/images/Vedant_Wankhade_Resume.docx"
                      download="Vedant_Wankhade_Resume.docx"
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 border
                        ${isDark 
                          ? 'border-orange-500/20 text-orange-200 hover:bg-orange-500/10' 
                          : 'border-orange-200 text-[#8B5A3C] hover:bg-orange-100/50'}`}
                    >
                      <Download size={14} /> DOCX
                    </a>

                    {/* PDF Download (Print) */}
                    <button 
                      onClick={() => window.print()}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 border
                        ${isDark 
                          ? 'border-orange-500/20 text-orange-200 hover:bg-orange-500/10' 
                          : 'border-orange-200 text-[#8B5A3C] hover:bg-orange-100/50'}`}
                    >
                      <Download size={14} /> PDF
                    </button>
                  </div>

                  {/* Close Button */}
                  <button 
                    onClick={() => setIsResumePreviewOpen(false)}
                    className={`p-1.5 rounded-full border transition-colors ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white border-white/10' : 'hover:bg-black/5 text-black/50 hover:text-black border-black/10'}`}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body - Scrollable sheet viewport */}
              <div className={`flex-1 overflow-auto p-8 max-md:p-4 flex justify-center items-start ${isDark ? 'bg-black/40' : 'bg-black/5'}`}>
                <div 
                  className="transition-all duration-200 origin-top"
                  style={{ 
                    transform: `scale(${resumeZoom})`, 
                    transformOrigin: 'top center',
                    marginBottom: `${Math.max(0, (resumeZoom - 1) * 1100)}px`,
                    marginRight: `${Math.max(0, (resumeZoom - 1) * 400)}px`,
                    marginLeft: `${Math.max(0, (resumeZoom - 1) * 400)}px`
                  }}
                >
                  {/* The Resume Sheet Container */}
                  <div className="resume-print-area bg-white text-[#111111] p-12 max-md:p-6 shadow-2xl rounded-lg w-[800px] min-h-[1050px] flex flex-col text-left font-sans text-[13px] leading-[1.4] select-text">
                    {/* Header */}
                    <div className="text-center border-b pb-4 mb-4">
                      <h1 className="text-2xl font-black tracking-tight text-[#000000] m-0">VEDANT WANKHADE</h1>
                      <p className="text-[12px] font-bold text-orange-600 tracking-wider uppercase mt-1">Full Stack Developer (MERN)</p>
                      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-[#555555] mt-2 font-medium">
                        <span>+91 9175988560</span>
                        <span>•</span>
                        <a href="mailto:vedantwankhade47@gmail.com" className="hover:underline hover:text-[#000000]">vedantwankhade47@gmail.com</a>
                        <span>•</span>
                        <span>Amravati, Maharashtra</span>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-[11px] text-[#555555] mt-1 font-medium">
                        <a href="https://linkedin.com/in/vedant-wankhade123" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#000000]">LinkedIn: linkedin.com/in/vedant-wankhade123</a>
                        <span>|</span>
                        <a href="https://github.com/vedantwankhade123" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#000000]">GitHub: github.com/vedantwankhade123</a>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-4">
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Summary</h2>
                      <p className="text-[#333333] m-0 text-justify">
                        Final-year B.Tech CSE student at G.H. Raisoni University, Amravati, specializing in Full Stack Development (MERN). Currently completing the 7-month Cohort 3.0 – Job Ready AI Powered Full Stack Web Development course by Sheryians Coding School. Proven ability to build AI-integrated web applications and deliver client projects; recognized at a national-level hackathon and two university competitions.
                      </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="mb-4">
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Technical Skills</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-[#333333]">
                        <div><span className="font-bold text-[#000000]">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS, TypeScript, Vite</div>
                        <div><span className="font-bold text-[#000000]">Backend:</span> Node.js, Express.js, REST APIs</div>
                        <div><span className="font-bold text-[#000000]">Databases:</span> MongoDB, Firebase Firestore (NoSQL), SQL</div>
                        <div><span className="font-bold text-[#000000]">Languages:</span> JavaScript (ES6+), TypeScript, Python</div>
                        <div><span className="font-bold text-[#000000]">AI & APIs:</span> Google Gemini API, AI Agents, Web Speech API, OpenStreetMap, Computer Vision</div>
                        <div><span className="font-bold text-[#000000]">Tools:</span> Git, GitHub, Firebase, Docker (learning)</div>
                        <div className="md:col-span-2"><span className="font-bold text-[#000000]">DSA:</span> Data Structures & Algorithms – JavaScript & Python</div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-4">
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Projects</h2>
                      
                      {/* Project 1: HealBook */}
                      <div className="mb-3">
                        <div className="flex items-baseline justify-between">
                          <span className="font-bold text-[#000000] text-sm">HealBook – AI-Powered Healthcare & Appointment Platform</span>
                          <span className="text-[11px] text-[#555555] font-semibold">Personal Project | 2025</span>
                        </div>
                        <div className="text-[11px] text-[#555555] font-semibold italic mb-1">
                          Stack: React.js, Node.js, Express.js, MongoDB, Google Gemini API, Web Speech API
                        </div>
                        <ul className="list-disc list-outside pl-4 m-0 space-y-0.5 text-[#333333]">
                          <li>Built a full-stack healthcare platform with AI-powered symptom identification, doctor appointment booking, and an AI agent for conversational task completion.</li>
                          <li>Implemented real-time voice-based AI doctor consultations – patients speak, AI doctor responds with synthesized voice using Web Speech API and LLM integration.</li>
                          <li>Repository: <a href="https://github.com/vedantwankhade123/healbook" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-semibold">github.com/vedantwankhade123/healbook</a></li>
                        </ul>
                      </div>

                      {/* Project 2: Ekdanta */}
                      <div>
                        <div className="flex items-baseline justify-between">
                          <span className="font-bold text-[#000000] text-sm">Ekdanta – E-Commerce Website</span>
                          <span className="text-[11px] text-[#555555] font-semibold">Client Project | 2025</span>
                        </div>
                        <div className="text-[11px] text-[#555555] font-semibold italic mb-1">
                          Stack: React.js, Node.js, Firebase, Tailwind CSS
                        </div>
                        <ul className="list-disc list-outside pl-4 m-0 space-y-0.5 text-[#333333]">
                          <li>Developed and deployed a fully functional e-commerce web application for a client, featuring product listings, cart management, and a responsive UI.</li>
                          <li>Handled complete project lifecycle from requirement gathering to production deployment on Firebase Hosting.</li>
                          <li>Repository: <a href="https://github.com/vedantwankhade123/ekdanta-ecommerce" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-semibold">github.com/vedantwankhade123/ekdanta-ecommerce</a> | Live: <a href="https://ekdanta-c4074.web.app/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-semibold">ekdanta-c4074.web.app/</a></li>
                        </ul>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Education</h2>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="font-bold text-[#000000]">B.Tech – Computer Science & Engineering</span>
                            <span className="text-[#333333]"> | G.H. Raisoni University, Amravati</span>
                          </div>
                          <span className="text-[11px] text-[#555555] font-semibold">July 2023 – July 2027</span>
                        </div>
                        <div className="text-[11px] text-[#555555] pl-4">
                          Final Year (4th Year) | Focus: Web Development, AI, Data Science, DBMS
                        </div>
                        
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="font-bold text-[#000000]">HSC (PCM) – 61%</span>
                            <span className="text-[#333333]"> | P.R. Pote Patil Junior College, Amravati</span>
                          </div>
                          <span className="text-[11px] text-[#555555] font-semibold">Feb 2022 – March 2023</span>
                        </div>
                        
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="font-bold text-[#000000]">SSC – 97%</span>
                            <span className="text-[#333333]"> | Prabodhan Vidyalaya, Daryapur</span>
                          </div>
                          <span className="text-[11px] text-[#555555] font-semibold">March 2020 – March 2021</span>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-4">
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Certifications & Courses</h2>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-bold text-[#000000]">Cohort 3.0 – Full Stack Web Development Course</span>
                          <span className="text-[#333333]"> | Sheryians Coding School</span>
                        </div>
                        <span className="text-[11px] text-[#555555] font-semibold">2024 – Present</span>
                      </div>
                      <div className="text-[11px] text-[#555555] pl-4">
                        7-month Job Ready AI Powered cohort covering Full Stack Web Development (MERN), DSA in JavaScript, AI Engineering, DevOps, System Design, and real-world project building.
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h2 className="text-[12px] font-bold tracking-widest text-[#000000] border-b pb-0.5 mb-1.5 uppercase">Achievements</h2>
                      <ul className="list-disc list-outside pl-4 m-0 space-y-0.5 text-[#333333]">
                        <li><span className="font-bold text-[#000000]">Consolation Prize</span> – HackGenX 2026, National Level Hackathon, Sipna College of Engineering & Technology, Amravati (AI-Powered Leak & Anomaly Detection in Urban Water Infrastructure, Feb 26–27, 2026).</li>
                        <li><span className="font-bold text-[#000000]">3rd Place</span> – Paper Presentation, MACCS-2024 International Conference, G.H. Raisoni University, Amravati (May 2024).</li>
                        <li><span className="font-bold text-[#000000]">3rd Prize</span> – Circuitron Circuit Making Competition, EXTC Dept., G.H. Raisoni University, Amravati.</li>
                        <li><span className="font-bold text-[#000000]">Participation Certificate</span> – Rackathon Hackathon, G.H. Raisoni University, Amravati.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Image Lightbox */}
      <AnimatePresence>
        {selectedAchievementImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 cursor-zoom-out pointer-events-auto"
            onClick={() => setSelectedAchievementImg(null)}
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedAchievementImg}
              alt="Achievement certificate or photo full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAchievementImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors border border-white/10"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Tour Controller Bar */}
      <AnimatePresence>
        {isTourPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.8
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] w-[90%] max-w-md px-4 py-2.5 rounded-full border flex items-center gap-3.5 shadow-2xl pointer-events-auto transition-all duration-300 backdrop-blur-md"
            style={{
              background: isDark ? 'rgba(15, 8, 0, 0.75)' : 'rgba(255, 245, 236, 0.75)',
              borderColor: isDark ? 'rgba(255, 140, 66, 0.3)' : 'rgba(139, 90, 60, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {/* Play/Pause Button */}
            <button
              onClick={toggleTourPlayback}
              className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md shrink-0 transition-all ${
                isDark 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              {isTourAudioPlaying ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                </svg>
              ) : (
                <Play size={12} fill="currentColor" className="translate-x-0.5" />
              )}
            </button>

            {/* Progress Slider & Info */}
            <div className="flex-1 flex flex-col gap-2">
              <div className={`flex items-center justify-between text-[9px] font-bold tracking-wider ${isDark ? 'text-white' : 'text-[#3D2817]/80'}`}>
                <span>Voice Tour</span>
                <span>{formatTime(tourTime)} / {formatTime(tourDuration || 115)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={tourDuration || 115}
                step="0.1"
                value={tourTime}
                onChange={handleTourScrub}
                className={`w-full h-1 rounded-full cursor-pointer appearance-none outline-none focus:outline-none ${isDark ? 'accent-white bg-white/20' : 'accent-[#3D2817] bg-[#3D2817]/20'}`}
                style={{
                  background: isDark
                    ? `linear-gradient(to right, #ffffff 0%, #ffffff ${(tourTime / (tourDuration || 115)) * 100}%, rgba(255,255,255,0.2) ${(tourTime / (tourDuration || 115)) * 100}%, rgba(255,255,255,0.2) 100%)`
                    : `linear-gradient(to right, #3D2817 0%, #3D2817 ${(tourTime / (tourDuration || 115)) * 100}%, rgba(61,40,23,0.15) ${(tourTime / (tourDuration || 115)) * 100}%, rgba(61,40,23,0.15) 100%)`
                }}
              />
            </div>

            {/* Exit Button */}
            <button
              onClick={exitTour}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all active:scale-95 border shrink-0 ${
                isDark 
                  ? 'bg-white/10 text-white hover:bg-white/25 border-white/20' 
                  : 'bg-[#3D2817]/10 text-[#3D2817] hover:bg-[#3D2817]/25 border-[#3D2817]/20'
              }`}
              title="Exit Tour"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spring-Animated Virtual Cursor */}
      <AnimatePresence>
        {isTourPlaying && virtualCursor.visible && (
          <motion.div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              x: virtualCursor.x,
              y: virtualCursor.y,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
            animate={{
              x: virtualCursor.x,
              y: virtualCursor.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 15,
              mass: 0.6
            }}
            className="flex items-center justify-center translate-x-[-4.5px] translate-y-[-3px]"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            >
              <path 
                d="M4.5 3V18.5L9.3 14.1L13.6 21.5L16.2 20L11.9 12.7L18.5 12.7L4.5 3Z" 
                fill="#ffffff" 
                stroke="#000000" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
