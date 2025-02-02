import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, completeTodo } from "../redux/slices/todosSlice";
import Button from "./Button";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // handlers
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const onCompleteHandler = (id) => {
    dispatch(completeTodo({ id }));
  };

  // todoList, doneList
  const todoList = [];
  const doneList = [];
  todos.forEach((todo) => {
    if (todo.isDone) {
      doneList.push(todo);
    } else {
      todoList.push(todo);
    }
  });

  console.log("todo",todoList)
  console.log("done",doneList)

  return (
    <>
      <StH2> Working </StH2>
      <StTodos>
        {todoList.map((todo) => (
          <StTodo key={todo.id}>
            <StTitle>{todo.title}</StTitle>
            <StTodoText> {todo.todoText}</StTodoText>
            <div>
              <Button color="orange" type="button" onClick={() => onDeleteHandler(todo.id)}>
                {" "}
                삭제{" "}
              </Button>
              <Button type="button" onClick={() => onCompleteHandler(todo.id)}>
                {" "}
                완료{" "}
              </Button>
            </div>
          </StTodo>
        ))}
      </StTodos>
      <StH2> Done </StH2>
      <StTodos>
        {doneList.map((todo) => (
          <StTodo key={todo.id}>
            <StTitle>{todo.title}</StTitle>
            <StTodoText> {todo.todoText}</StTodoText>
            <div>
              <Button color="orange" type="button" onClick={() => onDeleteHandler(todo.id)}>
                {" "}
                삭제{" "}
              </Button>
              <Button type="button" onClick={() => onCompleteHandler(todo.id)}>
                {" "}
                취소{" "}
              </Button>
            </div>
          </StTodo>
        ))}
      </StTodos>
    </>
  );
};

export default TodoList;

const StH2 = styled.h2`
  margin: 20px;
  width: 200px;
  background-color: #a2b7a8;
  border-radius: 20px;
  color: #fcd1a0;
  font-size: 40px;
  padding: 5px;
`;

const StTodos = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const StTodo = styled.div`
  width: 221px;
  height: 150px;
  margin: 10px 20px;
  padding: 10px;
  border: 2px solid #fcd1a0;
  background-color: #fcd1a08d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StTitle = styled.div`
  font-size: 30px;
  border-bottom: dashed 1px #373e3b;
  padding-bottom: 5px;
  margin-bottom: 15px;
`;
const StTodoText = styled.div`
  height: 60px;
`;
