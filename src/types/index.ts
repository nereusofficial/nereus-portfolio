export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
}

export type JourneyType = "education" | "project" | "certification" | "activity" | "work";

export interface Experience {
  id: string;
  title: string;
  place: string;
  period: string;
  description: string;
  type: JourneyType;
  link?: string;
}

export interface Profile {
  name: string;
  role: string;
  pitch: string;
  bio: string;
  github: string;
  indeed: string;
  facebook: string;
  instagram: string;
  email: string;
}

export interface NavLink {
  id: string;
  label: string;
}
