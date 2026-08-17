"use client";
import { useState, useRef } from "react";

interface Props {
  memberId: string;
  currentUrl: string | null;
  name: string;
  initials: string;
  accent: string;
}

export default function PhotoUpload({ memberId, currentUrl, name, initials, accent }: Props) {
  const [preview, setPreview]   = useState<string | null>(currentUrl);
  const [uploading, setUploading] = useState(false);
  const [error, setError]       = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setError("Max file size is 5MB"); return; }

    setUploading(true);
    setError("");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("memberId", memberId);

    const res = await fetch("/api/team-photo", { method: "POST", body: fd });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Upload failed");
    } else {
      setPreview(data.url);
    }
    setUploading(false);
  };

  const remove = async () => {
    setUploading(true);
    await fetch("/api/team-photo", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memberId }),
    });
    setPreview(null);
    setUploading(false);
  };

  return (
    <div>
      <label style={{ display: "block", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(26,16,53,0.4)", marginBottom: 12 }}>
        Photo
      </label>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
        {/* Preview */}
        <div style={{
          width: 100, height: 100, borderRadius: 14, overflow: "hidden", flexShrink: 0,
          border: "2px solid rgba(91,48,232,0.15)",
          background: preview ? "transparent" : `linear-gradient(135deg, ${accent} 0%, ${accent}88 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem", fontWeight: 800, color: "#fff",
          position: "relative",
        }}>
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            initials
          )}
          {uploading && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg style={{ animation: "spin 1s linear infinite" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          )}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button type="button" onClick={() => inputRef.current?.click()} disabled={uploading}
            style={{
              padding: "9px 20px", borderRadius: 9,
              background: "rgba(91,48,232,0.08)", border: "1.5px solid rgba(91,48,232,0.2)",
              color: "#5B30E8", cursor: uploading ? "not-allowed" : "pointer",
              fontSize: ".82rem", fontWeight: 700,
            }}>
            {preview ? "Replace Photo" : "Upload Photo"}
          </button>

          {preview && (
            <button type="button" onClick={remove} disabled={uploading}
              style={{
                padding: "9px 20px", borderRadius: 9,
                background: "rgba(239,68,68,0.06)", border: "1.5px solid rgba(239,68,68,0.15)",
                color: "#DC2626", cursor: uploading ? "not-allowed" : "pointer",
                fontSize: ".82rem", fontWeight: 700,
              }}>
              Remove Photo
            </button>
          )}

          <p style={{ fontSize: ".72rem", color: "rgba(26,16,53,0.35)", margin: 0 }}>
            JPG, PNG or WebP · Max 5MB<br />
            Recommended: 400×400px square
          </p>

          {error && (
            <p style={{ fontSize: ".78rem", color: "#DC2626", margin: 0 }}>⚠️ {error}</p>
          )}
        </div>
      </div>

      <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp"
        style={{ display: "none" }}
        onChange={e => { const f = e.target.files?.[0]; if (f) upload(f); }}
      />
    </div>
  );
}
