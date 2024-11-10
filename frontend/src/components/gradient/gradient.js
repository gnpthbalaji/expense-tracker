import React from "react";
import styled, { keyframes } from "styled-components";
import { useFullscreen } from "../../utils/useFullscreen";

function Gradient() {

    const { width, height } = useFullscreen();

    const moveGradient = keyframes`
        0%{
        transform: translate(0,0);
        }
        50%{
        transform: translate(${width / 1.25}px, ${height / 1.25}px);
        }
        100%{
        transform: translate(0,0);
        }
    `;
    
    const GradientStyled = styled.div`
        height: 70vh;
        width: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, var(--primary-color) 0%, var(--primary-color2) 100%);
        filter: blur(300px);
        animation: ${moveGradient} 8s alternate linear infinite;
    `;
    return (
        <GradientStyled />
    );
}

export default Gradient;