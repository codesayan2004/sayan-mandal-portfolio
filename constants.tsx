
import { Project, SkillCategory, Achievement, Experience } from './types';

export const RESUME_DATA = {
  name: "Sayan Mandal",
  tagline: "Computer Science Engineer | Machine Learning | Cloud | Networks & Systems Enthusiast",
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
    title: "Internet-Scale BGP Security Analysis",
    description:
      "An Internet-scale BGP simulation project analyzing routing security and resilience using a 76K+ AS topology.",
    highlights: [
      "Extended InternetSim to support large-scale real-time BGP simulations",
      "Built an interactive CLI for dynamic experimentation and analysis",
      "Implemented policy injection to analyze adversarial routing behavior",
      "Simulated prefix hijacking attacks and evaluated Route Origin Validation (ROV)"
    ],
    tech: ["C++", "Python", "Cython", "InternetSim", "BGP", "AS-level topology"],
    github: "https://github.com/codesayan2004/InternetSim",
    live: "https://docs.google.com/document/d/167HROjDy92dm8Q70GRSvWVcedp8weOBQ/edit?usp=sharing&ouid=108831923057726748677&rtpof=true&sd=true",
    image: "/bgp-sim.png",
  },
  {
    title: "CodeSphere",
    description:
      "A full-stack online judge platform supporting real-time multi-language code execution.",
      highlights: [
        "Built a full-stack Online Judge using Django, Docker, and AWS",
        "Enabled real-time execution for C, C++, Java, Python, and JavaScript",
        "Integrated Monaco Editor with secure sandboxed execution using Docker",
        "Deployed independently using Nginx, Gunicorn, AWS EC2, and AWS ECR"
      ],
    tech: ["Django", "Docker", "AWS EC2", "Tailwind CSS", "Monaco Editor"],
    github: "https://github.com/codesayan2004/OJ",
    live: "https://www.loom.com/share/6e6c058402d240bcab52e2c7ff3ca1b5?sid=cf73ad9e-9228-49f4-b8c9-da2b8025a3ec",
    image: "/codesphere.png",
  },
  {
    title: "PyAgent",
    description:
      "An autonomous AI coding agent for Python repositories.",
    highlights: [
      "Autonomously analyzes, debugs, and fixes Python repository issues",
      "Uses Gemini function calling for intelligent tool orchestration workflows",
      "Executes tests and validates fixes through iterative execution loops",
      "Supports configurable repository-scoped execution across multiple Py projects"
    ],
    tech: ["Python", "Gemini API", "LLM Tool Calling", "CLI", "AI Agents"],
    github: "https://github.com/codesayan2004/PyAgent",
    live: "",
    image: "/pyagent.png",
  },
  {
    title: "Verizo",
    description:
      "A cross-platform mobile news application built with React Native.",
      highlights: [
        "Built a React Native news app using Expo and GNews API",
        "Implemented Firebase Authentication and Firestore for user data management",
        "Used AsyncStorage for persistent login sessions and theme preferences",
        "Generated deployable Android APK and tested application on real devices"
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
    skills: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Haskell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" },
      { name: "Prolog", logo: "https://www.swi-prolog.org/download/logo/swipl-128.png" },
      { name: "x86 Assembly", logo: "https://media.licdn.com/dms/image/v2/D4D12AQEM9F_-u1OT5Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1658763190886?e=1784764800&v=beta&t=PcEBBGSJYg51pQpwbN6h_w4CE-7ZaDb5X9E6dNetgaQ" }
    ]
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Django", logo: "https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Firestore", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Codeforces Specialist",
    detail: "Peak rating of 1423, ID: sayan_mandal",
    year: "2026"
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
    role: "Software Engineer Internship",
    company: "Zscaler, Hyderabad",
    duration: "May 2026 – July 2026",
    description: "Developed ML-based access recommendation systems for ZPA using clustering techniques to identify over-permissioned access and improve permission governance."
  },
  {
    role: "Academic Mentor",
    company: "Physics Wallah (PW)",
    duration: "Jul 2024 – Dec 2024",
    description: "Mentored 350+ JEE aspirants on stress handling, time management, and academic planning."
  }
];
