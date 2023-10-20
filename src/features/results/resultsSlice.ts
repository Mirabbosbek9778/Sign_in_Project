import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action?.payload;
    },
    loadResults: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadResultsSuccess: (state, action) => {
      state.results = action?.payload;
      state.loading = false;
    },
    loadResultsFailure: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

export const {
  setResults,
  loadResults,
  loadResultsSuccess,
  loadResultsFailure,
} = resultsSlice.actions;

export const selectResults = (state) => state?.results?.results;
export const selectLoading = (state) => state?.results?.loading;
export const selectError = (state) => state?.results?.error;

export default resultsSlice.reducer;
