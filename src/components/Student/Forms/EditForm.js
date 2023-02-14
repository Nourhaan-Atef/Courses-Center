import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { FormSchema } from "../../../Schemas/FormSchema";
import { useNavigate } from "react-router-dom";
import { editStudent } from "../../../Middlewares/Student/EditStudent";
const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.students);
  const formik = useFormik({
    initialValues: {
      id: record ? record.id : "",
      name: record ? record.name : "",
      age: record ? record.age : "",
      email: record ? record.email : "",
      gender: record ? record.gender : "",
      grade: record ? record.grade : "",
    },
    enableReinitialize: true,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      const { id, name, age, email, gender, grade } = values;
      dispatch(
        editStudent({
          id,
          name,
          age,
          email,
          gender,
          grade,
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
        className="grid gap-8 mt-20 font-pageFont"
      >
        <div className="flex justify-center items-center gap-10">
          <label className="text-darkCyan text-2xl w-[8vw]">Name</label>
          <input
            type="text"
            className={`input ${
              formik.errors.name && formik.touched.name ? "error" : ""
            }`}
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
          <label className="text-darkCyan text-2xl w-[8vw]">Age</label>
          <select
            className={`input ${
              formik.errors.age && formik.touched.age ? "error" : ""
            }`}
            placeholder="Enter Your Age,Please"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          >
            <option value="none">Select Your Age</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
          </select>
        </div>
        {formik.errors.age && formik.touched.age ? (
          <div className="inValidStyle  ">{formik.errors.age}</div>
        ) : null}

        <div className="flex justify-center items-center gap-10">
          <label className="w-[8vw] text-darkCyan text-2xl ">Email</label>
          <input
            type="email"
            className={`input ${
              formik.errors.email && formik.touched.email ? "error" : ""
            }`}
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
            className={`input ${
              formik.errors.grade && formik.touched.grade ? "error" : ""
            }`}
            id="grade"
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
            className={`input ${
              formik.errors.gender && formik.touched.gender ? "error" : ""
            }`}
            id="gender"
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
        <div className="flex justify-around items-center gap-10 md:mt-28 mt-16 mb-10">
          <button
            className="btn  disabled:bg-lightGray disabled:text-white disabled:hover:border-darkModerateCyan"
            type="submit"
            disabled={!formik.dirty}
          >
            SUBMIT
          </button>

          <button className="btn" onClick={() => navigate("/student")}>
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
