/** @format */

export const currentUser = (user) => ({
  type: "CURRENT__USER",
  user,
});

export const transactionlist = (transactionlist) => ({
  type: "LIST",
  transactionlist,
});
