/**
 * Theme Cluster System
 *
 * Every meme belongs to a topic cluster for topical authority.
 * Google understands themed content better than random jokes.
 */

import { ThemeCluster } from "./meme-patterns"

export interface ClusterConfig {
  id: ThemeCluster
  name: string
  slug: string
  title: string
  description: string
  metaDescription: string
  keywords: string[]
  priority: number // 1-10, higher = more important for authority building
  relatedClusters: ThemeCluster[]
}

// 12 Primary Theme Clusters - ordered by SEO potential
export const CLUSTERS: ClusterConfig[] = [
  {
    id: "work",
    name: "Work & Office",
    slug: "work",
    title: "Insanity Wolf Work Memes | Office Rage & Workplace Humor",
    description: "Extreme responses to everyday workplace frustrations. Printers, meetings, coworkers, and corporate chaos.",
    metaDescription: "Insanity Wolf work memes: extreme reactions to office life, bad meetings, printer jams, and coworker chaos. The workplace survival guide.",
    keywords: ["insanity wolf work", "office memes", "work memes", "workplace humor", "corporate memes", "boss memes", "coworker memes"],
    priority: 10,
    relatedClusters: ["monday", "coffee", "technology"],
  },
  {
    id: "monday",
    name: "Monday & Mornings",
    slug: "monday",
    title: "Insanity Wolf Monday Memes | Morning Rage & Weekend Grief",
    description: "When Monday morning hits and violence is the only answer. Alarms, Sundays, and the death of weekends.",
    metaDescription: "Insanity Wolf Monday memes: the only appropriate response to alarm clocks and the end of weekends. Choose violence.",
    keywords: ["insanity wolf monday", "monday memes", "morning memes", "alarm memes", "weekend memes", "sunday scaries"],
    priority: 9,
    relatedClusters: ["work", "coffee", "sleep"],
  },
  {
    id: "coffee",
    name: "Coffee & Caffeine",
    slug: "coffee",
    title: "Insanity Wolf Coffee Memes | Caffeine Rage & Morning Survival",
    description: "When there's no coffee, there's no mercy. Caffeine emergencies and the rituals of survival.",
    metaDescription: "Insanity Wolf coffee memes: what happens when the coffee runs out. Caffeine addiction, rage, and morning survival tactics.",
    keywords: ["insanity wolf coffee", "coffee memes", "caffeine memes", "morning coffee", "no coffee memes", "espresso memes"],
    priority: 8,
    relatedClusters: ["monday", "work", "sleep"],
  },
  {
    id: "relationships",
    name: "Relationships & Dating",
    slug: "relationships",
    title: "Insanity Wolf Relationship Memes | Dating Chaos & Ex Drama",
    description: "Extreme responses to dating, exes, and the chaos of human connection. Block the entire area code.",
    metaDescription: "Insanity Wolf relationship memes: dealing with exes, ghosting, dating disasters, and romantic revenge. Nuclear options only.",
    keywords: ["insanity wolf relationships", "dating memes", "ex memes", "relationship memes", "breakup memes", "dating humor"],
    priority: 8,
    relatedClusters: ["social", "technology"],
  },
  {
    id: "technology",
    name: "Technology & Devices",
    slug: "technology",
    title: "Insanity Wolf Tech Memes | WiFi Rage & Device Destruction",
    description: "When technology fails, violence succeeds. WiFi, phones, computers, and digital chaos.",
    metaDescription: "Insanity Wolf technology memes: extreme reactions to WiFi outages, dead phones, crashes, and tech failures.",
    keywords: ["insanity wolf tech", "wifi memes", "phone memes", "computer memes", "tech rage", "technology humor"],
    priority: 7,
    relatedClusters: ["work", "social"],
  },
  {
    id: "social",
    name: "Social Situations",
    slug: "social",
    title: "Insanity Wolf Social Memes | Public Rage & Stranger Encounters",
    description: "Establishing dominance in everyday social situations. Line cutters, loud chewers, slow walkers.",
    metaDescription: "Insanity Wolf social memes: dealing with annoying strangers, line cutters, and social violations through dominance.",
    keywords: ["insanity wolf social", "stranger memes", "public memes", "line memes", "social anxiety memes", "dominance memes"],
    priority: 7,
    relatedClusters: ["driving", "neighbors", "relationships"],
  },
  {
    id: "gym",
    name: "Gym & Fitness",
    slug: "gym",
    title: "Insanity Wolf Gym Memes | Fitness Rage & Workout Chaos",
    description: "Extreme gym mentality. Skip leg day? Become legs. Rest day? Rest is for the weak.",
    metaDescription: "Insanity Wolf gym memes: extreme workout mentality, gains, and the primal rage of fitness culture.",
    keywords: ["insanity wolf gym", "gym memes", "workout memes", "fitness memes", "gains memes", "leg day memes"],
    priority: 6,
    relatedClusters: ["food", "sleep", "monday"],
  },
  {
    id: "food",
    name: "Food & Eating",
    slug: "food",
    title: "Insanity Wolf Food Memes | Hangry Rage & Stolen Lunch Drama",
    description: "When someone steals your lunch, steal their identity. Food crimes and extreme hunger.",
    metaDescription: "Insanity Wolf food memes: hangry reactions, stolen lunch revenge, and extreme responses to food crimes.",
    keywords: ["insanity wolf food", "food memes", "hungry memes", "lunch memes", "hangry memes", "eating memes"],
    priority: 6,
    relatedClusters: ["work", "coffee", "gym"],
  },
  {
    id: "sleep",
    name: "Sleep & Insomnia",
    slug: "sleep",
    title: "Insanity Wolf Sleep Memes | Insomnia Rage & 3 AM Thoughts",
    description: "Sleep is for the weak. 3 AM is prime time. Embracing the nocturnal lifestyle.",
    metaDescription: "Insanity Wolf sleep memes: insomnia, 3 AM thoughts, and the rejection of human rest cycles.",
    keywords: ["insanity wolf sleep", "insomnia memes", "3am memes", "sleep deprivation", "cant sleep memes", "nocturnal memes"],
    priority: 5,
    relatedClusters: ["monday", "coffee", "neighbors"],
  },
  {
    id: "driving",
    name: "Driving & Traffic",
    slug: "driving",
    title: "Insanity Wolf Driving Memes | Road Rage & Traffic Chaos",
    description: "Traffic jam? Become ungovernable. Red lights are suggestions. Vehicular enlightenment.",
    metaDescription: "Insanity Wolf driving memes: extreme road rage, traffic frustrations, and parking lot warfare.",
    keywords: ["insanity wolf driving", "road rage memes", "traffic memes", "parking memes", "driving humor", "car memes"],
    priority: 5,
    relatedClusters: ["work", "social", "monday"],
  },
  {
    id: "neighbors",
    name: "Neighbors & Living",
    slug: "neighbors",
    title: "Insanity Wolf Neighbor Memes | HOA Wars & Noise Battles",
    description: "When the neighbor's dog barks, bark louder. Territorial dominance and suburban warfare.",
    metaDescription: "Insanity Wolf neighbor memes: dealing with loud neighbors, barking dogs, and HOA tyranny.",
    keywords: ["insanity wolf neighbors", "neighbor memes", "apartment memes", "hoa memes", "loud neighbor", "barking dog memes"],
    priority: 4,
    relatedClusters: ["sleep", "social", "driving"],
  },
  {
    id: "money",
    name: "Money & Finance",
    slug: "money",
    title: "Insanity Wolf Money Memes | Financial Chaos & Bill Rage",
    description: "Rent is due? Due is a suggestion. Budget exceeded? Budgets are for cowards.",
    metaDescription: "Insanity Wolf money memes: extreme reactions to bills, rent, overdraft fees, and financial chaos.",
    keywords: ["insanity wolf money", "money memes", "broke memes", "rent memes", "finance memes", "budget memes"],
    priority: 4,
    relatedClusters: ["work", "food", "coffee"],
  },
]

// Get cluster by ID
export function getCluster(id: ThemeCluster): ClusterConfig | undefined {
  return CLUSTERS.find(c => c.id === id)
}

// Get cluster by slug
export function getClusterBySlug(slug: string): ClusterConfig | undefined {
  return CLUSTERS.find(c => c.slug === slug)
}

// Get related clusters
export function getRelatedClusters(id: ThemeCluster): ClusterConfig[] {
  const cluster = getCluster(id)
  if (!cluster) return []
  return cluster.relatedClusters
    .map(relId => getCluster(relId))
    .filter((c): c is ClusterConfig => c !== undefined)
}

// Get all clusters sorted by priority
export function getClustersByPriority(): ClusterConfig[] {
  return [...CLUSTERS].sort((a, b) => b.priority - a.priority)
}

// Get top N clusters for hub page display
export function getTopClusters(count: number = 6): ClusterConfig[] {
  return getClustersByPriority().slice(0, count)
}
