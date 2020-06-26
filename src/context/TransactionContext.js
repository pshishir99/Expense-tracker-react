import React, { useState, createContext } from "react";

const TransactionContext = createContext();

const TransactionProvider = (props) => {
  const [transactionList, setTransactionList] = useState([]);
  return (
    <TransactionContext.Provider value={[transactionList, setTransactionList]}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, TransactionContext };
