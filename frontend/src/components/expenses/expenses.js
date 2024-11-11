import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";

function Expenses() {
    return (
        
            <ExpensesStyled>
                <InnerLayout>
                    Expenses
                </InnerLayout>    
            </ExpensesStyled>

    );
}


const ExpensesStyled = styled.div`
`;


export default Expenses;