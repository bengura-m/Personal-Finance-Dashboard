import React, { create, useReducer, createContext} from "react";
import AppReducer from "./AppReducer"

//initial State
const InitialState ={
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150} 
    ] 
}

// Create Context 

export const GlobalContext = createContext(InitialState);

//provider component

export const GlobalProvider = ({ children }) =>{
    const [state, dispath] = useReducer (AppReducer,InitialState);
    return (<GlobalContext.Provider value = {{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}