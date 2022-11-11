import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/actions/users";

const Tbody = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  
  const onDelete = (id) => {
    dispatch(removeUser(id));
  };

  return users.length === 0 ? null : (
    <tbody>
      {users.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
          <td>
            <button className="btn btn-danger" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
