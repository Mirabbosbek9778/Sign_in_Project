import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const crateSlice = createSlice({
  name: "crate",
  initialState,
  reducers: {},
});

export const {} = crateSlice.actions;
export const selectCrate = (state) => state?.crate;

export default crateSlice.reducer;
