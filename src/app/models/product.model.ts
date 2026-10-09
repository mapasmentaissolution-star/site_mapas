export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  categories: string[];
  image: string;
  gallery?: string[];
  mapsCount?: number;
  format: string;
  pagesEstimated?: number;
  rating: number;
  reviewsCount: number;
  whatYouGet: string[];
  targetAudience: string[];
  subjects?: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isComingSoon?: boolean;
  kiwifyCheckoutUrl: string;
  samplePreview?: {
    title: string;
    description: string;
    previewUrl: string;
  };
}

export interface CategoryInfo {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  badgeText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  stars: number;
  comment: string;
  material: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}
