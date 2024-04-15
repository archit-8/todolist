import React from "react";
import Styles from "./todoItem.module.css";
function todoItem({ item, todos, setTodos }) {
  function handleDelte(item) {
    console.log("deleted item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? Styles.completed : "";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {" "}
          {item.name}
        </span>

        <span>
          <button
            onClick={() => {
              return handleDelte(item);
            }}
            className={Styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={Styles.line}></hr>
    </div>
  );
}

export default todoItem;
