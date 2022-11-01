import react, { Component } from "react";
import PropTypes from "prop-types";

import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], counter: 1 };

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  addUser(newUser) {
    newUser.id = this.state.counter;
    const users = [
      ...this.state.users,
      newUser,
    ];

    this.setState({ users, counter: newUser.id + 1 });
  }

  removeUser(id) {
    const users = this.props.users.filter((element) => element !== id);
    this.setState(users);
  }

  render() {
    return (
      <div className="react-application">
        <div className="form">
          <Form onAdd={this.addUser} />
        </div>
      </div>
    );
  }
}

export default App;
