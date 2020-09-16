/** @format */

import React, {useState, useContext} from "react";
// import {GlobalContext} from "../context/GlobalState";
import {db} from "./firebase";
import firebase from "firebase";
import {connect} from "react-redux";

const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  // const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // const newTransaction = {
    //   id: Math.floor(Math.random() * 100000000),
    //   text,
    //   amount: +amount,
    // };
    // console.log(newTransaction);

    // addTransaction(newTransaction);
    db.collection("users")
      .doc(props.user.uid)
      .collection("list")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        text: text,
        amount: amount,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" disabled={!props.user}>
          Add transaction
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AddTransaction);
