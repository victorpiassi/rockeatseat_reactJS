import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root{
        --principal-text: #404040;
        --secondary-text: #808080;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Calibri, sans-serif;
        color: var(--principal-text);

    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #BBBBBB;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #9F9F9F;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #888888;
    }

    ::-webkit-scrollbar-track {
        background-color: #EEEEEE;
        box-shadow: inset 0 0 2px #CCCCCC;
    }
    }

    body{
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
