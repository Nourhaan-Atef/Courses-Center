import { memo } from "react";
import LoadingHandler from "../../../components/LoadingHandler/LoadingHandler";
import Navbar from "../../../components/NavBar/Navbar";
import Table from "../../../components/Teacher/Table/Table";

const HomeTeacher = ({ records }) => {
  return (
    <>
      {records.length > 0 ? (
        <div>
          <Navbar type="Teacher" />
          <Table records={records} />
        </div>
      ) : (
        <LoadingHandler type="null" />
      )}
    </>
  );
};

export default memo(HomeTeacher);
