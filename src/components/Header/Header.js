import React from "react";
import Book from "../../assets/book.png";
const Header = () => {
  return (
    <>
      <div className="flex items-center m-5">
        <p className="font-extrabold font-logoFont text-3xl text-logo tracking-widest">
          Noury Center
        </p>
        <img src={Book} alt="Books Icon" className="h-[45px]" />
      </div>
    </>
  );
};

export default Header;
