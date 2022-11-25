
import { useState } from "react";

import { useDispatch } from "react-redux";
import "./App.css";
import TodoField from "./components/TodoField";
import TodoItem from "./components/TodoItem";
import { addTodo, removeHandle } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

const addTask = () => dispatch(addTodo(text), setText(""))

  


  return (
    <div className="App">
      <TodoField
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />
      <TodoItem  />
    </div>
  );
}

export default App;
