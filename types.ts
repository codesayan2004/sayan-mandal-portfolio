
export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  detail: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}
