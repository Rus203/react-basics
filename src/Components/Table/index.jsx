import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = () => {
  return (
    <table className="table table-striped caption-top">
      <caption className="fs-4 fw-bold text-dark">Users</caption>
      <Thead />
      <Tbody />
    </table>
  );
};



export default Table;
