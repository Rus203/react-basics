import { rest } from "../constants";

const { INVERSE_STATUS, INCREMENT_USER_COUNTER, INCREMENT_ACCOUNT_COUNTER } = rest;

export const changeAllowed = () => {
  return {
    type: INVERSE_STATUS,
  };
}
