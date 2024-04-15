import React, { useState } from "react";
import Footer from "./Jooter";
import Form from "./From";
import TodoList from "./TodoList";
function Todo() {
  const [todos, setTodos] = useState([]);
  const completedtodo = todos.filter((todo) => todo.done).length;
  const Totaltodos = todos.length;
  const leftTodos = Totaltodos - completedtodo;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedtodo={completedtodo}
        Totaltodos={Totaltodos}
        leftTodos={leftTodos}
      />
    </div>
  );
}

export default Todo;
