import React, { Component } from 'react';
import io from 'socket.io-client';
import styles from './css/App.css';
import MessageForm from './Components/MessageForm.js';
import MessageList from './Components/MessageList.js';
import UsersList from './Components/UsersList.js';
import UserForm from './Components/UserForm.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun)

const socket = io('/');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [],
			text: '',
			name: '',
			color: '',
			darkThema: false
		};
	}

	componentDidMount = () => {
		socket.on('message', message => this.messageReceive(message));
		socket.on('update', ({users}) => this.chatUpdate(users));
	}

	messageReceive(message) {
		const messages = [...this.state.messages, message];
		this.setState({messages});
	}

	chatUpdate(users) {
		this.setState({users});
	}
	
	handleMessageSubmit(message) {
		const messages = [...this.state.messages, message];
		this.setState({messages});
		socket.emit('message', message);
	}

	handleUserSubmit(name) {
		this.setState({name});
		socket.emit('join', name);
	}

	handleUserColor(color) {
        this.setState({color});
	}
	
	ThemaOnclickHandler = () => {
		(!this.state.darkThema) ? this.setState({darkThema: true}) : this.setState({darkThema: false});
	}

	render() { 
		return this.state.name !== '' ? this.renderLayout () : this.renderUserForm()
	}
	
	renderLayout() { console.log(this.state.darkThema);
	
		return (
			<div className = {styles.App}>
				<div className = {styles.Header}>
					<div className = {styles.AppTitle}>
						ChatLogo
					</div>
					<div className = {styles.AppRoom}>
						Chat room 
						<span onClick={this.ThemaOnclickHandler}>
							{this.state.darkThema ? <FontAwesomeIcon icon='moon' /> : <FontAwesomeIcon icon='sun' />}
						</span>
					</div>
				</div>
				<div className = {styles.AppBody}>
					<UsersList
						users = {this.state.users}
					/>
					<div className = {styles.MessageWrapper}>
						<MessageList
							messages = {this.state.messages}
						/>
						<MessageForm
							onMessageSubmit = 
								{ message => this.handleMessageSubmit(message)}
								name = {this.state.name}
								color = {this.state.color}
						/>
					</div>
				</div>
			</div>
		);
	}

	renderUserForm() {
		return (
			<UserForm 
				onUserSubmit= {
					(name, color) => {
						this.handleUserSubmit(name);
						this.handleUserColor(color);
					}
				} 
			/>
		);
	}
};

export default App;