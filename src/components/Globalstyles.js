import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
body{
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    background: rgba(20, 20, 20, 1);
    padding-top: 47px;
}`

export default GlobalStyles;