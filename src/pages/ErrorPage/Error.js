import Error from "../../assets/Error404.png";
import { useRouteError, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <i className="text-white font-extrabold text-3xl underline">
          The Page Is {error.statusText || error.message}
        </i>
        <div className="flex justify-center mx-10">
          <img src={Error} alt="Error-Img" className="sm:h-[60vh]" />
        </div>
        <button
          onClick={() => navigate("/Courses-Center", { replace: true })}
          className="btn specialBtn"
        >
          Home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
