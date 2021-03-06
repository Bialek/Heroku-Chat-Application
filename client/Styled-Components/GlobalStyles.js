import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline-color: ${props => props.theme.PrimaryColor};
    }
    body {
        transition: all ease-in-out .3s;
        background-color: ${props => props.theme.Background};
    }
    svg {
        margin: 0 10px;
        width: 1.5em !important;
        height: auto !important;
    }
`