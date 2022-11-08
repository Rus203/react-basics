import { Navigate } from "react-router-dom";
import Form from "../Components/Form";
import Table from "../Components/Table/index";
import PropTypes from 'prop-types'

const Home = ({ removeUser, addUser, users = [], isAllowed = false }) => {
  return !isAllowed ? (
    <Navigate replace to="signIn" />
  ) : (
    <div className="container mt-4">
      <div className="form">
        <Form onAdd={addUser} />
      </div>
      <hr style={{ width: "75%", marginLeft: "17%", float: "center" }} />
      <div>
        <Table onDelete={removeUser} users={users} />
      </div>
    </div>
  );
};

Home.propTypes = {
  removeUser: PropTypes.func,
  addUser: PropTypes.func,
  users: PropTypes.array,
  isAllowed: PropTypes.bool
}

export default Home;
