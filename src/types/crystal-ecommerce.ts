export type CrystalCategory = 
  | "bracelets" 
  | "raw-stones" 
  | "towers-wands" 
  | "healing-sets" 
  | "clusters-geodes" 
  | "tumbled-pocket";

export type ChakraType = 
  | "Root" 
  | "Sacral" 
  | "Solar Plexus" 
  | "Heart" 
  | "Throat" 
  | "Third Eye" 
  | "Crown" 
  | "All Chakras";

export type IntentionType = 
  | "Wealth & Abundance" 
  | "Calm & Stress Relief" 
  | "Protection & Shielding" 
  | "Love & Emotional Healing" 
  | "Focus & Mental Clarity" 
  | "Spiritual Awakening";

export type ZodiacType = 
  | "Aries" | "Taurus" | "Gemini" | "Cancer" 
  | "Leo" | "Virgo" | "Libra" | "Scorpio" 
  | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces" 
  | "All Signs";

export interface ProductReview {
  id: string;
  author: string;
  rating: number; // 1-5
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  location?: string;
}

export interface CrystalProduct {
  id: string;
  name: string;
  slug: string;
  category: CrystalCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discountPercentage?: number;
  
  // Imagery
  images: string[];
  thumbnail: string;
  
  // Descriptions
  shortDesc: string;
  description: string;
  healingBenefits: string[];
  
  // Specifications
  chakra: ChakraType[];
  intention: IntentionType[];
  zodiac: ZodiacType[];
  beadSize?: string; // e.g. "8mm", "10mm"
  weight?: string; // e.g. "250g"
  dimensions?: string; // e.g. "7cm x 3cm"
  origin: string; // e.g. "Brazil", "Madagascar", "India"
  
  // Reiki & Care
  reikiAttuned: boolean;
  cleansingMethod: string;
  affirmation: string;
  
  // Reviews
  reviews?: ProductReview[];
}

export interface CartItem {
  product: CrystalProduct;
  quantity: number;
  selectedBeadSize?: string;
  customIntentNote?: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface FilterState {
  searchQuery: string;
  category: CrystalCategory | "all";
  chakra: ChakraType | "all";
  intention: IntentionType | "all";
  zodiac: ZodiacType | "all";
  priceRange: [number, number];
  sortBy: "featured" | "price-low" | "price-high" | "rating" | "newest";
  inStockOnly: boolean;
}
