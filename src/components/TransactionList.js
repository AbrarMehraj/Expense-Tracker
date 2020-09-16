/** @format */

import React, {useContext, useEffect, useState} from "react";
import {Transaction} from "./Transaction";

import {GlobalContext} from "../context/GlobalState";
import {db} from "./firebase";
import {transactionlist} from "../actions";
import {connect} from "react-redux";

const TransactionList = ({user, transactions, transactionlist}) => {
  // const {transactions} = useContext(GlobalContext);

  useEffect(() => {
    if (user?.uid) {
      db.collection("users")
        .doc(user?.uid)
        .collection("list")
        .onSnapshot((snapshot) => {
          transactionlist(
            snapshot.docs.map((doc) => ({
              transactionId: doc.id,
              transaction: doc.data(),
            }))
          );
        });
    }

    // back to empty list
    transactionlist([]);
  }, [user]);

  // console.log(transactions);
  const renderList = () => {
    return transactions.map((item) => (
      <Transaction
        key={item.transactionId}
        itemId={item.transactionId}
        item={item.transaction}
        userId={user?.uid}
      />
    ));
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">{renderList()}</ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    transactions: state.transactionlist,
  };
};
export default connect(mapStateToProps, {transactionlist})(TransactionList);

// abrarahdar@gmail.com
// aaaaaaaa
