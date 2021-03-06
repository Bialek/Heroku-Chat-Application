import styled from 'styled-components';

export const MessageWrapper = styled.div`
    padding: 5px;
    border: 3px solid;
    border-radius: 0 20px 20px 20px;
    margin-bottom: 5px;
    width: 100%;
    border-color: ${props => props.color};
`

export const MessageText = styled.span`
    color: ${props => props.theme.PrimaryColor};
    font-size: ${props => props.author ? '2.2em' : '2em'};
    font-weight: ${props => props.author ? '900' : '500'};
    display: block;
    word-wrap: break-word;
    padding: 2px;
`