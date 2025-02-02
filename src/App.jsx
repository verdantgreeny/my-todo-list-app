import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <StH1> My TODO List</StH1>
      </header>
      <StMain>
        <TodoForm />
        <TodoList />
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
