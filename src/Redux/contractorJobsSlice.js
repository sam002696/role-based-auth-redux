import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contractorCurrentJobs: null,
  loading: false,
  error: false,
};

export const contractorCurrentJobsSlice = createSlice({
  name: "contractorCurrentJobs",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.loading = true;
    },
    fetchingSuccess: (state, action) => {
      state.loading = false;
      state.contractorCurrentJobs = action.payload;
      state.error = false;
    },
    fetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingStart, fetchingSuccess, fetchingFailure } =
  contractorCurrentJobsSlice.actions;

export default contractorCurrentJobsSlice.reducer;
