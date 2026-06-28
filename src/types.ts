/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isNutFree?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  role?: string;
  avatar: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountText: string;
  image: string;
  code?: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bread' | 'pastry' | 'cake' | 'donut' | 'coffee' | 'interior';
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOption?: string; // e.g. "Whole Cake", "Slice", "Hot", "Iced"
}
