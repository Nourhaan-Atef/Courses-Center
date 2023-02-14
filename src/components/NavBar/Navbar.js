import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type }) => {
  return (
    <>
      <div className="xl:px-80 sm:px-40 px-20 py-10 ">
        <div className="flex md:justify-between md:flex-row flex-col gap-5 items-center text-xl font-bold bg-darkCyan p-3 px-5 font-pageFont text-white rounded-xl ">
          <Link to={"add"}>
            <div className="ml-3 cursor-pointer hover:text-logo transition duration-300">
              ADD {type}
            </div>
          </Link>
          <Link to={"/"}>
            <div className="ml-3 cursor-pointer hover:text-logo transition duration-300">
              Home
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
