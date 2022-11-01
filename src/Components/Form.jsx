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
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        FirstName
        <input type="text" name="firstName" required />
      </label>
      <label>
        SecondName
        <input type="text" name="lastName" required />
      </label>
      <label>
        email
        <input type="email" name="email" required />
      </label>
      <input type="submit" value="Add User" />
    </form>
  );
};

Form.propTypes = {
  onAdd: PropTypes.func,
}

export default Form;
