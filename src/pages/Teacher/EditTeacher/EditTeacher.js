import React from "react";
import EditForm from "../../../components/Teacher/Forms/EditForm";

const EditTeacher = () => {
  return (
    <>
      <div className="font-pageFont">
        <header className="flex justify-center items-center mt-20">
          <h1 className="font-extrabold md:text-5xl text-3xl text-center text-white flex justify-center px-5 pb-2 border-b-2 border-x-2 border-white">
            EDITING TEACHER INFO
          </h1>
        </header>
        <EditForm />
      </div>
    </>
  );
};

export default EditTeacher;
