import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Whoops404 from "./pages/Whoops404";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      counter: 1,
      accounts: [
        { name: "admin", password: "admin", email: "admin@gmail.com" },
      ],
      isAllowed: false,
    };

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);

    this.createNewAccount = this.createNewAccount.bind(this);
    this.isLogIn = this.isLogIn.bind(this);

    this.changeAllowed = this.changeAllowed.bind(this);
  }

  addUser(newUser) {
    newUser.id = this.state.counter;
    const users = [...this.state.users, newUser];
    this.setState({ users, counter: newUser.id + 1 });
  }

  removeUser(id) {
    const users = this.state.users.filter((element) => element.id !== id);
    this.setState({ users });
  }

  createNewAccount(newAccount) {
    const accounts = [...this.state.accounts, newAccount];
    this.setState({ accounts });
  }

  isLogIn({ email, password }) {
    return this.state.accounts.some(
      (item) => item.email === email && item.password === password
    );
  }

  changeAllowed() {
    this.setState({ isAllowed: !this.state.isAllowed });
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addUser={this.addUser}
              removeUser={this.removeUser}
              users={this.state.users}
              isAllowed={this.state.isAllowed}
            />
          }
        />
        <Route
          path="signIn"
          element={
            <SignIn isLogIn={this.isLogIn} changeAllowed={this.changeAllowed} />
          }
        />
        <Route
          path="signUp"
          element={
            <SignUp
              createNewAccount={this.createNewAccount}
              changeAllowed={this.changeAllowed}
            />
          }
        />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    );
  }
}

export default App;
