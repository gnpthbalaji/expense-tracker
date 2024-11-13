import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";

function History() {
    const {transactionHistory} = useGlobalContext();
    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h4>Recent Transactions</h4>
            {history.map((item) => {
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
                    </div>
                )
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history{
        background: var(--white);
        border: 1px solid var(--primary-color);
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        padding: 1rem;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History;