export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  context: string;
  year: string;
  /** One line, always visible. Keeps the card scannable. */
  summary: string;
  /** Full technical detail, revealed on demand. */
  description: string;
  role?: string;
  techStack: string[];
  links: ProjectLink[];
};

export type SkillCategory = {
  name: string;
  skills: string[];
};
