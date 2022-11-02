import react from "react";
import PropTypes from "prop-types";

const Tbody = ({ users, onDelete }) => {
  return users.length === 0 ? null : (
    <tbody>
      {users.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>
            <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

Tbody.propTypes = {
  onDelete: PropTypes.func,
  users: PropTypes.array,
};

export default Tbody;
