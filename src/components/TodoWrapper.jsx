import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      content: "打掃廁所",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "寫作業",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(), isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: todo.isCompleted === true ? false : true }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isEditing: todo.isEditing === true ? false : true }
          : todo;
      })
    );
  };

  const editContent = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1> TO DO LIST</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editContent={editContent}
          />
        );
      })}
    </div>
  );
}

export { TodoWrapper };
