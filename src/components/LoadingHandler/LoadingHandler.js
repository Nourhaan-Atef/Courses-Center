import loadingImg from "../../assets/Load.gif";
import ErrorImage from "../../assets/Error.png";
const LoadingHandler = ({ type }) => {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <p>
          {type !== "loading" ? (
            <span className="text-2xl text-white font-semibold">
              <span className="text-white text-8xl font-bold block text-center mb-8">
                Ooops!
              </span>
              It's Seems That Something Went Wrong Server Is Down
            </span>
          ) : (
            ""
          )}
        </p>
        <img
          src={type === "loading" ? loadingImg : ErrorImage}
          className="h-[60vh]"
          alt="IMG"
        />
      </div>
    </>
  );
};

export default LoadingHandler;
