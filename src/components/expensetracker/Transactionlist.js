import React, { useContext} from 'react';
import {GlobalContext} from "./context/ExpenseState"

export const Transactionlist = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    return (
        <div>
           <h3>History</h3> 
           <ul className= "list">
               <li className= "minus">
                   Cash <span> -$400</span> <button className="delete-btn">x</button>
               </li>
           </ul>
        </div>
    )
}
