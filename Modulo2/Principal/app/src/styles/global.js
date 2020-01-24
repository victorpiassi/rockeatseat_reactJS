import { createGlobalStyle } from "styled-components"
import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Calibri, sans-serif;
    }

    body{
        background: #9B65E6;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;
