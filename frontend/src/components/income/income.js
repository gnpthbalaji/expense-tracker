import { InnerLayout } from "../../styles/layouts";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";
import Form from "../form/form";
import IncomeItem from "../incomeItem/incomeItem";

function Income() {
    const { addIncome, incomes, getIncome } = useGlobalContext();

    useEffect(() => {
        getIncome();
    }, [getIncome]);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
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
                                    category={category}
                                    indicatorColor={'var(--color-green)'}
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