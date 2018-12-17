import React, {Component} from 'react';
import { Form, MessageInput, MessageBtn  } from '../Styled-Components/MessageForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
		this.inputRef = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text  !== '') {
			const message = {
				from : this.props.name,
				text : this.state.text,
				color: this.props.color
			};
			this.props.onMessageSubmit(message);
		}	
		this.setState({ text: '' });
	}

	changeHandler(e) {
		this.setState({ text : e.target.value });
	}

	render() { 
		return(
			<Form onSubmit={e => this.handleSubmit(e)}>
				<MessageInput
					ref={this.inputRef}
					onMouseEnter={() => {this.inputRef.current.focus()}}
					onChange={e => this.changeHandler(e)}
					value={this.state.text}
					placeholder='Your Message text'
				/>
				<MessageBtn type='submit'>
					Send
					<FontAwesomeIcon icon='paper-plane' />
				</MessageBtn>
			</Form>
		);
	}
}

export default MessageForm;