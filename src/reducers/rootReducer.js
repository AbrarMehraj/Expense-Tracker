/** @format */

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT__USER":
      return action.user;
    default:
      return state;
  }
};

export const transactionlist = (state = [], action) => {
  switch (action.type) {
    case "LIST":
      return action.transactionlist;
    default:
      return state;
  }
};
