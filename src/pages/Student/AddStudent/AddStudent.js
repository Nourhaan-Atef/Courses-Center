import React from "react";
import AddForm from "../../../components/Student/Forms/AddForm";

const AddStudent = () => {
 
  return (
    <>
      <div className="font-pageFont">
        <header className="flex justify-center mt-20">
          <h1 className="font-extrabold md:text-5xl text-3xl text-center text-white flex justify-center px-5 pb-2 border-b-2 border-x-2 border-white">
            ADDING A STUDENT
          </h1>
        </header>
        <AddForm />
      </div>
    </>
  );
};

export default AddStudent;
