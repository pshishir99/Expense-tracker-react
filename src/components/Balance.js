import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const [transactionList] = useContext(TransactionContext);
  const amount = transactionList
    .map((list) => list.amount)
    .reduce((amt, items) => (amt += items), 0)
    .toFixed(2);
  return (
    <div className="balance-block">
      <h3>YOUR BALANCE</h3>
      <h2>&#8377; {amount}</h2>
    </div>
  );
};

export default Balance;
