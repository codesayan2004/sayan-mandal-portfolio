
export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
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
