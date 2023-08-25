import { createSlice } from "@reduxjs/toolkit";

type todo = {
  title: string;
  description?: string;
  dueDate: Date;
  isCompleted: boolean;
};

const initialState: todo[] = (() => {
  const todos = localStorage.getItem("todos");
  return todos
    ? JSON.parse(todos)
    : [
        {
          title: "Meet with dad",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-8-29"),
          isCompleted: false,
        },
        {
          title: "Meet with friend",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-8-31"),
          isCompleted: false,
        },
      ];
})();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
