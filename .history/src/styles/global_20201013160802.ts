import { createGlobalStyle } from 'styled-components';

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
        background-color: #ffffff;
        color: var(--primary-dark);
    }
    :root{
        --primary: #8D70FB;
        --primary-dark: #0c0a26;
        --primary-light: #dcd2ff;
        --secondary: #dafc19;
        --secondary-dark: #202d04;
        --secondary-light: #dcffbc;
    }
`;
