import { memo } from "react";
import LoadingHandler from "../../../components/LoadingHandler/LoadingHandler";
import Navbar from "../../../components/NavBar/Navbar";
import Table from "../../../components/Student/Table/Table";

const HomePage = ({ records }) => {
  return (
    <>
      {records.length > 0 ? (
        <div>
          <Navbar type="Student" />
          <Table records={records} />
        </div>
      ) : (
        <LoadingHandler type="null" />
      )}
    </>
  );
};

export default memo(HomePage);
