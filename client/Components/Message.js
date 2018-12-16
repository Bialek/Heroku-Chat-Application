import React from 'react';
import { MessageWrapper, MessageText } from '../Styled-Components/Message';

const Message = props =>  (
	<MessageWrapper color={props.color} >
		<MessageText author>{props.from}: </MessageText>
		<MessageText>{props.text}</MessageText>
	</MessageWrapper>
);
   

export default Message;