import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }

    body {
        background-color: var(--primary);
        color: var(--text-color);
    }

    :root{
        --primary: #ffffff;
        --text-color: black;
        --button-color: #8d70fb;
        --input-color: #f4f4f6;
    }
`;
