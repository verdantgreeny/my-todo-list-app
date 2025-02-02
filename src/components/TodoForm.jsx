import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice";
import Button from "./Button";
import Input from "./Input";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !todoText) {
      alert("제목 및 내용을 입력해주세요");
      return;
    }

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: title,
        todoText: todoText,
      })
    );
    setTitle("");
    setTodoText("");
  };

  return (
    <form style={{whiteSpace: "nowrap",}} onSubmit={onSubmitHandler}>
      <Input
        htmlFor="inputTitle"
        type="text"
        value={title}
        id="inputTitle"
        onChange={(e) => setTitle(e.target.value)}
      >
        제목:
      </Input>

      <Input
        htmlFor="inputTodo"
        type="text"
        value={todoText}
        id="inputTodo"
        onChange={(e) => setTodoText(e.target.value)}
      >
        내용:
      </Input>
      <Button type="submit"> 추가 </Button>
    </form>
  );
};

export default TodoForm;
