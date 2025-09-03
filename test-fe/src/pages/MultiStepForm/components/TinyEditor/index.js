import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const TinyEditor = ({ value = "", onChange, name, label, icon: Icon }) => {
  const editorRef = useRef(null);

  return (
    <div className="edit-company__field">
      <label>
        {Icon && <Icon style={{ marginRight: 5 }} />}
        {label}
      </label>
      <Editor
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        apiKey="a8n6fm053ujhhndm8jifdkb6mxxraj2hjp6a3d4z8z0vbqo6"
        value={value}
        onEditorChange={(content) => onChange(content)}
        init={{
          height: 300,
          menubar: false,
          plugins: ["code"],
          toolbar:
            "undo redo | bold italic underline | alignleft aligncenter alignright | code",
          branding: false,
        }}
      />
    </div>
  );
};

export default TinyEditor;
