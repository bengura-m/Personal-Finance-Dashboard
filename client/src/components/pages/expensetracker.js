import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import {Link} from 'react-router-dom'
// import './expensetracking.css';
// import Nav from '../Nav'

// import {Header} from "../components/expensetracker/Header"
import {Balance} from "../expensetracker/Balance"
import {Incomeandexpenses} from "../expensetracker/Incomeandexpenses"
import {Transactionlist} from "../expensetracker/Transactionlist"
import {Addtransaction } from '../expensetracker/Addtransaction';
import {GlobalProvider} from "../expensetracker/context/ExpenseState"


export default function expensetracker() {
  return (
    <GlobalProvider>
    {/* <Router>
    <div className="expensetracker">
        <Nav/>
        <Switch>
        <Route path="/"  exact component={About}/>
        <Route path="/expensetracker" component= {expensetracker}/>
        <Route path="/portfolio" component= {portfolio}/>
        {/* <Route path="/logout" component= {logout}/> */}
        {/* </Switch> */}
    {/* // </div> */}
    {/* // </Router> */}
    {/* //   <Header/> */} 
      <div className = "container">
        <Balance/>
        <Incomeandexpenses/>
        <Transactionlist/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}


