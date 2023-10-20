import { createSlice } from "@reduxjs/toolkit";
import { fetchTests } from "../../data/testsApi";

const testsSlice = createSlice({
  name: "tests",
  initialState: {
    tests: [],
    selectedTest: null,
    testResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTests: (state, action) => {
      state.tests = action?.payload;
    },
    selectTest: (state, action) => {
      state.selectedTest = action?.payload;
    },
    loadTestResults: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadTestResultsSuccess: (state, action) => {
      state.loading = false;
      state.testResults = action?.payload;
    },
    loadTestResultsFailure: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

export const {
  setTests,
  selectTest,
  loadTestResults,
  loadTestResultsSuccess,
  loadTestResultsFailure,
} = testsSlice.actions;

export const loadTests =
  () =>
  async (
    dispatch: (arg0: {
      payload: unknown;
      type:
        | "tests/setTests"
        | "tests/loadTestResults"
        | "tests/loadTestResultsFailure";
    }) => void
  ) => {
    try {
      dispatch(loadTestResults());
      const tests = await fetchTests();
      dispatch(setTests(tests));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loadTestResultsFailure(error.message));
      } else {
        dispatch(loadTestResultsFailure("Erroring"));
      }
    }
  };

export const selectTests = (state: { tests: { tests: unknown } }) =>
  state?.tests?.tests;
export const selectSelectedTest = (state: { tests: { selectedTest: never } }) =>
  state?.tests?.selectedTest;
export const selectTestResults = (state: { tests: { testResults: unknown } }) =>
  state?.tests?.testResults;
export const selectLoading = (state: { tests: { loading: unknown } }) =>
  state?.tests?.loading;
export const selectError = (state: { tests: { error: unknown } }) =>
  state?.tests?.error;
export const selectUser = (state: { tests: { user: unknown } }) =>
  state?.tests?.user;

export default testsSlice.reducer;
