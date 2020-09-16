/** @format */

import React, {useContext} from "react";
import {connect} from "react-redux";
import {GlobalContext} from "../context/GlobalState";

const IncomeExpenses = ({transactions}) => {
  // const {transactions} = useContext(GlobalContext);
  // console.log(transactions);
  const amounts = transactions.map((transaction) =>
    parseInt(transaction.transaction.amount)
  );
  // console.log(amounts);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(1);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionlist,
  };
};
export default connect(mapStateToProps)(IncomeExpenses);
