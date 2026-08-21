"use client";
import { useFormStatus } from "react-dom";

export default function TeamFormSubmitBtn({ isNew }: { isNew: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "12px 32px", borderRadius: 10,
        background: pending ? "rgba(91,48,232,0.6)" : "#5B30E8",
        color: "#fff", border: "none",
        fontSize: ".875rem", fontWeight: 700,
        cursor: pending ? "not-allowed" : "pointer",
        boxShadow: pending ? "none" : "0 4px 16px rgba(91,48,232,0.35)",
        transition: "all .2s",
      }}
    >
      {pending ? (
        <>
          <span style={{
            width: 15, height: 15,
            border: "2px solid rgba(255,255,255,0.3)",
            borderTopColor: "#fff", borderRadius: "50%",
            display: "inline-block",
            animation: "spin .6s linear infinite",
          }} />
          Saving…
        </>
      ) : (
        isNew ? "Add Member →" : "Save Changes →"
      )}
      <style>{`@keyframes spin { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }`}</style>
    </button>
  );
}
