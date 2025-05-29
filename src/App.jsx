import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
function App() {
  /**
   * component: A component in React is a reusable building block that divides the user interface (UI)
   *  into independent, manageable parts
   */
  return (
    /* 在 JSX 中你可以用 {} 包住 JavaScript 表達式，來當作 attribute 的值，或是 元素中的內容。
     */
    <>
      <TodoWrapper />
    </>
  );
}

export default App;
