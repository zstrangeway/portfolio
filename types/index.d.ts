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
  date: string;
  url: string;
  githubUrl: string;
  details: string[];
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillSet = {
  subject: string;
  skills: Skill[];
};
