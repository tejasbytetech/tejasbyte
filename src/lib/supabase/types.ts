export interface TeamMemberRow {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  tags: string[];
  linkedin: string | null;
  social_urls: string[];
  photo_url: string | null;
  is_founder: boolean;
  is_placeholder: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface HiringRow {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;           // "Full-time" | "Part-time" | "Contract"
  experience: string;     // e.g. "3–5 years"
  description: string;
  requirements: string[]; // array of bullet points
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
