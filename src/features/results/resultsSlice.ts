import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type Result = {
  id: number;
  name: string;
};

type ResultsState = {
  results: Result[];
  loading: boolean;
  error: string | null;
};
const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
    loading: false,
    error: null,
  } as ResultsState,
  reducers: {
    setResults: (state, action: PayloadAction<Result[]>) => {
      state.results = action?.payload;
    },
    loadResults: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadResultsSuccess: (state, action: PayloadAction<Result[]>) => {
      state.results = action?.payload;
      state.loading = false;
    },
    loadResultsFailure: (state, action: PayloadAction<string | null>) => {
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

export const selectResults = (state: { results: ResultsState }) =>
  state?.results?.results;
export const selectLoading = (state: { results: ResultsState }) =>
  state?.results?.loading;
export const selectError = (state: { results: ResultsState }) =>
  state?.results?.error;

export default resultsSlice.reducer;
