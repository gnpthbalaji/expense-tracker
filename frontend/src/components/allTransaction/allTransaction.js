import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";
import { useEffect } from "react";

function AllTransaction() {
    const { AllTransaction, getExpense, getIncome } = useGlobalContext();
    const [...allTransactions] = AllTransaction();

    useEffect(() => {
        getIncome();
        getExpense();
    }, []);

    return (
        <TransactionStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                {allTransactions.map((item) => {
                const { _id, title, amount, date, type } = item;
                return (
                    <div key={_id} className="history">
                        <p style={{
                            color: type.trim().toLowerCase() === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type.trim().toLowerCase() === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type.trim().toLowerCase() === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                        <p>
                            {new Date(date).toLocaleDateString('en-US')}
                        </p>
                    </div>
                )
            })}
            </InnerLayout>
        </TransactionStyled>
    );
}

const TransactionStyled = styled.div`
    
`;

export default AllTransaction;