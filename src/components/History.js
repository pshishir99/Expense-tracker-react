import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import HistoryCard from "./HistoryCard";

const History = () => {
  const [transactionList] = useContext(TransactionContext);
  return (
    <div className="history padding-top-2">
      <h3>HISTORY</h3>
      <hr />
      <div>
        {transactionList.map((list) => (
          <HistoryCard
            key={list.id}
            text={list.text}
            amount={list.amount}
            border={list.amount > 0 ? "border-color-green" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
