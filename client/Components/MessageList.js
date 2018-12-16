import React, { Component } from 'react';
import Message from './Message';

import { MessagesList } from '../Styled-Components/MessageList';


class MessageList extends Component {
	constructor(props) { 
		super(props);
		this.state = {
			List : props.messages,
		}
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
   		this.scrollToBottom();
	}
	  
	componentWillReceiveProps(nextProps) {
		this.setState({
			List: nextProps.messages,
		})
	}

	scrollToBottom() {
		this.el.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<MessagesList>
				{
					this.state.List.map((message, i) =>  (
						<Message
							key={i}
							color={message.color}
							from={message.from}
							text={message.text}
						/>
					))
				}
				<div ref={el => { this.el = el; }} />
			</MessagesList>
		)
	}
}
export default MessageList;