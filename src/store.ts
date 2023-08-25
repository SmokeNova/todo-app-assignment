import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import todosReducer, { todosMiddleWare } from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
  middleware: (getDefault) => getDefault().concat(todosMiddleWare),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
