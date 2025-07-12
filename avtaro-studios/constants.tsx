import React from 'react';
import type { PricingTier, FaqItem, FeatureItem, StepItem } from './types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
        title: "No Camera Needed",
        description: "Scale your content creation without ever needing to step in front of a camera again."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" /></svg>,
        title: "Full Control",
        description: "You have complete control over your script, your message, and your hyper-realistic AI avatar."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>,
        title: "Cinematic Editing",
        description: "Every video is post-produced with transitions, music, graphics, and subtitles for a publish-ready result."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        title: "Ethical & Secure",
        description: "We use HeyGen's secure platform for a one-time, consent-based avatar creation process."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M5 9a7 7 0 107-7" /></svg>,
        title: "Reusable Avatar",
        description: "Your one-time avatar creation can be used for unlimited future videos, making content creation effortless."
    },
     {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-3.516 6.382l-4.242 4.243" /></svg>,
        title: "Voice & Language",
        description: "Utilize optional voice cloning and multilingual outputs to reach a global audience in their native tongue."
    }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
    {
        step: "01",
        title: "One-Time Consent",
        description: "Record a simple, one-time consent video from your phone or laptop."
    },
    {
        step: "02",
        title: "AI Avatar Creation",
        description: "We generate your hyper-realistic, secure AI avatar for your exclusive use."
    },
    {
        step: "03",
        title: "Submit Your Script",
        description: "Send us your video topic or a finalized script. We handle the rest."
    },
    {
        step: "04",
        title: "Cinematic Video Delivery",
        description: "Receive a fully edited, publish-ready video in just 3-5 days."
    }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    priceInr: "₹5,000",
    priceUsd: "$60",
    description: "Perfect for testing the waters with a single, powerful video.",
    features: ["1 Video per month", "Standard Editing", "Subtitles Included"],
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    name: "Pro",
    priceInr: "₹15,000",
    priceUsd: "$180",
    description: "Best for creators and founders who need consistent content.",
    features: ["3 Videos per month", "Cinematic Editing", "Motion Graphics", "Music & Transitions"],
    isPopular: true,
    ctaText: "Choose Pro"
  },
  {
    name: "Executive",
    priceInr: "₹30,000+",
    priceUsd: "$360+",
    description: "For agencies and HNIs needing high-volume, custom support.",
    features: ["5+ Videos per month", "Dedicated Support", "Custom Add-ons", "Priority Delivery"],
    isPopular: false,
    ctaText: "Contact Sales"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is my AI avatar safe and secure?",
    answer: "Absolutely. We use HeyGen, a leading and secure platform, for all avatar creation. Your avatar is created with your explicit, one-time consent and is for your exclusive use only."
  },
  {
    question: "Do I need to record a new video for every new piece of content?",
    answer: "No, that's the beauty of it. You only need to record one consent video. After your avatar is created, it can be reused for unlimited future videos. Just send us the script."
  },
  {
    question: "How long does it take to get my finished video?",
    answer: "Our standard delivery time is 3-5 business days per video. We focus on quality to ensure every video is cinematic and ready to publish."
  },
  {
    question: "Can my avatar speak in other languages like Hindi or Spanish?",
    answer: "Yes! We offer multilingual output as an add-on service. This allows you to reach a global audience by delivering content in various languages with a natural-sounding voice."
  },
   {
    question: "What add-on services do you offer?",
    answer: "We offer several add-ons to enhance your videos, including hyper-realistic voice cloning, multilingual outputs, and custom thumbnail design for platforms like YouTube."
  }
];

export const ADDONS = [
    { name: "Voice Cloning", description: "Create a hyper-realistic clone of your voice." },
    { name: "Multilingual Output", description: "Deliver content in Hindi, Spanish, and more." },
    { name: "Custom Thumbnails", description: "Professionally designed thumbnails for your videos." }
];
