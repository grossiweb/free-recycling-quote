export interface HeroData {
  subtitle?: string
  description?: string
  backgroundType?: 'gradient' | 'image' | 'dark'
  backgroundImage?: { sourceUrl: string; altText: string }
}
