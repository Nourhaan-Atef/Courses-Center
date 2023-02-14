import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStudent } from "../../../Middlewares/Student/GetStudent";
import { deleteStudent } from "../../../Middlewares/Student/DeleteStudent";

const Table = ({ records }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = (item) => {
    dispatch(deleteStudent(item.id));
  };

  const students = records.map((student) => {
    return (
      <tr className="text-center text-xl font-pageFont" key={student.id}>
        <td className="capitalize py-3">{student.name}</td>
        <td className="py-3">{student.email}</td>
        <td className="flex justify-center gap-3 py-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer text-white "
            onClick={() => {
              dispatch(getStudent(student.id)).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                  navigate(`${student.id}/details`);
                }
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer text-green-800"
            onClick={() => {
              dispatch(getStudent(student.id)).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                  navigate(`${student.id}/edit`);
                }
              });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer text-red-900"
            onClick={() => deleteHandler(student)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="flex justify-center">
        <table className="w-[80vw]  rounded-xl">
          <thead className="text-2xl font-pageFont bg-white text-darkCyan">
            <tr>
              <th className="py-2 ">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>

          <tbody className="text-white">{students}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
