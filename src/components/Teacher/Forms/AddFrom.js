import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TeacherFormSchema } from "../../../Schemas/FormSchema";
import { addTeacher } from "../../../Middlewares/Teacher/AddTeacher";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      major: "",
      email: "",
      phone: "",
      gender: "",
    },
    validationSchema: TeacherFormSchema,
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 100);
      dispatch(
        addTeacher({
          id,
          name: values.name,
          major: values.major,
          email: values.email,
          phone: values.phone,
          gender: values.gender,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/teacher");
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
          <label className="text-darkCyan text-2xl w-[8vw]">Major</label>

          <select
            className="input"
            placeholder="Enter Your major, Please"
            name="major"
            value={formik.values.major}
            onChange={formik.handleChange}
          >
            <option value="none">Select Your Major</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Relision">Relision</option>
          </select>
        </div>
        {formik.errors.major && formik.touched.major ? (
          <div className="inValidStyle  ">{formik.errors.major}</div>
        ) : null}
        <div className="flex justify-center items-center gap-10">
          <label className="w-[8vw] text-darkCyan text-2xl ">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter Your Email, Please"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div className="inValidStyle  ">{formik.errors.email}</div>
        ) : null}

        <div className="flex justify-center items-center gap-10">
          <label className="w-[8vw] text-darkCyan text-2xl ">Phone</label>
          <input
            className="input"
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter Your Phone, Please"
          />
        </div>
        {formik.errors.phone && formik.touched.phone ? (
          <div className="inValidStyle  ">{formik.errors.phone}</div>
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

          <button className="btn" onClick={() => navigate("/teacher")}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
