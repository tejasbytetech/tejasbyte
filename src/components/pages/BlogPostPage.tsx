"use client";
import Link from "next/link";
import { POSTS, getPostBySlug } from "@/lib/blog-posts";
import PageHero from "@/components/PageHero";

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const related = POSTS.filter(p => p.slug !== post.slug && p.cat === post.cat).slice(0, 2);
  const content = POST_CONTENT[post.slug];

  return (
    <>
      <PageHero
        label={post.cat}
        title={post.title}
        description={post.excerpt}
      />
      <section style={{ background: "#fff", padding: "64px 52px 80px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40, paddingBottom: 24, borderBottom: "1px solid rgba(91,48,232,0.1)" }}>
            <span style={{ padding: "4px 12px", borderRadius: 100, background: `${post.accent}12`, border: `1px solid ${post.accent}30`, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: post.accent }}>{post.cat}</span>
            <span style={{ fontSize: ".8rem", color: "rgba(26,16,53,0.45)" }}>{post.date}</span>
            <span style={{ fontSize: ".8rem", color: "rgba(26,16,53,0.45)" }}>{post.readTime} read</span>
          </div>

          {/* Content */}
          <div style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(26,16,53,0.8)" }}>
            {content}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(91,48,232,0.1)" }}>
            {post.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
          </div>

          {/* Back */}
          <div style={{ marginTop: 32 }}>
            <Link href="/blog" style={{ fontSize: ".85rem", fontWeight: 600, color: "#5B30E8", textDecoration: "none" }}>← Back to Blog</Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1035", marginBottom: 20 }}>Related Posts</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "20px", border: "1.5px solid rgba(91,48,232,0.12)", borderRadius: 14, background: "#F7F5FF", transition: "border-color .2s, transform .2s", cursor: "default" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${r.accent}45`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,48,232,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                      <span style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: r.accent }}>{r.cat}</span>
                      <p style={{ fontSize: ".9rem", fontWeight: 700, color: "#1A1035", marginTop: 6, lineHeight: 1.4 }}>{r.title}</p>
                      <p style={{ fontSize: ".78rem", color: "#5B30E8", fontWeight: 600, marginTop: 10 }}>Read more →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Rich content per post ─── */
const h2 = (text: string) => (
  <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1A1035", marginTop: 48, marginBottom: 16, letterSpacing: "-.02em" }}>{text}</h2>
);
const h3 = (text: string) => (
  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1A1035", marginTop: 32, marginBottom: 12 }}>{text}</h3>
);
const p = (text: string) => (
  <p style={{ marginBottom: 18 }}>{text}</p>
);
const code = (lang: string, src: string) => (
  <pre style={{ background: "#0F1629", borderRadius: 12, padding: "24px 28px", overflowX: "auto", marginBottom: 24, marginTop: 8, border: "1px solid rgba(255,255,255,0.08)" }}>
    <code style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: ".82rem", color: "#E2E8F0", lineHeight: 1.7 }}>{src.trim()}</code>
  </pre>
);
const callout = (text: string, type: "tip" | "warn" | "info" = "tip") => {
  const colors = { tip: "#22C55E", warn: "#F59E0B", info: "#5B30E8" };
  const bg = { tip: "rgba(34,197,94,0.07)", warn: "rgba(245,158,11,0.07)", info: "rgba(91,48,232,0.07)" };
  return (
    <div style={{ background: bg[type], border: `1.5px solid ${colors[type]}30`, borderLeft: `4px solid ${colors[type]}`, borderRadius: 10, padding: "16px 20px", marginBottom: 20 }}>
      <p style={{ margin: 0, color: "rgba(26,16,53,0.75)", fontSize: ".9rem" }}>{text}</p>
    </div>
  );
};
const ul = (items: string[]) => (
  <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
    {items.map((item, i) => <li key={i} style={{ marginBottom: 8, color: "rgba(26,16,53,0.75)" }}>{item}</li>)}
  </ul>
);

const POST_CONTENT: Record<string, React.ReactNode> = {
  "building-production-rag-pipelines": (
    <>
      {p("Retrieval-Augmented Generation (RAG) has become the dominant pattern for building LLM applications that need access to custom knowledge. But most tutorials show you the happy path. Here's what actually breaks when you go to production.")}
      {h2("What is RAG and Why Does It Break?")}
      {p("RAG works by embedding your documents into a vector store, then at query time, finding the most relevant chunks and stuffing them into the LLM context. Simple in theory. In practice, you have five distinct failure modes.")}
      {ul([
        "Retrieval returns irrelevant chunks — the wrong text gets sent to the LLM",
        "Chunk boundaries split critical context — an answer spans two chunks, neither is complete",
        "Embedding model mismatch — you embed with one model and query with another",
        "Context window overflow — too many chunks, the LLM ignores the later ones",
        "Stale embeddings — your vector store diverges from your source of truth",
      ])}
      {h2("Chunking Strategy: What Actually Works")}
      {p("Most tutorials use fixed-size chunking with 512 tokens and 50-token overlap. This is fine for demos. For production legal or medical documents, you need semantic chunking.")}
      {code("python", `
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Bad: Fixed chunking ignores semantic boundaries
bad_splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=50,
)

# Better: Semantic-aware chunking
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

good_splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",  # splits at semantic breaks
    breakpoint_threshold_amount=95,
)
      `)}
      {callout("For documents with headers (PDFs, markdown), always split at heading boundaries first, then apply semantic chunking within each section.", "tip")}
      {h2("The Retrieval Problem: Hybrid Search")}
      {p("Pure vector search (cosine similarity) fails when users ask precise factual questions — exact keyword matches beat embeddings for specific terms, product codes, or names.")}
      {code("python", `
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever
from langchain_pinecone import PineconeVectorStore

# Vector retriever (semantic)
vector_retriever = PineconeVectorStore(...).as_retriever(
    search_kwargs={"k": 6}
)

# BM25 retriever (keyword)
bm25_retriever = BM25Retriever.from_documents(docs)
bm25_retriever.k = 4

# Hybrid: 60% vector, 40% keyword
ensemble = EnsembleRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.6, 0.4]
)
      `)}
      {h2("Preventing Hallucinations with Source Grounding")}
      {p("The most common production complaint: 'the AI made something up.' This happens when the retrieval returns nothing relevant but the LLM answers anyway. Always instruct the model explicitly:")}
      {code("python", `
SYSTEM_PROMPT = """You are a helpful assistant. Answer ONLY based on the 
provided context. If the context does not contain the answer, say 
"I don't have enough information to answer that."

Do NOT make up information or use your training knowledge.

Context:
{context}"""
      `)}
      {callout("Add a confidence check: after generating the answer, run a second LLM call that scores whether the answer is grounded in the retrieved context. If score < 0.7, return a 'not enough information' response.", "warn")}
      {h2("Production Checklist")}
      {ul([
        "✅ Semantic chunking with heading-aware splitting",
        "✅ Hybrid search (vector + BM25) for all retrievers",
        "✅ Source citation in every response",
        "✅ Confidence scoring to prevent hallucinations",
        "✅ Embedding model pinned to a specific version",
        "✅ Nightly re-indexing job for document freshness",
        "✅ Retrieval evaluation with RAGAS metrics (faithfulness, answer relevancy)",
      ])}
      {p("Building RAG right takes more than an afternoon. But if you implement these patterns from day one, you'll avoid the painful rewrites we've seen clients go through after launching with naive implementations.")}
    </>
  ),

  "why-we-stopped-using-orms": (
    <>
      {p("We love Prisma. We use it for every new project. But at 50k requests per minute on our payment platform, we had to face a hard truth: Prisma's query generation was adding 40-80ms per query in ways we couldn't control.")}
      {h2("The Problem with ORM Query Generation")}
      {p("ORMs generate SQL dynamically. For simple CRUD operations this is fine. For analytics queries, reporting dashboards, and complex joins, the generated SQL is often significantly worse than what a human would write.")}
      {code("typescript", `
// Prisma ORM — what you write
const orders = await prisma.order.findMany({
  where: { userId, status: "completed" },
  include: {
    items: { include: { product: true } },
    payments: true,
  },
  orderBy: { createdAt: "desc" },
  take: 20,
});

// What Prisma generates (simplified) — 3 separate queries!
// SELECT * FROM orders WHERE ...
// SELECT * FROM order_items WHERE order_id IN (...)  
// SELECT * FROM products WHERE id IN (...)
// SELECT * FROM payments WHERE order_id IN (...)
      `)}
      {callout("Prisma's N+1 handling uses batched queries, not JOINs. For 20 orders with 10 items each, this is 4 queries vs 1 optimized JOIN.", "info")}
      {h2("The Pattern We Switched To")}
      {p("For our high-traffic paths (checkout, dashboard, reporting), we moved to raw SQL with a thin type-safe wrapper. Prisma stays for writes and simple reads.")}
      {code("typescript", `
import { db } from "@/lib/db"; // pg or postgres.js

// Type-safe raw query with template literals
async function getOrderSummary(userId: string, limit = 20) {
  const rows = await db<OrderRow[]>\`
    SELECT 
      o.id,
      o.total,
      o.status,
      o.created_at,
      COUNT(oi.id) AS item_count,
      ARRAY_AGG(p.name ORDER BY p.name) AS product_names
    FROM orders o
    LEFT JOIN order_items oi ON oi.order_id = o.id
    LEFT JOIN products p ON p.id = oi.product_id
    WHERE o.user_id = \${userId}
      AND o.status = 'completed'
    GROUP BY o.id, o.total, o.status, o.created_at
    ORDER BY o.created_at DESC
    LIMIT \${limit}
  \`;
  return rows;
}
      `)}
      {h2("Performance Results")}
      {ul([
        "Dashboard query: 340ms → 45ms (87% reduction)",
        "Order list endpoint: p99 dropped from 890ms to 120ms",
        "Database CPU utilization: 78% → 34%",
        "Able to remove one RDS read replica",
      ])}
      {h2("When to Use Each")}
      {ul([
        "Prisma: User auth, CRUD operations, admin panel, anything that touches < 3 tables",
        "Raw SQL: Analytics, reporting, anything with aggregations or complex JOINs",
        "Raw SQL: Any query touching > 1M rows",
        "Raw SQL: Any endpoint in your p95 > 200ms monitoring",
      ])}
      {callout("Don't abandon ORMs entirely. Use them for what they're great at — schema migrations, simple CRUD, and type safety on writes. Reserve raw SQL for performance-critical reads.", "tip")}
    </>
  ),

  "kubernetes-cost-optimization": (
    <>
      {p("Last year we were paying $12,400/month for a Kubernetes cluster running a logistics platform. Three months later, after methodically applying these techniques, the bill was $3,800. Here's exactly what we did.")}
      {h2("Step 1: Right-Sizing with VPA")}
      {p("Most K8s deployments are massively over-provisioned. Developers set resource requests conservatively to avoid OOM kills, and nobody ever revises them. VPA (Vertical Pod Autoscaler) fixes this automatically.")}
      {code("yaml", `
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: api-server-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-server
  updatePolicy:
    updateMode: "Off"  # Start in Off mode — just collect recommendations
  resourcePolicy:
    containerPolicies:
    - containerName: api
      minAllowed:
        cpu: 100m
        memory: 128Mi
      maxAllowed:
        cpu: 2
        memory: 2Gi
      `)}
      {callout("Run VPA in 'Off' mode for 2 weeks first. Check `.status.recommendation` to see what it would set. We found 70% of pods were using <30% of their requested CPU.", "tip")}
      {h2("Step 2: Spot Instances for Stateless Workloads")}
      {p("Spot instances (AWS) or Preemptible VMs (GCP) are 60-90% cheaper than on-demand. The catch: they can be terminated with 2-minute notice. For stateless API pods, this is fine with proper disruption budgets.")}
      {code("yaml", `
# Node pool with spot instances
apiVersion: v1
kind: NodePool
spec:
  template:
    spec:
      nodeClassRef:
        name: spot-node-class
      requirements:
      - key: karpenter.sh/capacity-type
        operator: In
        values: ["spot", "on-demand"]  # Fallback to on-demand
      - key: kubernetes.io/arch
        operator: In
        values: ["amd64"]
  disruption:
    consolidationPolicy: WhenUnderutilized
    consolidateAfter: 30s
      `)}
      {code("yaml", `
# PodDisruptionBudget — always keep 80% of pods up
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
spec:
  minAvailable: "80%"
  selector:
    matchLabels:
      app: api-server
      `)}
      {h2("Step 3: HPA with Custom Metrics")}
      {p("Default CPU-based HPA is too slow to react to traffic spikes. We switched to request-per-second metrics via Prometheus, which scales 3x faster.")}
      {code("yaml", `
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-server
  minReplicas: 2
  maxReplicas: 50
  metrics:
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "100"  # Scale when > 100 req/s per pod
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300  # Wait 5 min before scaling down
      `)}
      {h2("Cost Savings Summary")}
      {ul([
        "Right-sizing with VPA: -$2,100/month (removed 40% of unused CPU/memory)",
        "Spot instances for API tier: -$3,800/month (moved 70% of workload to spot)",
        "HPA tuning (fewer idle replicas): -$1,900/month",
        "Karpenter bin-packing (fewer nodes): -$800/month",
        "Total savings: $8,600/month (69%)",
      ])}
    </>
  ),

  "react-native-offline-first": (
    <>
      {p("We built a fleet management app for drivers operating in mountainous Nepal where connectivity drops to zero for hours at a time. Here's the offline-first architecture that handles it reliably.")}
      {h2("The Core Principle: Local-First")}
      {p("In an offline-first app, every write goes to the local database first. The network sync is a background process, not a blocking operation. Users can work indefinitely without connectivity.")}
      {code("typescript", `
// Every mutation goes through this pattern
async function createInspection(data: InspectionData) {
  // 1. Write to local SQLite immediately
  const localId = await db.inspections.insert({
    ...data,
    _syncStatus: "pending",
    _localId: generateId(),
    _createdAt: new Date().toISOString(),
  });

  // 2. Queue for sync (non-blocking)
  syncQueue.push({ type: "CREATE", table: "inspections", id: localId });
  
  // 3. Return immediately — UI updates instantly
  return localId;
}
      `)}
      {h2("SQLite with Expo")}
      {p("We use expo-sqlite with a custom migration system. The schema is version-controlled and migrations run automatically on app startup.")}
      {code("typescript", `
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("fleet.db");

// Run migrations on startup
async function runMigrations() {
  const currentVersion = await getDBVersion();
  
  const migrations = [
    {
      version: 1,
      sql: \`
        CREATE TABLE IF NOT EXISTS inspections (
          id TEXT PRIMARY KEY,
          vehicle_id TEXT NOT NULL,
          driver_id TEXT NOT NULL,
          status TEXT DEFAULT 'draft',
          data TEXT,  -- JSON blob
          _sync_status TEXT DEFAULT 'pending',
          _local_id TEXT UNIQUE,
          _created_at TEXT,
          _synced_at TEXT
        )
      \`
    },
  ];
  
  for (const m of migrations) {
    if (m.version > currentVersion) {
      await db.execAsync(m.sql);
      await setDBVersion(m.version);
    }
  }
}
      `)}
      {h2("The Sync Queue")}
      {p("Background sync runs every 30 seconds when online, and immediately when connectivity is restored. Conflict resolution uses last-write-wins with server as source of truth.")}
      {code("typescript", `
import NetInfo from "@react-native-community/netinfo";

class SyncQueue {
  private queue: SyncItem[] = [];
  private syncing = false;

  constructor() {
    // Sync when connectivity returns
    NetInfo.addEventListener(state => {
      if (state.isConnected && !this.syncing) {
        this.flush();
      }
    });
  }

  async flush() {
    if (this.syncing || this.queue.length === 0) return;
    this.syncing = true;

    const pending = await db.inspections.findAll({
      where: { _syncStatus: "pending" }
    });

    for (const item of pending) {
      try {
        const response = await api.post("/inspections", item);
        await db.inspections.update(item.id, {
          _syncStatus: "synced",
          _syncedAt: new Date().toISOString(),
          id: response.data.id,  // Replace local ID with server ID
        });
      } catch (err) {
        await db.inspections.update(item.id, {
          _syncStatus: "failed",
          _errorMsg: err.message,
        });
      }
    }
    this.syncing = false;
  }
}
      `)}
      {callout("Never use the server ID as your primary key locally. Generate a UUID locally, sync it, then update with the server ID. This prevents race conditions when the same record is created offline on two devices.", "warn")}
    </>
  ),

  "typescript-patterns-every-project": (
    <>
      {p("After shipping 30+ TypeScript projects across healthcare, fintech, and SaaS, these are the patterns we enforce from day one. They prevent entire categories of bugs.")}
      {h2("1. Branded Types")}
      {p("Plain strings and numbers can be accidentally swapped. Branded types make the type system prevent this at compile time.")}
      {code("typescript", `
// Without branded types — this compiles but is wrong
function chargeUser(userId: string, amount: number) { ... }
chargeUser(orderId, userId); // TS doesn't catch this!

// With branded types
type UserId = string & { readonly _brand: "UserId" };
type OrderId = string & { readonly _brand: "OrderId" };
type USD = number & { readonly _brand: "USD" };

function createUserId(id: string): UserId { return id as UserId; }
function createOrderId(id: string): OrderId { return id as OrderId; }

function chargeUser(userId: UserId, amount: USD) { ... }

// Now this is a compile error!
chargeUser(orderId, userId); // Error: Type 'OrderId' is not assignable to 'UserId'
      `)}
      {h2("2. Discriminated Unions for API States")}
      {code("typescript", `
// Bad — checking .data when in error state compiles fine
type ApiState = {
  loading: boolean;
  data?: User;
  error?: string;
};

// Good — exhaustive type checking
type ApiState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function UserProfile({ state }: { state: ApiState<User> }) {
  switch (state.status) {
    case "loading": return <Spinner />;
    case "error": return <Error message={state.error} />;
    case "success": return <Profile user={state.data} />;
    // TypeScript warns if you forget a case!
  }
}
      `)}
      {h2("3. Zod for Runtime Validation")}
      {p("TypeScript types disappear at runtime. Use Zod to validate at the API boundary — anything coming from external sources (user input, API responses, env vars).")}
      {code("typescript", `
import { z } from "zod";

const CreateOrderSchema = z.object({
  userId: z.string().uuid(),
  items: z.array(z.object({
    productId: z.string().uuid(),
    quantity: z.number().int().min(1).max(100),
  })).min(1),
  currency: z.enum(["USD", "EUR", "NPR"]),
});

type CreateOrderInput = z.infer<typeof CreateOrderSchema>;

// In your API handler
export async function POST(req: Request) {
  const body = await req.json();
  const result = CreateOrderSchema.safeParse(body);
  
  if (!result.success) {
    return Response.json({ errors: result.error.flatten() }, { status: 400 });
  }
  
  // result.data is fully typed and validated
  const order = await createOrder(result.data);
  return Response.json(order);
}
      `)}
      {callout("Define your Zod schemas first, then derive TypeScript types from them with z.infer<>. This ensures runtime and compile-time validation always stay in sync.", "tip")}
    </>
  ),

  "nextjs-supabase-full-stack": (
    <>
      {p("After building 10+ production apps with Next.js and Supabase, we've settled on an opinionated setup that handles auth, RLS, real-time, and admin panels. Here's the full setup.")}
      {h2("Project Structure")}
      {code("typescript", `
src/
  app/
    (auth)/         # Auth pages (login, register)
    (dashboard)/    # Protected dashboard routes
    admin/          # Admin panel (separate layout)
    api/            # API routes
  lib/
    supabase/
      client.ts     # Browser client
      server.ts     # Server client (for RSC)
      middleware.ts # Auth middleware
    db/
      schema.ts     # Zod schemas matching DB
  components/
    ui/             # Reusable components
      `)}
      {h2("Supabase Client Setup")}
      {code("typescript", `
// lib/supabase/server.ts — for Server Components and API routes
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}
      `)}
      {h2("Row Level Security Patterns")}
      {p("RLS is the killer feature. Data security is enforced at the database level — even if your application code has a bug, users can only ever see their own data.")}
      {code("sql", `
-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Users can only see their own posts
CREATE POLICY "users_own_posts" ON posts
  FOR ALL USING (auth.uid() = user_id);

-- Published posts are visible to everyone
CREATE POLICY "published_posts_public" ON posts
  FOR SELECT USING (status = 'published');

-- Admin role can see everything
CREATE POLICY "admin_all_access" ON posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
      `)}
      {h2("Admin Panel Pattern")}
      {p("We build a custom admin panel using the Supabase service role key (server-side only), which bypasses RLS. Never expose this key to the browser.")}
      {code("typescript", `
// app/admin/layout.tsx — server component
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) redirect("/login");
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  
  if (profile?.role !== "admin") redirect("/dashboard");
  
  return <div>{children}</div>;
}
      `)}
      {callout("Create a separate Supabase client using SUPABASE_SERVICE_ROLE_KEY for admin operations. This key bypasses RLS and should NEVER be sent to the browser.", "warn")}
    </>
  ),
};
