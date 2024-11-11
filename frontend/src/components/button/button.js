import { InnerLayout } from "../../styles/layouts";
import React from "react";
import styled from "styled-components";

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        
            <ButtonStyled style={{
                backgroundColor: bg,
                padding: bPad,
                color: color,
                borderRadius: bRad
            }} onClick={onClick}>
                {icon}
                {name}
            </ButtonStyled>

    );
}


const ButtonStyled = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: inherit;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;


export default Button;