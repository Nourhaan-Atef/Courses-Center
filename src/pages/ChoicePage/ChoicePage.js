import React from "react";
import { Link } from "react-router-dom";
import Books from "../../assets/Books2.jpg";
const ChoicePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 uppercase font-pageFont mt-20">
        <Link to="teacher">
          <div className="choice ">teachers</div>
        </Link>
        <Link to="student">
          <div className="choice">students</div>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <img
          src={Books}
          alt="Books"
          className="h-[60vh] md:w-[60vw] w-[90vw] rounded-xlg"
        />
      </div>
    </>
  );
};

export default ChoicePage;
