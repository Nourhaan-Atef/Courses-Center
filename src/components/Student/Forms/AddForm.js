import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../Middlewares/Student/AddStudent";
import { useNavigate } from "react-router-dom";
import { FormSchema } from "../../../Schemas/FormSchema";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      grade: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 100);
      dispatch(
        addStudent({
          id,
          name: values.name,
          email: values.email,
          gender: values.gender,
          grade: values.grade,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/student");
        }
      });
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-5 mt-20 font-pageFont"
      >
        <div className="flex justify-center items-center gap-10">
          <label className="text-darkCyan text-2xl w-[8vw]">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Your Name,Please"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div className="inValidStyle">{formik.errors.name}</div>
        ) : null}

        <div className="flex justify-center items-center gap-10">
          <label className="w-[8vw] text-darkCyan text-2xl ">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter Your Email,Please"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div className="inValidStyle  ">{formik.errors.email}</div>
        ) : null}
        <div className="flex justify-center items-center gap-10">
          <label htmlFor="grade" className="w-[8vw] text-darkCyan text-2xl ">
            Grade
          </label>
          <select
            className="input"
            id="grade"
            name="grade"
            value={formik.values.grade}
            onChange={formik.handleChange}
          >
            <option value="none">Select Your Grade</option>
            <option value="one">ONE</option>
            <option value="two">TWO</option>
            <option value="three">THREE</option>
            <option value="four">FOUR</option>
            <option value="five">FIVE</option>
            <option value="six">SIX</option>
          </select>
        </div>
        {formik.errors.grade && formik.touched.grade ? (
          <div className="inValidStyle  ">{formik.errors.grade}</div>
        ) : null}
        <div className="flex justify-center items-center gap-10">
          <label htmlFor="gender" className="w-[8vw] text-darkCyan text-2xl ">
            Gender
          </label>
          <select
            className="input"
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <option value="none">Select Your Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        {formik.errors.gender && formik.touched.gender ? (
          <div className="inValidStyle  ">{formik.errors.gender}</div>
        ) : null}
        <div className="flex justify-around items-center gap-10 mt-20 mb-16">
          <button
            className="btn disabled:bg-lightGray disabled:text-white disabled:hover:border-darkModerateCyan"
            disabled={!formik.dirty}
            type="submit"
          >
            ADD
          </button>

          <button className="btn" onClick={() => navigate("/student")}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
