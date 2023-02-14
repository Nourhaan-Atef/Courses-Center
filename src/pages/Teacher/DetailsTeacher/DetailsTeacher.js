import FemaleTeacher from "../../../assets/Woman Teacher.png";
import MaleTeacher from "../../../assets/Man Teacher.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTeacher } from "../../../Middlewares/Teacher/GetTeacher";
const DetailsTeacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { record } = useSelector((state) => state.teachers);

  return (
    <>
      <div className="font-pageFont">
        <div className="font-extrabold text-5xl text-white flex justify-center  mb-8 ">
          <h1 className="px-5 pb-2 border-b-2 border-x-2 border-white">
            Details Info
          </h1>
        </div>
        <div>
          <div className="Avatar flex justify-center mb-10">
            <img
              src={`${
                record?.gender === "female" ? FemaleTeacher : MaleTeacher
              }`}
              alt="Girl Student"
              className="h-64 w-64 bg-white rounded-full p-5"
            />
          </div>
        </div>
        <ul className="xl:mx-80 md:mx-20 mx-5 flex flex-col gap-5">
          <li className="flex bg-white pl-5 py-2 items-center rounded-xl">
            <span className="mr-3 font-extrabold text-2xl text-darkCyan tracking-widest">
              Name :-
            </span>
            <p className="text-darkGray text-xl underline">{record?.name}</p>
          </li>
          <li className="flex bg-white pl-5 py-2 items-center rounded-xl">
            <span className="mr-3 font-extrabold text-2xl text-darkCyan tracking-widest">
              Major :-
            </span>
            <p className="text-darkGray text-xl underline">{record?.major}</p>
          </li>
          <li className="flex bg-white pl-5 py-2 items-center rounded-xl">
            <span className="mr-3 font-extrabold text-2xl text-darkCyan tracking-widest">
              Phone :-
            </span>
            <p className="text-darkGray text-xl underline">{record?.phone}</p>
          </li>
          <li className="flex bg-white pl-5 py-2 items-center rounded-xl">
            <span className="mr-3 font-extrabold text-2xl text-darkCyan tracking-widest">
              Email :-
            </span>
            <p className="text-darkGray text-xl underline">{record?.email}</p>
          </li>
          <li className="flex bg-white pl-5 py-2 items-center rounded-xl">
            <span className="mr-3 font-extrabold text-2xl text-darkCyan tracking-widest">
              Gender :-
            </span>
            <p className="text-darkGray text-xl underline">{record?.gender}</p>
          </li>
        </ul>
        <div className="flex justify-around items-center mt-5">
          <div className=" inline-block py-2 px-5 ml-10 mt-5 rounded-xl bg-darkCyan hover:bg-white text-white cursor-pointer transition duration-300 text-xl hover:text-darkGray">
            <button
              onClick={() => {
                dispatch(getTeacher(record?.id)).then((res) => {
                  if (res.meta.requestStatus === "fulfilled") {
                    navigate(`edit`);
                  }
                });
              }}
            >
              EDIT
            </button>
          </div>
          <div
            className="flex py-2 px-5 ml-10 mt-5 rounded-xl bg-darkCyan hover:bg-white text-white cursor-pointer transition duration-300 hover:text-darkGray"
            onClick={() => navigate("/teacher", { replace: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTeacher;
