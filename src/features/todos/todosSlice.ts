import { Middleware, createSlice } from "@reduxjs/toolkit";
import { Todo, TodoInput } from "../../vite-env";
import { generateRandomId } from "../../utils";


const initialState: Todo[] = (() => {
  return JSON.parse(localStorage.getItem('todos') ?? '[]')
})();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo(state, { payload }: { payload: TodoInput }) {
      const newTodo: Todo = {
        ...payload,
        id: generateRandomId(),
        isCompleted: false,
      };
      state.push(newTodo);
    },
    completeTodo(state, { payload: id }: { payload: string }) {
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    },
    deleteTodo(state, { payload: id }: { payload: string }) {
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const { createTodo, completeTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const todosMiddleWare: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === "todos/createTodo" ||
    action.type === "todos/deleteTodo" ||
    action.type === "todos/completeTodo"
  ) {
    (function () {
      localStorage.setItem("todos", JSON.stringify(store.getState().todos));
    })();
  }
  return result;
};
