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

export const loadTests = () => async (dispatch) => {
  try {
    dispatch(loadTestResultsStart());
    const tests = await fetchTests();
    dispatch(setTests(tests));
  } catch (error) {
    dispatch(loadTestResultsFailure(error?.message));
  }
};

export const selectTests = (state) => state?.tests?.tests;
export const selectSelectedTest = (state) => state?.tests?.selectedTest;
export const selectTestResults = (state) => state?.tests?.testResults;
export const selectLoading = (state) => state?.tests?.loading;
export const selectError = (state) => state?.tests?.error;
export const selectUser = (state) => state?.tests?.user;

export default testsSlice.reducer;
