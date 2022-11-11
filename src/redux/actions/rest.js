import { rest } from "../constants";

const { INVERSE_STATUS, INCREMENT_USER_COUNTER, INCREMENT_ACCOUNT_COUNTER } = rest;

export const changeAllowed = () => {
  return {
    type: INVERSE_STATUS,
  };
}

export const incrementUserCounter = () => {
  return {
    type: INCREMENT_USER_COUNTER,
  }
}

export const incrementAccountCounter = () => {
  return {
    type: INCREMENT_ACCOUNT_COUNTER,
  };
}