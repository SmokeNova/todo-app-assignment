import { createSlice } from "@reduxjs/toolkit";

type todo = {
  title: string;
  description?: string;
  dueDate: Date;
  isCompleted: boolean;
};

const initialState: todo[] = (() => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
})();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
