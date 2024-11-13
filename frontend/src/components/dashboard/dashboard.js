import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";
import Chart from "../chart/chart";
import { dollar } from "../../utils/icons";
import { useGlobalContext } from "../../context/global";
import { useEffect } from "react";
import History from "../history/history";

function Dashboard() {
    const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

    useEffect(() => {
        getIncome();
        getExpense();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h4>Total Income</h4>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h4>Total Expense</h4>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h4>Total Balance</h4>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h3 className="salary-title">Min <span>Salary</span>Max</h3>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h3 className="salary-title">Min <span>Expense</span>Max</h3>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        @media (min-width: 768px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .chart-con {
            grid-column: 1 / -1;
            height: auto;

            @media (min-width: 768px) {
                grid-column: 1 / 4;
                height: 400px;
            }

            .amount-con {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1rem;
                margin-top: 2rem;

                @media (min-width: 768px) {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .income, .expense, .balance {
                    background: var(--chart-background);
                    border: 2px solid var(--chart-border);
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;

                    p {
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: #a786df;

                        @media (min-width: 768px) {
                            font-size: 3rem;
                        }
                    }
                }

                .balance {
                    grid-column: span 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    @media (min-width: 768px) {
                        grid-column: span 1;
                    }

                    p {
                        color: #a786df;
                    }
                }
            }
        }

        .history-con {
            grid-column: 1 / -1;

            @media (min-width: 768px) {
                grid-column: 4 / -1;
            }

            h3 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-title {
                font-size: 1rem;

                @media (min-width: 768px) {
                    font-size: 1.2rem;
                }

                span {
                    font-size: 1.5rem;

                    @media (min-width: 768px) {
                        font-size: 1.8rem;
                    }
                }
            }

            .salary-item {
                background: var(--chart-background);
                border: 2px solid var(--chart-border);
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-weight: 600;
                    font-size: 1.2rem;
                    color: #a786df;

                    @media (min-width: 768px) {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
`;

export default Dashboard;