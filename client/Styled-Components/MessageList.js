import styled from 'styled-components';

export const MessagesList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100vw - 200px);
    max-height: calc(100vh - 59px);
    padding: 20px;
    overflow-y: auto;
`