import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  isCompleted: boolean;
};

const initialState: Todo[] = (() => {
  const todos = localStorage.getItem("todos");
  return todos
    ? JSON.parse(todos)
    : [
        {
          id: "6j49nj6!KJb4",
          title: "Meet with dad",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-10-29"),
          isCompleted: false,
        },
        {
          id: "5ngo3bodlrGp",
          title: "Meet with friend",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-8-31"),
          isCompleted: false,
        },
        {
          id: "6j49nj6!KJb4",
          title: "Meet with dad",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-10-29"),
          isCompleted: true,
        },
        {
          id: "5ngo3bodlrGp",
          title: "Meet with friend",
          description: "Gotta meet him for whatever reason",
          dueDate: new Date("2023-8-31"),
          isCompleted: true,
        },
      ];
})();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
