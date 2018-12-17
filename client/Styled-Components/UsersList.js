import styled from 'styled-components';

export const Users = styled.div`
    display: flex;
    flex: 1;
    width: 200px;
    justify-content: flex-start;
    flex-direction: column;
    border-right: 1px solid;
    border-right-color: ${props => props.theme.PrimaryColor};
`

export const UsersOnline = styled.div`
    padding: 20px;
    text-align: center;
    background: ${props => props.theme.PrimaryColor};
`

export const UserItem = styled.li`
    list-style: none;
    border-bottom: 1px solid;
    padding: 20px;
    margin: 0 0 0 20px;
    position: relative;
    border-bottom-color: ${props => props.theme.PrimaryColor};
    &:before {
        content: '';
        background-color: lawngreen;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 43%;
    }
` 