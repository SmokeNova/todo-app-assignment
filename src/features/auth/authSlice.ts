import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload: authState }: { payload: boolean }) {
      state.isAuthenticated = authState;
      localStorage.setItem("isAuthenticated", `${authState}`);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
