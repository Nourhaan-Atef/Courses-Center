import HomePage from "../../pages/Student/Home/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../Middlewares/Student/FetchStudents";
import { useEffect } from "react";
import LoadingHandler from "../../components/LoadingHandler/LoadingHandler";

const IndexStudent = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return <LoadingHandler type="loading" />;
  }
  return (
    <>
      <HomePage records={records} loading={loading} error={error} />
     
    </>
  );
};

export default IndexStudent;
