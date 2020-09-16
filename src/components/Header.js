/** @format */

/** @format */

import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {currentUser} from "../actions";
import {auth} from "./firebase";

const Header = ({currentUser, user}) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) currentUser(authUser);
      else currentUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderButton = () => {
    if (user)
      return (
        <button onClick={() => auth.signOut()} className="ui button negative">
          Sign Out
        </button>
      );
    return (
      <div>
        <Link to="/signin" className="ui primary button">
          Sign In
        </Link>
        <Link to="/signup" className="ui button">
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <div className="header-app">
      <Link to="/" className="logo">
        Expense Tracker
      </Link>

      {renderButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, {currentUser})(Header);
