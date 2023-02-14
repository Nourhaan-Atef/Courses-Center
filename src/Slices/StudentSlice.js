import { createSlice } from "@reduxjs/toolkit";
import { addStudent } from "../Middlewares/Student/AddStudent";
import { fetchStudents } from "../Middlewares/Student/FetchStudents";
import { getStudent } from "../Middlewares/Student/GetStudent";

const initialState = { records: [], record: null, error: null, loading: false };
const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    // Fetching Students
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Adding Student
    builder.addCase(addStudent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(addStudent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Details Info about the student
    builder.addCase(getStudent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(getStudent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default StudentSlice.reducer;
