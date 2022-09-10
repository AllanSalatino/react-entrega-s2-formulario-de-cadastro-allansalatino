import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
    }
    body .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        background-color: var(--black);

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

    :root{
        --black: #121214;
        --darkGrey: #212529;
        --mediumGrey: #343B41;
        --lightGrey: #868E96;
        --white: #F8F9FA;
        --pink: #FF577F;
        --registrationDisabled: #59323F;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: var(--white);
    }

    div, section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    h1{
        font-size: 14px;
        font-weight: 700;
        color: var(--white);
    }

    h3{
        font-size: 9px;
        font-weight: 400;
        color: var(--white);
    }

    p{
        font-size: 9px;
        font-weight: 600;
        color: var(--lightGrey);
    }
`;
