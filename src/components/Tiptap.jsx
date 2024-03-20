"use client";
import "@/components/tiptap.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = (content) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Post content...</p>",
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
