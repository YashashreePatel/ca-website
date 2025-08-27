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

export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  // icon: string;
  position: { x: number; y: number };
  textPosition: 'left' | 'right' | 'top' | 'bottom';
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
