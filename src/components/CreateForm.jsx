import { useState } from "react";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) return;
    addTodo(content);
    setContent("");
  };

  return (
    /** 這樣還有 enter 送出的功能 */
    <form className="create-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="TODO Task"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default CreateForm;
