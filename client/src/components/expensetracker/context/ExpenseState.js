import React, { createContext, useReducer,} from "react";
import AppReducer from "./AppReducer"

//initial State
const InitialState ={
    transactions: [] 
}

// Create Context 

export const GlobalContext = createContext(InitialState);

//provider component

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer (AppReducer,InitialState);
// Add actions

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch ({
            type: "ADD_TRANSACTION",
            payload:transaction
        })
    }
    return (<GlobalContext.Provider value = {{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}