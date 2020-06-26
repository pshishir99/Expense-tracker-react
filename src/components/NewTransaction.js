import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const NewTransaction = () => {
  const [transactionList, setTransactionList] = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTextChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleAmountChange = (event) => {
    event.preventDefault();
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") return console.log(`please fill in valid text`);
    if (amount === 0) return console.log(`please fill in valid amount`);

    const newTransaction = {
      text: text,
      amount: amount,
      id: transactionList.length,
    };
    setTransactionList([...transactionList, newTransaction]);
  };
  return (
    <div className="new-transaction padding-top-2">
      <h3>NEW TRANSACTION</h3>
      <hr className="margin-bottom-1" />
      <strong>Text</strong>
      <br />
      <input
        className="margin-bottom-1"
        type="string"
        name="text"
        onChange={handleTextChange}
      />
      <br />
      <strong>Amount</strong>
      <br />
      <strong>(negative-expense ,positive-income)</strong>
      <br />
      <input
        className="margin-bottom-1"
        type="number"
        name="amount"
        onChange={handleAmountChange}
      />
      <br />
      <button onClick={handleSubmit}>Add Transaction</button>
    </div>
  );
};

export default NewTransaction;
