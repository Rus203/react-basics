import react from "react";
import PropTypes from "prop-types";

const Form = ({ onAdd }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    let { firstName, lastName, email } = event.target;
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    onAdd(user);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
  };

  return (
    <form
      className="row align-items-end justify-content-center"
      onSubmit={onSubmit}
    >
      <div className="col-md-2">
        <input className="btn btn-danger" type="submit" value="Add User" />
      </div>

      <div className="col-md-3  ">
        <label className="form-label fw-bold" for="firstName">
          First name
        </label>
        <input className="form-control" type="text" name="firstName" required />
      </div>

      <div className="col-md-3">
        <label className="form-label fw-bold" for="lastName">
          Second name
        </label>
        <input className="form-control" type="text" name="lastName" required />
      </div>

      <div className="col-md-3">
        <label className="form-label fw-bold" for="email">
          Email
        </label>
        <input className="form-control" type="email" name="email" required />
      </div>
    </form>
  );
};

Form.propTypes = {
  onAdd: PropTypes.func,
};

export default Form;
