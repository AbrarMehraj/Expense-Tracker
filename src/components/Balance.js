/** @format */

import React, {useContext} from "react";
import {connect} from "react-redux";
import {GlobalContext} from "../context/GlobalState";

const Balance = ({transactions}) => {
  // const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map((transaction) =>
    parseInt(transaction.transaction.amount)
  );
  // console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>Rs {total}</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionlist,
  };
};
export default connect(mapStateToProps)(Balance);
