export interface BlogPost {
  slug: string;
  cat: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  accent: string;
}

export const POSTS: BlogPost[] = [
  {
    slug: "building-production-rag-pipelines",
    cat: "AI/ML", date: "July 28, 2026", readTime: "8 min",
    title: "Building Production RAG Pipelines: Lessons from 10+ Deployments",
    excerpt: "We've built RAG pipelines for healthcare, legal tech, and SaaS. Here's what actually breaks in production — and how to fix it before it costs you users.",
    tags: ["RAG", "LangChain", "Pinecone", "OpenAI"], accent: "#5B30E8",
  },
  {
    slug: "why-we-stopped-using-orms",
    cat: "Engineering", date: "July 14, 2026", readTime: "6 min",
    title: "Why We Stopped Using ORMs for High-Traffic PostgreSQL Queries",
    excerpt: "At 50k requests/minute, the abstraction cost of ORMs becomes measurable. Here's the query pattern we switched to and the performance delta we saw.",
    tags: ["PostgreSQL", "Node.js", "Performance"], accent: "#7C5CFC",
  },
  {
    slug: "kubernetes-cost-optimization",
    cat: "Cloud", date: "June 30, 2026", readTime: "10 min",
    title: "Kubernetes Cost Optimization: From $12k/month to $4k Without Sacrificing Uptime",
    excerpt: "A practical guide to right-sizing your K8s cluster, using spot instances safely, and setting up VPA/HPA so you only pay for what you need.",
    tags: ["Kubernetes", "AWS", "Cost", "DevOps"], accent: "#A78BFA",
  },
  {
    slug: "react-native-offline-first",
    cat: "Mobile", date: "June 15, 2026", readTime: "7 min",
    title: "React Native Offline-First Architecture for Unreliable Networks",
    excerpt: "How we built offline-first mobile apps for fleet drivers in remote areas — conflict resolution, sync queues, and background flushing that works.",
    tags: ["React Native", "SQLite", "Expo", "Offline"], accent: "#5B30E8",
  },
  {
    slug: "typescript-patterns-every-project",
    cat: "Engineering", date: "June 2, 2026", readTime: "5 min",
    title: "The TypeScript Patterns We Use on Every New Project",
    excerpt: "After 30+ TypeScript projects — branded types, discriminated unions, schema-first validation. The patterns that catch bugs before runtime.",
    tags: ["TypeScript", "Patterns", "Best Practices"], accent: "#7C5CFC",
  },
  {
    slug: "nextjs-supabase-full-stack",
    cat: "Engineering", date: "May 15, 2026", readTime: "9 min",
    title: "Next.js + Supabase: The Full-Stack Setup We Use for Every Client Project",
    excerpt: "Our opinionated starter: Next.js 15, Supabase, RLS, real-time subscriptions, and a custom admin panel pattern that scales.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"], accent: "#A78BFA",
  },
];

export function getPostBySlug(slug: string) {
  return POSTS.find(p => p.slug === slug);
}
