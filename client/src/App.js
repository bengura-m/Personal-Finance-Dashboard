import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/expensetracker/Header"
import {Balance} from "./components/expensetracker/Balance"
import {Incomeandexpenses} from "./components/expensetracker/Incomeandexpenses"
import {Transactionlist} from "./components/expensetracker/Transactionlist"
import {Addtransaction } from './components/expensetracker/Addtransaction';
import {GlobalProvider} from "./components/expensetracker/context/ExpenseState"


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className = "container">
        <Balance/>
        <Incomeandexpenses/>
        <Transactionlist/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;