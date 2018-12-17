import styled from 'styled-components';

export const Users = styled.div`
    display: ${props => props.openUsersList ? 'flex' : 'none'};
    flex: 1;
    max-width: 200px;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    border-right: 1px solid;
    border-right-color: ${props => props.theme.PrimaryColor};
`

export const UsersOnline = styled.div`
    padding: 20px;
    background-color: ${props => props.theme.PrimaryColor};
    color: ${props => props.theme.Background};
    font-size: 1.45em;
`

export const UserList = styled.ul`
    overflow: auto;
`

export const UserItem = styled.li`
    list-style: none;
    border-bottom: 1px solid;
    padding: 20px;
    margin: 0 20px;
    position: relative;
    font-size: 1.5em;
    color: ${props => props.theme.PrimaryColor};
    border-bottom-color: ${props => props.theme.PrimaryColor};
    &:before {
        content: '';
        background-color: lawngreen;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        position: absolute;
        left: 20px;   
        top: calc(50% - 5px);
    }
` 