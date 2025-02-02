import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import "./App.css";
import { useState } from "react";

function App() {
  // state init
  const initialState = [
    {
      id: 1,
      title: "react",
      todoText: "react를 배워봅시다.",
    },
    {
      id: 2,
      title: "redux",
      todoText: "redux를 배워봅시다.",
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <header>
        <StH1> My TODO List</StH1>
      </header>
      <StMain>
        <TodoForm todos={todos} setTodos={setTodos} />
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
