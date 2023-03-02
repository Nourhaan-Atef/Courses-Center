import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { TeacherFormSchema } from "../../../Schemas/FormSchema";
import { useNavigate } from "react-router-dom";
import { editTeacher } from "../../../Middlewares/Teacher/EditTeacher";
const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.teachers);
  const formik = useFormik({
    initialValues: {
      id: record ? record.id : "",
      name: record ? record.name : "",
      major: record ? record.major : "",
      email: record ? record.email : "",
      gender: record ? record.gender : "",
      phone: record ? record.phone : "",
    },
    enableReinitialize: true,
    validationSchema: TeacherFormSchema,
    onSubmit: (values) => {
      const { id, name, major, email, gender, phone } = values;
      dispatch(
        editTeacher({
          id,
          name,
          major,
          email,
          gender,
          phone,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/Courses-Center/teacher");
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
          <label className="text-darkCyan text-2xl w-[8vw]">Major</label>
          <select
            className={`input ${
              formik.errors.major && formik.touched.major ? "error" : ""
            }`}
            placeholder="Enter Your Major,Please"
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
          <div className="inValidStyle">{formik.errors.major}</div>
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
          <label className="w-[8vw] text-darkCyan text-2xl ">Phone</label>
          <input
            className={`input ${
              formik.errors.phone && formik.touched.phone ? "error" : ""
            }`}
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter Your phone number"
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
            className={`input ${
              formik.errors.gender && formik.touched.gender ? "error" : ""
            }`}
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
        <div className="flex justify-around items-center gap-10 md:mt-28 mt-16 mb-10">
          <button
            className="btn  disabled:bg-lightGray disabled:text-white disabled:hover:border-darkModerateCyan"
            type="submit"
            disabled={!formik.dirty}
          >
            SUBMIT
          </button>

          <button className="btn" onClick={() => navigate("/Courses-Center/teacher")}>
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
