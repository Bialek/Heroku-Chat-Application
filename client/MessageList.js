import React, { Component } from 'react';
import styles from './css/MessageList.css';
import Message from './Message';


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
			<div className={styles.MessageList}>
				{
					this.state.List.map((message, i) =>  (
							<Message
								key={i}
								color={message.color}
								from={message.from}
								text={message.text}
							/>
						)
					)
				}
				<div ref={el => { this.el = el; }} />
			</div>
		)
	}
}
export default MessageList;