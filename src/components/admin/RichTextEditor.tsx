"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

interface Props {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  minHeight?: number;
}

export default function RichTextEditor({ name, defaultValue = "", placeholder = "Write here…", minHeight = 200 }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" } }),
    ],
    content: defaultValue,
    editorProps: {
      attributes: {
        class: "rte-content",
        style: `min-height:${minHeight}px; padding:14px; outline:none; font-size:.875rem; line-height:1.75; color:#1A1035;`,
        "data-placeholder": placeholder,
      },
    },
  });

  // Expose HTML via a hidden input so server action can read it

  // Keep hidden input in sync on every update AND on first mount
  useEffect(() => {
    if (!editor) return;
    // Set initial value immediately
    const inp = document.querySelector<HTMLInputElement>(`input[data-rte="${name}"]`);
    if (inp) inp.value = editor.getHTML();
    // Update on every change
    const update = () => {
      const el = document.querySelector<HTMLInputElement>(`input[data-rte="${name}"]`);
      if (el) el.value = editor.getHTML();
    };
    editor.on("update", update);
    return () => { editor.off("update", update); };
  }, [editor, name]);

  const btn = (active: boolean): React.CSSProperties => ({
    padding: "5px 9px", borderRadius: 6, border: "none", cursor: "pointer",
    background: active ? "rgba(91,48,232,0.15)" : "transparent",
    color: active ? "#5B30E8" : "rgba(26,16,53,0.55)",
    fontWeight: active ? 700 : 500, fontSize: ".82rem",
    transition: "background .15s, color .15s",
  });

  const sep: React.CSSProperties = {
    width: 1, height: 18, background: "rgba(26,16,53,0.12)",
    alignSelf: "center", flexShrink: 0, margin: "0 2px",
  };

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (!url) return;
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    }
    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div style={{
      border: "1.5px solid rgba(91,48,232,0.18)",
      borderRadius: 12, overflow: "hidden",
      background: "#fff",
      transition: "border-color .2s",
    }}
    onFocus={() => {}} // handled by CSS
    >
      {/* Toolbar */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2,
        padding: "8px 12px",
        background: "#F7F5FF", borderBottom: "1px solid rgba(91,48,232,0.1)",
      }}>
        <button type="button" style={btn(editor.isActive("bold"))} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold"><b>B</b></button>
        <button type="button" style={btn(editor.isActive("italic"))} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic"><i>I</i></button>
        <button type="button" style={btn(editor.isActive("underline"))} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline"><u>U</u></button>
        <div style={sep} />
        <button type="button" style={btn(editor.isActive("heading", { level: 2 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2">H₂</button>
        <button type="button" style={btn(editor.isActive("heading", { level: 3 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3">H₃</button>
        <div style={sep} />
        <button type="button" style={btn(editor.isActive({ textAlign: "left" }))} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Align Left">≡</button>
        <button type="button" style={btn(editor.isActive({ textAlign: "center" }))} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Center">≡</button>
        <div style={sep} />
        <button type="button" style={btn(editor.isActive("bulletList"))} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet List">≔</button>
        <button type="button" style={btn(editor.isActive("orderedList"))} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered List">≔</button>
        <div style={sep} />
        <button type="button" style={btn(editor.isActive("link"))} onClick={addLink} title="Add Link">🔗</button>
        {editor.isActive("link") && (
          <button type="button" style={btn(false)} onClick={() => editor.chain().focus().unsetLink().run()} title="Remove Link">✕</button>
        )}
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} data-rte={name} defaultValue={editor?.getHTML() ?? ""} />

      <style>{`
        .rte-content:focus { outline: none; }
        .rte-content p { margin: 0 0 8px; }
        .rte-content h2 { font-size:1.1rem; font-weight:700; color:#1A1035; margin:12px 0 6px; }
        .rte-content h3 { font-size:.95rem; font-weight:700; color:#1A1035; margin:10px 0 4px; }
        .rte-content ul,
        .rte-content ol { padding-left:20px; margin:4px 0 8px; }
        .rte-content li { margin:3px 0; }
        .rte-content a { color:#5B30E8; text-decoration:underline; }
        .rte-content[data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: rgba(26,16,53,0.3);
          pointer-events: none;
          display: block;
        }
      `}</style>
    </div>
  );
}
