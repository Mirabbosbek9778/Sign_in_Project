import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import crateReducer from "./crateSlice";
import testsReducer from "../features/tests/testsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  crate: crateReducer,
  tests: testsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process?.env?.NODE_ENV !== "production",
});

export default store;
