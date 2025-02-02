import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(createInitialTodos);

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  function createInitialTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  }

  return (
    <>
      <header>
        <StH1> My TODO List</StH1>
      </header>
      <StMain>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </StMain>
    </>
  );
}

export default App;

const StH1 = styled.h1`
  background-color: #d9ded1;
  color: #373e3b;
  font-size: 60px;
  font-weight: 1000;
  text-align: center;
  padding: 40px;
`;

const StMain = styled.main`
  background-color: #f5f2ec;
  text-align: center;
  padding: 20px 0px;
  min-height: 100vh;
`;
