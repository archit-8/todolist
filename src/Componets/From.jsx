import { useState } from "react";
import styles from "./form.module.css";
export default function ({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.flex}>
          {" "}
          <input
            className={styles.modernInput}
            type="text"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            placeholder="todo item"
          />
          <button className={styles.Input} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
