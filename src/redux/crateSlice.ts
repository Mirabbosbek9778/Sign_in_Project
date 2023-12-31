import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const crateSlice = createSlice({
  name: "crate",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = crateSlice.actions;
export const selectCrate = (state: { crate: unknown }) => state?.crate;

export default crateSlice.reducer;
