import { InnerLayout } from "../../styles/layouts";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";
import Form from "../form/form";
import IncomeItem from "../incomeItem/incomeItem";

function Income() {
    const { addIncome, incomes, getIncome, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncome();
    }, []);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="totalincome">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            if (!income) return null;
                            const { _id, title, amount, date, category, description } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type= "income"
                                    category={category}
                                    indicatorColor={'var(--color-green)'}
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
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
            color: #2cb67d;
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

export default Income;