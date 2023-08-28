import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import todosReducer, { todosMiddleWare } from "./features/todos/todosSlice";
import { locationApi } from "./features/api/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    [locationApi.reducerPath]: locationApi.reducer
  },
  middleware: (getDefault) => getDefault().concat(todosMiddleWare, locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
