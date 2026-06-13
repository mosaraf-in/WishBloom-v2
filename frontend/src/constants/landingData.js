import {
  Eye,
  Heart,
  Share2,
  Gift,
  Palette,
  Image,
  Music,
  Cake,
  HeartHandshake,
  Flower2,
  Users,
} from "lucide-react";

export const HERO_SLIDES = [
  {
    id: "birthday",
    label: "Birthday",
    title: "Happy Birthday!",
    message: "Wishing you a day filled with love, laughter and happiness.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
  },
  {
    id: "anniversary",
    label: "Anniversary",
    title: "Happy Anniversary!",
    message: "You are my today and all of my tomorrows.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
  },
  {
    id: "love",
    label: "Love",
    title: "Just For You ❤️",
    message: "Every moment with you is special.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
  },
  {
    id: "thankyou",
    label: "Thank You",
    title: "Thank You!",
    message: "Your kindness means the world to me.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
  },
  {
    id: "friendship",
    label: "Friendship",
    title: "Best Friends Forever",
    message: "Thank you for always being there.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
];

export const STATS = [
  {
    icon: Eye,
    value: "12.5K",
    label: "Views",
  },
  {
    icon: Heart,
    value: "3.2K",
    label: "Hearts",
  },
  {
    icon: Share2,
    value: "1.1K",
    label: "Shares",
  },
  {
    icon: Gift,
    value: "842",
    label: "Wishes Created",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    color: "pink",
    title: "Create Your Wish",
    description:
      "Choose a beautiful theme, add your photos, music and write your heartfelt message.",
    features: ["Themes", "Photos", "Music", "Message"],
  },
  {
    step: "02",
    color: "violet",
    title: "Preview Your Wish",
    description:
      "See exactly how your digital wish looks and make sure everything is perfect.",
    features: ["Live Preview"],
  },
  {
    step: "03",
    color: "green",
    title: "Share With Loved Ones",
    description:
      "Share your unique wish link with anyone, anywhere and make their day extra special.",
    features: ["WhatsApp", "Instagram", "Facebook", "Link"],
  },
];

export const FEATURES = [
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "Choose from stunning themes for every occasion.",
    details: [
      "Birthday Themes",
      "Love Themes",
      "Anniversary Themes",
      "Friendship Themes",
    ],
  },
  {
    icon: Image,
    title: "Add Photos",
    description: "Upload and showcase your favorite memories.",
    details: [
      "Multiple Photos",
      "Gallery Support",
      "HD Upload",
      "Easy Management",
    ],
  },
  {
    icon: Music,
    title: "Background Music",
    description: "Add a song that makes your wish extra special.",
    details: [
      "Background Songs",
      "Auto Play",
      "Romantic Tracks",
      "Custom Audio",
    ],
  },
  {
    icon: Share2,
    title: "Share Anywhere",
    description: "Share your wish with anyone, anywhere.",
    details: [
      "WhatsApp Sharing",
      "Facebook Sharing",
      "Instagram Sharing",
      "Direct Link",
    ],
  },
];

export const CATEGORIES = [
  {
    icon: Cake,
    label: "Birthday",
  },
  {
    icon: Heart,
    label: "Anniversary",
  },
  {
    icon: HeartHandshake,
    label: "Love",
  },
  {
    icon: Flower2,
    label: "Thank You",
  },
  {
    icon: Users,
    label: "Friendship",
  },
];
