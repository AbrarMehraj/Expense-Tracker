/** @format */

import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {db} from "./firebase";

export const Transaction = ({item, itemId, userId}) => {
  // console.log(item);
  const {deleteTransaction} = useContext(GlobalContext);

  // console.log(userId);
  const sign = item.amount < 0 ? "-" : "+";

  const deleteItem = () => {
    db.collection("users").doc(userId).collection("list").doc(itemId).delete();
  };

  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button onClick={deleteItem} className="delete-btn">
        x
      </button>
    </li>
  );
};
