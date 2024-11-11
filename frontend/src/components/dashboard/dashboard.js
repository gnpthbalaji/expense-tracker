import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";

function Dashboard() {
    return (
        
            <DashboardStyled>
                <InnerLayout>
                    Dashboard
                </InnerLayout>    
            </DashboardStyled>

    );
}


const DashboardStyled = styled.div`
`;


export default Dashboard;