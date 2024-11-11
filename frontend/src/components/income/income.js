import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global";
import Form from "../form/form";

function Income() {
    const {addIncome} = useGlobalContext();
    return (
        
            <IncomeStyled>
                <InnerLayout>
                    <h1>Income</h1>
                    <div className="income-content">
                        <div className="form-container">
                            <Form />
                        </div>
                        <div className="incomes">
                        </div>
                        
                    </div>
                </InnerLayout>    
            </IncomeStyled>

    );
}


const IncomeStyled = styled.div`
`;


export default Income;