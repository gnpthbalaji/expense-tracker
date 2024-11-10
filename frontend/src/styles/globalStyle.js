import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        }
    :root{
        --primary-color: #0e172c;
        --primary-color2: #b8c1ec;
        --primary-color3: #fec7d7;
        --secondary-color: #0e172c;
        --background-color: #d9d4e7;
        --text-color: #fffffe;
        --color-green: #004643;
        -color-grey: #a786df;
        -color-accent: #fffffe;
        --color-hover:#fec7d7;
        --color-delete: #e45858;
        --main-text-color:#0e172c;

    }
    body{
        font-family: 'Poppins', sans-serif;
        color: var(--background-color);
        background-color: var(--background-color);
        font-size: clamp(1rem, 1.5vw, 2rem);
        overflow: hidden;
    }
    `;