import { InnerLayout } from "../../styles/layouts";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";
import IncomeItem from "../incomeItem/incomeItem";
import ExpenseForm from "./expenseForm";

function Expense() {
    const { addIncome, expenses, getExpense, deleteExpense, totalExpense } = useGlobalContext();

    useEffect(() => {
        getExpense();
    }, []);

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expense</h1>
                <h2 className="totalincome">Total Expense: <span>${totalExpense()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            if (!income) return null;
                            const { _id, title, amount, date, category, type, description } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type = "expense"
                                    category={category}
                                    indicatorColor={'var(--color-green)'}
                                    deleteItem={deleteExpense}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .totalincome {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--background-color);
        border: 2px solid #0e172c;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        border-radius: 20px;
        padding: 1rem;
        margin: 2rem 0;
        font-size: 2.5rem;
        gap: 0.5rem;
        span {
            color: #f45d48;
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

    .income-content {
        display: flex;
        gap: 2rem;

        .form-container {
            flex: 1;
        }

        .incomes {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`;

export default Expense;