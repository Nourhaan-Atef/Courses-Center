import React from "react";
import AddForm from "../../../components/Teacher/Forms/AddFrom";

const AddTeacher = () => {
  return (
    <>
      <header className="flex justify-center mt-20">
        <h1 className="font-extrabold md:text-5xl text-3xl text-center text-white flex justify-center px-5 pb-2 border-b-2 border-x-2 border-white">
          ADDING A TEACHER
        </h1>
      </header>
      <AddForm />
    </>
  );
};

export default AddTeacher;
