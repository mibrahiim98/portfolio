export type NavItem = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary?: string;
  responsibilities: string[];
  achievements?: string[];
  stack: string[];
};

export type Highlight = {
  title: string;
  description: string;
  tags: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectLink = {
  name: string;
  stack: string[];
  description: string;
  url?: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  details: string[];
  projects?: ProjectLink[];
};

export type Language = {
  name: string;
  level: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  location: string;
  email: string;
  photo: string;
  cvPath: string;
  intro: string;
  stats: Stat[];
  socials: SocialLink[];
  nav: NavItem[];
  experience: Role[];
  highlights: Highlight[];
  marquee: { primary: string[]; secondary: string[] };
  skills: SkillGroup[];
  leadership: { label: string; text: string }[];
  education: EducationItem[];
  languages: Language[];
};
