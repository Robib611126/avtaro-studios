export interface PricingTier {
  name: string;
  priceInr: string;
  priceUsd: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface StepItem {
    step: string;
    title: string;
    description: string;
}
