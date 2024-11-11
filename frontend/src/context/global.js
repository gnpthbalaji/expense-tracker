import React from 'react';
import { useState } from 'react';
import axios from 'axios';



const BASE_URL = "http://localhost:5001/api/v1/";

const GlobalContext = React.createContext();


export const GlobalContextProvider = ({ children }) => {

    const [incomes, setIncomes] = React.useState([]);
    const [expenses, setExpenses] = React.useState([]);
    const [error, setError] = React.useState(null);
    
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}addincome`, income);
            setIncomes([...incomes, response.data.data]);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const getIncome = async (income) => {
        try {
            const response = await axios.get(`${BASE_URL}getincome`, income);
            setIncomes(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}