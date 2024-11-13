import React from 'react';
import { useState } from 'react';
import axios from 'axios';



const BASE_URL = "http://localhost:5001/api/v1/";

const GlobalContext = React.createContext();


export const GlobalContextProvider = ({ children }) => {

    const [incomes, setIncomes] = React.useState([]);
    const [expenses, setExpenses] = React.useState([]);
    const [error, setError] = React.useState(null);

    // Calcuate Incomes
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}addincome`, income);
            setIncomes([...incomes, response.data.data]);
        } catch (error) {
            setError(error.response.data.message);
        }
        getIncome();
    }

    const getIncome = async () => {
        try {
            const response = await axios.get(`${BASE_URL}getincome`);
            // Check the structure of the response before setting incomes
            if (Array.isArray(response.data)) {
                setIncomes(response.data);
            } else {
                console.error("Unexpected data format:", response.data);
                setIncomes([]); // Fallback to an empty array if data is not as expected
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching income data");
        }
    }
    
    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}deleteincome/${id}`);
            setIncomes(incomes.filter((income) => income._id !== id));
        } catch (error) {
            setError(error.response.data.message);
        }
        getIncome();
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            if (income && income.amount) {
                totalIncome += income.amount;
            }
        });
        return totalIncome;
    };
    
    // Calcuate Expenses
    const addExpense = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}addexpense`, income);
            setIncomes([...incomes, response.data.data]);
        } catch (error) {
            setError(error.response.data.message);
        }
        getExpense();
    }

    const getExpense= async () => {
        try {
            const response = await axios.get(`${BASE_URL}getexpense`);
            // Check the structure of the response before setting incomes
            if (Array.isArray(response.data)) {
                setExpenses(response.data);
            } else {
                console.error("Unexpected data format:", response.data);
                setIncomes([]); // Fallback to an empty array if data is not as expected
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching income data");
        }
    }
    
    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}deleteexpense/${id}`);
            setExpenses(incomes.filter((income) => income._id !== id));
        } catch (error) {
            setError(error.response.data.message);
        }
        getExpense();
    }

    const totalExpense = () => {
        let totalexpense = 0;
        expenses.forEach((income) => {
            if (income && income.amount) {
                totalexpense += income.amount;
            }
        });
        return totalexpense;
    }
    const totalBalance = () => {
        return totalIncome() - totalExpense();
    }
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
    const AllTransaction = () => {
        const allTransactions= [...incomes, ...expenses]
        allTransactions.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return allTransactions
    }
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            AllTransaction,
            error, 
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}