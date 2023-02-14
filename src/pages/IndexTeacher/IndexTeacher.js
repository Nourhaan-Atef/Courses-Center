import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingHandler from "../../components/LoadingHandler/LoadingHandler";
import { fetchAllTeachers } from "../../Middlewares/Teacher/FetchAllTeachers";
import HomeTeacher from "../Teacher/Home/HomeTeacher";

const IndexTeacher = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.teachers);
  useEffect(() => {
    dispatch(fetchAllTeachers());
  }, [dispatch]);
  if (loading) {
    return <LoadingHandler type="loading"/>;
  }
  return (
    <>
      <HomeTeacher records={records} loading={loading} error={error} />
    </>
  );
};

export default IndexTeacher;
