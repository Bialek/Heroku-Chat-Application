import styled from 'styled-components';

export const Login = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background-color: white;
`

export const LoginInput = styled.input`
    padding: 20px;
    font-size: 2em;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    color: #ccc;
    &:active, &:hover, &:target, &:visited {
        border-bottom-color: black;
        color: black;
        outline: none;
    }
`