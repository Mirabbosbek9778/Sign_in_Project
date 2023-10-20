type User = {
  username: string;
  email?: string;
  password?: string;
};

type AuthState = {
  user: User | null;
  error: string | null;
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  } as AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    loginUser: (state, action: PayloadAction<User>) => {
      const { username, password } = action.payload;
      if (username === "demo" && password === "demo123") {
        state.user = { username: "demo" };
        state.error = null;
      } else {
        state.user = null;
        state.error = "Invalid username or password";
      }
    },
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action?.payload;
      state.error = null;
    },
  },
});

export const { setUser, setError, loginUser, registerUser } = authSlice.actions;
export const selectUser = (state: { auth: AuthState }) => state?.auth?.user;
export const selectError = (state: { auth: AuthState }) => state?.auth?.error;

export default authSlice.reducer;
