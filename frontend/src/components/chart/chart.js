import React from "react";
import { Chart as ChartJs, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    ArcElement } from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);


function Chart() {
    const {incomes, expenses} =useGlobalContext()
    // Combine incomes and expenses into a single array with type
    const combinedData = [
        ...incomes.map(inc => ({...inc, type: 'income'})),
        ...expenses.map(exp => ({...exp, type: 'expense'}))
    ];

    // Sort combined data by date
    combinedData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Separate sorted data back into incomes and expenses
    const sortedIncomes = combinedData.filter(item => item.type === 'income');
    const sortedExpenses = combinedData.filter(item => item.type === 'expense');

    const data = {
        labels: combinedData.map((item) => {
            const {date} = item;
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return formattedDate;
        }),
        datasets: [
            {
                label: "Income",
                data: sortedIncomes.map((inc) => {
                    const {amount} = inc;
                    return amount;
                }),
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.3,
            },
            {
                label: "Expenses",
                data: sortedExpenses.map((exp) => {
                    const {amount} = exp;
                    return amount;
                }),
                fill: false,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                tension: 0.3,
            },
        ]
    }

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: var(--chart-background);
    border: 2px solid var(--chart-border);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 10px;
    height: 100%;

`;

export default Chart;