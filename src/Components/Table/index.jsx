import react from "react";
import PropTypes from "prop-types";

import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = ({ users, onDelete }) => {
  return (
    <div className="table">
      <table>
        <Thead />
        <Tbody users={users} onDelete={onDelete} />
      </table>
    </div>
  );
};

Table.propTypes = {
  onDelete: PropTypes.func,
  users: PropTypes.array,
};

export default Table;
