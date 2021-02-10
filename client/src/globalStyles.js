import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing : antialiased;
        -moz-osx-font-smoothing : grayscale;
        background-image: linear-gradient(180deg, rgba(74, 207, 150, .9), rgb(45, 166, 232, .9));
    }
`;
 
export default GlobalStyle;