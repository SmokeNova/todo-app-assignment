import { Middleware, createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  isCompleted: boolean;
};

type TodoInput = {
  title: string;
  description?: string;
  dueDate: string;
};

function generateRandomId(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!*&^%$£";
  let result = "";
  for (let i = 0; i < 12; i++) {
    const random = Math.floor(Math.random() * characters.length);
    result += characters[random];
  }
  return result;
}

const initialState: Todo[] = (() => {
  let items = localStorage.getItem("todos");
  let todos: Todo[] = [];
  if (items) {
    todos = JSON.parse(items);
  }
  return todos;
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
