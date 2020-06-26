import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const IncomeExpenditure = () => {
  const [transactionList] = useContext(TransactionContext);
  const amounts = transactionList.map((list) => list.amount);
  const income = amounts
    .filter((val) => val > 0)
    .reduce((amt, items) => (amt += items), 0)
    .toFixed(2);
  const expense = amounts
    .filter((val) => val < 0)
    .reduce((amt, items) => (amt += items), 0)
    .toFixed(2);
  return (
    <div className="income-expense-block">
      <div className="income">
        <p>INCOME</p>
        <p className="income-amount">&#8377; {income}</p>
      </div>
      <div className="horizontal-line">
        <hr />
      </div>
      <div className="expense">
        <p>EXPENSE</p>
        <p className="expense-amount">&#8377; {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenditure;
