import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;
        font-family: 'Poppins', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(30, 38%, 92%);
        height: 100vh;
    }
`;