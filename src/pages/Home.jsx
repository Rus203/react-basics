import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Form from "../Components/Form";
import Table from "../Components/Table/index";


const Home = () => {
  const isAllowed = true;  //useSelector(state => state.allowed)
  
  return !isAllowed ? (
    <Navigate replace to="signIn" />
  ) : (
    <div className="container mt-4">
      <div className="form">
        <Form />
      </div>
      <hr style={{ width: "75%", marginLeft: "17%", float: "center" }} />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
