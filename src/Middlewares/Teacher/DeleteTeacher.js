import { createAsyncThunk } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { fetchAllTeachers } from "./FetchAllTeachers";
export const deleteTeacher = createAsyncThunk(
  "teacher/deleteTeacher",
  async (id, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/teachers/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        dispatch(fetchAllTeachers());
        toast.success("DELETED SUCCESSFULLY ✅", {
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
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
