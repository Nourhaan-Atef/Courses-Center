import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllTeachers } from "./FetchAllTeachers";
import { toast } from "react-toastify";

export const editTeacher = createAsyncThunk(
  "teacher/editTeacher",
  async (item, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/teachers/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch(fetchAllTeachers());
        toast("EDITED SUCCESSFULLY ✅", {
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
