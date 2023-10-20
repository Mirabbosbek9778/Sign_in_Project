import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      if (username === "demo" && password === "demo123") {
        state.user = { username: "demo" };
        state.error = null;
      } else {
        state.user = null;
        state.error = "Invalid username or password";
      }
    },
    registerUser: (state, action) => {
      const { username, email, password } = action.payload;
      state.user = { username, email };
      state.error = null;
    },
  },
});

export const { setUser, setError, loginUser, registerUser } = authSlice.actions;
export const selectUser = (state) => state?.auth?.user;
export const selectError = (state) => state?.auth?.error;

export default authSlice.reducer;
