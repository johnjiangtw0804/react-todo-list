import { MdDelete, MdEdit } from "react-icons/md";
import EditingTodo from "./EditingTodo";

function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  editContent,
}) {
  /** props 是一個物件 */
  return todo.isEditing == true ? (
    <EditingTodo
      todo={todo}
      toggleIsEditing={toggleIsEditing}
      editContent={editContent}
    />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
        ></MdEdit>
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        ></MdDelete>
      </div>
    </div>
  );
}

export default Todo;
