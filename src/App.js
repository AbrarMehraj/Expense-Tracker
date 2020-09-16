/** @format */

import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import firebase from "firebase";

import {GlobalProvider} from "./context/GlobalState";

import "./App.css";
import {db} from "./components/firebase";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Header />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </Route>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
