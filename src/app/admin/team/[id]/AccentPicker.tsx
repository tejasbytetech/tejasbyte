"use client";
import { useState } from "react";

const PRESETS = [
  "#5B30E8", "#7C5CFC", "#2D3A6E", "#0EA5E9",
  "#10B981", "#F59E0B", "#EF4444", "#EC4899",
  "#8B5CF6", "#06B6D4", "#84CC16", "#F97316",
];

export default function AccentPicker({ defaultValue }: { defaultValue: string }) {
  const [color, setColor] = useState(defaultValue || "#5B30E8");
  const [text,  setText]  = useState(defaultValue || "#5B30E8");

  const applyColor = (val: string) => {
    setColor(val);
    setText(val);
  };

  const handleTextChange = (val: string) => {
    setText(val);
    // Only update the picker if it looks like a valid hex
    if (/^#[0-9a-fA-F]{6}$/.test(val)) setColor(val);
  };

  const lbl: React.CSSProperties = {
    display: "block", fontSize: ".72rem", fontWeight: 700,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "rgba(26,16,53,0.4)", marginBottom: 8,
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    background: "#F7F5FF", border: "1.5px solid rgba(91,48,232,0.15)",
    borderRadius: 10, color: "#1A1035",
    fontSize: ".875rem", outline: "none",
    transition: "border-color .2s",
    boxSizing: "border-box",
  };

  return (
    <div>
      <label style={lbl}>Accent Color *</label>

      {/* Picker row */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
        {/* Native color input — synced */}
        <input
          type="color"
          value={color}
          onChange={e => applyColor(e.target.value)}
          style={{ width: 44, height: 44, borderRadius: 8, border: "1.5px solid #E2E4EA", cursor: "pointer", padding: 2, flexShrink: 0 }}
        />
        {/* Hex text input */}
        <input
          type="text"
          value={text}
          onChange={e => handleTextChange(e.target.value)}
          placeholder="#5B30E8"
          maxLength={7}
          style={{ ...inputBase, flex: 1, fontFamily: "monospace" }}
        />
        {/* Live preview swatch */}
        <div style={{
          width: 36, height: 36, borderRadius: 8, flexShrink: 0,
          background: /^#[0-9a-fA-F]{6}$/.test(color) ? color : "#5B30E8",
          border: "1.5px solid rgba(0,0,0,0.08)",
          boxShadow: `0 4px 12px ${color}55`,
          transition: "background .2s",
        }} />
      </div>

      {/* Preset swatches */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {PRESETS.map(p => (
          <button
            key={p}
            type="button"
            title={p}
            onClick={() => applyColor(p)}
            style={{
              width: 24, height: 24, borderRadius: 6,
              background: p, border: color === p ? "2.5px solid #1A1035" : "2px solid transparent",
              cursor: "pointer", transition: "transform .15s, border-color .15s",
              outline: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          />
        ))}
      </div>

      {/* Hidden input — carries the actual value to the server action */}
      <input type="hidden" name="accent" value={color} />
    </div>
  );
}
