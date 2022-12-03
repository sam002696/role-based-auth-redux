import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maintenanceReports: null,
  loading: false,
  error: false,
};

export const maintenanceReportsSlice = createSlice({
  name: "maintenanceReports",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.loading = true;
    },
    fetchingSuccess: (state, action) => {
      state.loading = false;
      state.maintenanceReports = action.payload;
      state.error = false;
    },
    fetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reFetch: (state, action) => {
      state.maintenanceReports(action.payload);
    },
  },
});

export const { fetchingStart, fetchingSuccess, fetchingFailure, reFetch } =
  maintenanceReportsSlice.actions;

export default maintenanceReportsSlice.reducer;
