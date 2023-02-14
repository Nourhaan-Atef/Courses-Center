import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const addTeacher = createAsyncThunk(
  "teacher/addTeacher",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/teachers", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await res.json();
      if (res.status === 201) {
        toast("ADDED Successfully ✅", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
