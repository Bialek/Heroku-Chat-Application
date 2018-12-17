import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
` 
export const Header = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.PrimaryColor};
    padding: 20px;
    justify-content: space-between;
    color: ${props => props.theme.PrimaryColor};
    width: 100%;
    span {
        font-size: 1.5em;
    }
`

export const AppBody = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100vw - 200px);
    flex: 1;
`
