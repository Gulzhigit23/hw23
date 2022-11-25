import React from "react";
import { useDispatch } from "react-redux";
import { removeHandle, toggleTodoCompleted } from "../store/todoSlice";

function TodoList({ id, text, completed }) {
  const dispatch = useDispatch();
  const removeHandler = (todoId) => {
    // setTodos(todos.filter((item) => item.id !== todoId))
    dispatch(removeHandle(todoId));
  };

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />

      <span>{text}</span>
  {completed && <button onClick={() => removeHandler(id)}>delete</button> }
      
    </li>
  );
}

export default TodoList;
