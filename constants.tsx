
import { Project, SkillCategory, Achievement, Experience } from './types';

export const RESUME_DATA = {
  name: "Sayan Mandal",
  tagline: "Computer Science Engineer | Problem Solver | Networks & Systems Enthusiast",
  email: "mandalsayan2004@gmail.com",
  phone: "+91-8250223279",
  github: "https://github.com/codesayan2004",
  linkedin: "https://www.linkedin.com/in/sayan-mandal-iitg/",
  // Placeholder images - Replace these URLs with your actual image paths
  profileImageUrl: "/profile.jpeg", // Add your profile image URL here
  logoUrl: "", // Add your logo URL here, e.g., "/logo.png"
  about: "I am a Computer Science and Engineering undergraduate at IIT Guwahati who enjoys building real-world software systems. My work focuses on full-stack development, backend engineering, and cloud infrastructure, with a strong interest in designing scalable and reliable systems.",
};

export const PROJECTS: Project[] = [
  {
    title: "CodeSphere",
    description:
      "A full-stack online judge platform supporting real-time multi-language code execution.",
      highlights: [
        "Docker sandboxed execution",
        "Monaco Editor integration",
        "AWS EC2 deployment (Nginx + Gunicorn)",
        "Multi-language runtime support"
      ],
    tech: ["Django", "Docker", "AWS EC2", "Tailwind CSS", "Monaco Editor"],
    github: "https://github.com/codesayan2004/OJ",
    live: "https://www.loom.com/share/6e6c058402d240bcab52e2c7ff3ca1b5?sid=cf73ad9e-9228-49f4-b8c9-da2b8025a3ec",
    image: "/codesphere.png",
  },
  {
    title: "Verizo",
    description:
      "A cross-platform mobile news application built with React Native.",
      highlights: [
        "Firebase authentication",
        "Firestore bookmark persistence",
        "GNews API category feeds",
        "AsyncStorage session management"
      ],
    tech: ["React Native", "Expo", "Firebase", "GNews API"],
    github: "https://github.com/codesayan2004/news-app",
    live: "https://drive.google.com/file/d/12-uH664tuIRmwuebeO7cm0cUgWqVZYtQ/view",
    image: "/Verizo.jpeg",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "Java", "Haskell", "Prolog", "x86 Assembly (NASM)"]
  },
  {
    name: "Web Technologies",
    skills: ["HTML5", "CSS3", "React.js", "React Native", "Django", "REST APIs", "Tailwind CSS", "Bootstrap"]
  },
  {
    name: "Backend & Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Firestore"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "AWS EC2", "Git", "GitHub"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Codeforces Pupil",
    detail: "Peak rating of 1357, ID: sayan_mandal",
    year: "2025"
  },
  {
    title: "IICPC Codefest Prelims",
    detail: "Ranked 1004/9000 (Top 12%)",
    year: "2026"
  },
  {
    title: "JEE Advanced",
    detail: "All India Rank 6196",
    year: "2023"
  },
  {
    title: "JEE Main",
    detail: "All India Rank 4324",
    year: "2023"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Upcoming SDE Intern",
    company: "Zscaler",
    duration: "May 2026 – June 2026",
    description: "Preparing to work with the Networking Domain and high-performance cloud security systems."
  },
  {
    role: "Academic Mentor",
    company: "Physics Wallah (PW)",
    duration: "Jul 2024 – Dec 2024",
    description: "Mentored 350+ JEE aspirants on stress handling, time management, and academic planning."
  }
];
