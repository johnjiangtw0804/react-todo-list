import { useState } from "react";

function EditingTodo({ todo, editContent }) {
  // to manage component's state
  const [content, setContent] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) return;

    // 不然的話就要 update state
    editContent(todo.id, content);
  };

  return (
    /** 在 form 裡 handle onSubmit 這樣還有 enter 送出的功能 */
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={"TODO TASK"}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Finish
      </button>
    </form>
  );
}

export default EditingTodo;
