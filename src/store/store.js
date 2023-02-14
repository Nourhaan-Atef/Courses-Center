import { configureStore } from "@reduxjs/toolkit";
import students from "../Slices/StudentSlice";
import teachers from "../Slices/TeacherSlice";
const store = configureStore({
  reducer: {
    students,
    teachers,
  },
});
export default store;
