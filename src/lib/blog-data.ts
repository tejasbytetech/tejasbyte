export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cat: string;
  date: string;
  readTime: string;
  tags: string[];
  accent: string;
  content: BlogSection[];
}

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "callout"; variant: "info" | "tip" | "warning"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

