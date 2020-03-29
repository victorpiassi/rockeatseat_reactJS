import { createGlobalStyle } from "styled-components"

import "rc-slider/assets/index.css"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        cursor: default;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialised;
        background: #181818;
        font-family: "Montserrat", sans-serif;
        color: #FFF;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #282828;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #252525;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #222222;
    }

    ::-webkit-scrollbar-track {
        background-color: #121212;
    }
`