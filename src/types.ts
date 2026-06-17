/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OrderData {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  quantity: string;
  notes?: string;
  whatsappOrdered: boolean;
}

export interface PackageOption {
  id: string;
  bottles: number;
  price: number;
  label: string;
  badge?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatarInitials: string;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  benefits: string[];
}
