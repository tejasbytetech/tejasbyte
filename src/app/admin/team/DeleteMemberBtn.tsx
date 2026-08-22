"use client";
import { useTransition } from "react";

interface Props {
  name: string;
  deleteAction: () => Promise<void>;
}

export default function DeleteMemberBtn({ name, deleteAction }: Props) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    if (!window.confirm(`Delete "${name}"?\n\nThis cannot be undone.`)) return;
    startTransition(() => deleteAction());
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      style={{
        padding: "6px 14px", borderRadius: 8,
        background: pending ? "rgba(239,68,68,0.04)" : "rgba(239,68,68,0.08)",
        border: "1px solid rgba(239,68,68,0.15)",
        color: pending ? "rgba(220,38,38,0.4)" : "#DC2626",
        cursor: pending ? "not-allowed" : "pointer",
        fontSize: ".75rem", fontWeight: 700,
        display: "inline-flex", alignItems: "center", gap: 5,
        transition: "opacity .2s",
      }}
    >
      {pending ? (
        <>
          <span style={{ width: 10, height: 10, border: "1.5px solid rgba(220,38,38,0.3)", borderTopColor: "#DC2626", borderRadius: "50%", display: "inline-block", animation: "spin .6s linear infinite" }} />
          Deleting…
        </>
      ) : "Delete"}
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </button>
  );
}
