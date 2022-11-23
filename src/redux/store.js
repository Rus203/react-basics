import { createStore, combineReducers } from "redux";

import { users } from "./reducers/users";
import { allowed, accountCounter, userCounter } from "./reducers/rest";
import { accounts } from "./reducers/accounts";

let initialState = {
  users: [],
  accounts: [
    {
      id: 1,
      login: "admin",
      password: "admin",
      email: "admin@gmail.com",
    },
  ],
  accountCounter: 1,
  userCounter: 2,
  allowed: false,
};

// let newUser = {
//   id: 4,
//   firstName: "Ruslan",
//   lastName: "Kharkevich",
//   email: "mail@yandex.by",
// };

// let newAcc = {
//   id: 2,
//   login: "user",
//   password: "user",
//   email: "user@gmail.com",
// };

const store = createStore(
  combineReducers({ users, allowed, userCounter, accountCounter, accounts }),
  initialState
);
store.subscribe(() => store.getState());


export default store;
