import { createSlice } from "@reduxjs/toolkit";
import { addTeacher } from "../Middlewares/Teacher/AddTeacher";
import { fetchAllTeachers } from "../Middlewares/Teacher/FetchAllTeachers";
import { getTeacher } from "../Middlewares/Teacher/GetTeacher";

const initialState = { records: [], record: null, loading: false, error: null };
const StudentSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    // Fetching All Teachers
    builder.addCase(fetchAllTeachers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllTeachers.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchAllTeachers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Adding Teacher
    builder.addCase(addTeacher.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addTeacher.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(addTeacher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Get Teacher Info
    builder.addCase(getTeacher.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTeacher.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(getTeacher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default StudentSlice.reducer;
