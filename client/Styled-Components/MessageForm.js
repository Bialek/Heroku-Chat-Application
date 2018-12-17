import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: row;
`

export const MessageInput = styled.input`
    flex: 1;
    padding: 20px;
    border: 0;
    width: 85%;
`

export const MessageBtn = styled.button`
    width: 15%;
    border: none;
    font-size: 1.5em;
    color: ${props => props.theme.Background};
    background-color: ${props => props.theme.PrimaryColor};
    transition: all ease-in-out .3s;
    &:hover {
        background-color: ${props => props.theme.Background};
        color: ${props => props.theme.PrimaryColor};
    }   
`