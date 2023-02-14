import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTeachers = createAsyncThunk(
  "teacher/featchAllTeachers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/teachers");
      const data = await res.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
