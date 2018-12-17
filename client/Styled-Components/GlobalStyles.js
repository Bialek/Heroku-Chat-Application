import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: 0;
        transition: 0.6s;
    }
    body {
        margin: 0;
        background-color: ${props => props.theme.Background};
    }
`