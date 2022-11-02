import react from "react";
import PropTypes from "prop-types";

import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = ({ users, onDelete }) => {
  return (
    <table className="table table-striped caption-top">
      <caption className="fs-4 fw-bold text-dark">Users</caption>
      <Thead />
      <Tbody users={users} onDelete={onDelete} />
    </table>
  );
};

Table.propTypes = {
  onDelete: PropTypes.func,
  users: PropTypes.array,
};

export default Table;
