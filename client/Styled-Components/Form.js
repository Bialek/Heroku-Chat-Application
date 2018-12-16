import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: row;
`

export const MessageInput = styled.input`
    flex: 1;
    padding: 20px;
    border: 0;
    border-top: 1px solid #ccc;
    width: 85%;
`

export const MessageBtn = styled.button`
    width: 15%;
    border: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #ccc;
    color: white;
    background-color: #ccc;
    transition: all ease-in-out .3s;
    &:hover {
        background-color: #e5e5e5;
    }
`