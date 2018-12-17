import React, {Component} from 'react';
import { Login, LoginInput } from '../Styled-Components/UserForm';

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
	  		color: ''
		};
  	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onUserSubmit(this.state.name, this.state.color);
	}

	handleChange = (e) => {
		const randomCol = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		this.setState({ name: e.target.value });
		this.setState({ color: randomCol });
	}

	render() {
		return(
			<Login onSubmit={this.handleSubmit}>
				<LoginInput
					placeholder='Write your nickname and press enter to join chat'
					onChange={e => this.handleChange(e)}
					value={this.state.name}
				/>
			</Login>
		);
	}
}

export default UserForm;