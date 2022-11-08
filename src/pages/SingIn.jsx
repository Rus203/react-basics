import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SignIn = ({ isLogIn, changeAllowed }) => {
  let navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    let { email, password } = event.target;
    if (isLogIn({ email: email.value.trim(), password: password.value.trim() })) {
      changeAllowed()
      navigate("/");
    } else {
      alert("Sorry, try again");
    }
  };
   
  return (
    <div className="container text-center" style ={{marginTop: "7%"}}>
      <form className="row m-5" onSubmit={onSubmit}>
        <h1>Welcome</h1>
        <p>Sign-in to get started</p>
        <div className="d-flex flex-column align-items-center">
          <div className="col-4 mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-4 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              required
            />
          </div>
        </div>
        <div>
          <input
            className="btn btn-outline-danger"
            type="submit"
            value="Sign-in"
          />
        </div>
      </form>
      <div className="p-3 mb-2 bg-light text-dark text fixed-bottom">
        <h4>
          First time here?
          <NavLink to="../signUp"> Just sign-up</NavLink>
        </h4>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  isLogIn: PropTypes.func,
  changeAllowed: PropTypes.func,
  isAllowed: PropTypes.bool
}

export default SignIn;
