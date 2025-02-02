import { createSlice } from "@reduxjs/toolkit";

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

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
