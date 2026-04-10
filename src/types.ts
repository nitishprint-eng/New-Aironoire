export interface Product {
  id: number | string;
  title: string;
  slug: string;
  category: string;
  subCategory?: string;
  price: number;
  image: string;
  description?: string;
  images?: string[];
  sizes?: { label: string; price: number }[];
  basePrice?: number;
  largePrice?: number;
  extraLargePrice?: number;
  smallPrice?: number;
  mediumPrice?: number;
  color?: string;
  material?: string;
  orientation?: string;
  tag?: string;
  rating?: number;
  reviews?: number;
  order?: number;
}
