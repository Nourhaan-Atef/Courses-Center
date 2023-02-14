import { createAsyncThunk } from "@reduxjs/toolkit";
export const getStudent = createAsyncThunk(
  "students/getStudent",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/students/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
