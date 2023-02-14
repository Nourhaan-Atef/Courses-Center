import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/students");
      const data = await res.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);