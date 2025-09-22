export interface RevealCard {
  order: number;
  title: string;
  icon?: string;
  subtitle?: string;
  description?: string;
  content?: string[];
}

export interface Service {
  service_name: string;
  card_content: string;
  image: string;
  link: string;
  page_content: string[];
  outcome_text: string;

  why: ServiceWhy[];
  for_whom: ServiceForWhom[];
  outcome: ServiceOutcome[];
  our_approach: ServiceApproach[];
}

export interface ServiceWhy {
  id: number;
  service: number;
  highlight_text: string;
  content: string;
}

export interface ServiceForWhom {
  id: number;
  service: number;
  highlight_text: string;
  content: string;
}

export interface ServiceOutcome {
  id: number;
  service: number;
  highlight_text: string;
  content: string;
}

export interface ServiceApproach {
  id: number;
  service: number;
  order: number;
  title: string;
  content: string[];
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
  author_name: string;
  author_role: string;
  author_company: string;
  company_industry: string;
  content: string;
  author_image: string;
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
  read_time: string;
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
