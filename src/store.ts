import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import todosReducer, { todosMiddleWare } from "./features/todos/todosSlice";
import locationsReducer from "./features/locations/locationsSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    locations: locationsReducer,
  },
  middleware: (getDefault) => getDefault().concat(todosMiddleWare),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store;
