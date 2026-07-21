export interface CompanySection {
  id: string;
  title: string;
  subtitle?: string;
  content: string | string[];
  icon: string; // Lucide icon name
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}

export interface RoastProfile {
  level: 'Light' | 'Medium' | 'Dark';
  roastName: string;
  flavorNotes: string[];
  aroma: string;
  body: string;
  acidity: string;
  description: string;
  colorClass: string;
  textClass: string;
}

export interface ProductDetails {
  name: string;
  origin: string;
  variety: string;
  elevation: string;
  process: string;
  brewingInstructions: {
    method: string;
    ratio: string;
    temp: string;
    grind: string;
  }[];
  advantages: string[];
  certifications: string[];
}

export interface MockupScene {
  id: string;
  title: string;
  description: string;
  imageKey: string; // references generated image or dynamic rendering
  caption: string;
  details: string[];
}

export interface PhotoAsset {
  id: string;
  category: 'Commercial' | 'Lifestyle' | 'Luxury' | 'Studio';
  title: string;
  caption: string;
  style: string;
  lighting: string;
  elements: string[];
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface LogoApplication {
  id: string;
  name: string;
  description: string;
  bgClass: string;
  textClass: string;
  previewType: 'kemasan' | 'mug' | 'totebag' | 'kop_surat' | 'kartu_nama';
}
