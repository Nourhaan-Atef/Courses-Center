import { createAsyncThunk } from "@reduxjs/toolkit";
export const getTeacher = createAsyncThunk(
  "teacher/getTeacher",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/teachers/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
