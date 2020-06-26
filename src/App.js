import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenditure from "./components/IncomeExpenditure";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeExpenditure />
        <History />
        <NewTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
