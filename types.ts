// TypeScript interfaces for Cosmic CMS content

// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Store interface
export interface Store extends CosmicObject {
  type: 'stores'
  metadata: {
    store_name: string
    location: string
    sustainability_rating: number
    eco_features?: string[]
    store_image?: {
      url: string
      imgix_url: string
    }
    description?: string
    active?: boolean
  }
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products'
  metadata: {
    product_name: string
    sustainability_score: number
    eco_certifications?: string[]
    product_image?: {
      url: string
      imgix_url: string
    }
    category: string
    description?: string
    eco_alternative_to?: string
  }
}

// Eco Tip interface
export interface EcoTip extends CosmicObject {
  type: 'eco-tips'
  metadata: {
    tip_title: string
    content: string
    category: {
      key: string
      value: string
    }
    featured_image?: {
      url: string
      imgix_url: string
    }
    impact_level?: string
  }
}

// Challenge interface
export interface Challenge extends CosmicObject {
  type: 'challenges'
  metadata: {
    challenge_name: string
    description: string
    points_reward: number
    duration_days: number
    challenge_type: {
      key: string
      value: string
    }
    challenge_icon?: string
    active?: boolean
  }
}

// Achievement interface
export interface Achievement extends CosmicObject {
  type: 'achievements'
  metadata: {
    badge_name: string
    description: string
    badge_icon?: string
    unlock_criteria: string
    points_value: number
    tier: {
      key: string
      value: string
    }
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}

// Type guards
export function isStore(obj: CosmicObject): obj is Store {
  return obj.type === 'stores'
}

export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products'
}

export function isEcoTip(obj: CosmicObject): obj is EcoTip {
  return obj.type === 'eco-tips'
}

export function isChallenge(obj: CosmicObject): obj is Challenge {
  return obj.type === 'challenges'
}

export function isAchievement(obj: CosmicObject): obj is Achievement {
  return obj.type === 'achievements'
}