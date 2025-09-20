export interface RevealCard {
  id: number;
  title: string;
  icon?: string;
  subtitle?: string;
  description?: string;
  data?: string[];
}

export interface FrameworkCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PhilosophyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
}

export interface OutcomeCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  metrics: OutcomeMetric[];
}

export interface OutcomeMetric {
  id: number;
  value: string;
  label: string;
  position: { x: number; y: number };
  width: string;
  color: 'metric-pink' | 'metric-green';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  content: string;
  avatar: string;
  tags: string[];
}

export interface CompanyValues {
  slide: number;
  title: string;
  image: string;
  data: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface CompanyImpacts {
  slide: number;
  title: string;
  image: string;
  numericData: {
    id: number;
    number: string;
    description: string;
  }[],
  data: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface CompanyNumerics {
  slide: number;
  title: string;
  data: {
    id: number;
    icon: string;
    number: string;
    description: string;
  }[];
}

export interface InsightArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export interface TeamMembers {
  id: number;
  name: string;
  title: string;
  team: 'core' | 'advisor';
  image: string;
  linkedin: string;
}
