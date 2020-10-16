export type Certification = {
  name: string;
  imageUrl: string;
  link: string;
};

export type HistoryItem = {
  employer: string;
  positions: Position[];
};

export type Position = {
  title: string;
  location: string;
  start: string;
  end: string;
  duties: string[];
  clients?: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  appleAppStoreUrl?: string;
  googlePlayUrl?: string;
};

export type Section = {
  id: string;
  label: string;
};

export type SkillSet = {
  subject: string;
  skills: string[];
};