import React from "react";

const HistoryCard = (props) => {
  return (
    <div className={`history-card ${props.border}`}>
      <p>{props.text}</p>
      <p>{props.amount}</p>
    </div>
  );
};

export default HistoryCard;
