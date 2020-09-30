import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
    font-family: 'baloo_2regular';
    src: url('../../fonts/baloo2-regular-webfont.woff2') format('woff2'),
         url('../../fonts/baloo2-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

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
        background-color: var(--secondary-light);
        color: var(--primary-dark);
    }

    :root{
        --text-color: black;
        --button-color: #8d70fb;
        --input-color: #f4f4f6;
        --primary: #201089;
        --primary-dark: #0c0a26;
        --primary-light: #dcd2ff;
        --secondary: #dafc19;
        --secondary-dark: #202d04;
        --secondary-light: #dcffbc;
        font-family: 'baloo_2regular', Arial, Helvetica, sans-serif;
    }
`;
