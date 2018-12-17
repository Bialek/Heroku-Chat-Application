import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageForm from './Components/MessageForm.js';
import MessageList from './Components/MessageList.js';
import UsersList from './Components/UsersList.js';
import UserForm from './Components/UserForm.js';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styled-Components/GlobalStyles';
import { Container, Header, AppTitle, AppRoom, AppBody, Wrapper  } from './Styled-Components/Styles';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPaperPlane, faComments, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun, faPaperPlane, faComments, faBars, faTimes)

const socket = io('/');

const light = {
	PrimaryColor: '#162935',
	Background: '#ccc'
  };

const dark = {
	PrimaryColor: '#ccc',
	Background: '#162935'
  };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [],
			text: '',
			name: '',
			color: '',
			Theme: 'light',
			openUsersList: true,
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
	
	handlerTheme = () => {
		(this.state.Theme === 'light') ? this.setState({Theme: 'dark'}) : this.setState({Theme: 'light'});
	}

	handleropenUsersList = () => {
		(this.state.openUsersList) ? this.setState({openUsersList: false}) : this.setState({openUsersList: true});
	}

	render() { 
		return this.state.name !== '' ? this.renderLayout () : this.renderUserForm()
	}
	
	renderLayout() {
		return (
			<ThemeProvider theme={this.state.Theme === 'light' ? light : dark }>
				<Container>
					<Header>
						<span onClick={this.handleropenUsersList}>
							{this.state.openUsersList ? <FontAwesomeIcon icon='times' /> : <FontAwesomeIcon icon='bars' /> }
						</span>
						<h1>Heroku Chat Application </h1>
						<span onClick={this.handlerTheme}>
							{this.state.Theme === 'light' ? <FontAwesomeIcon icon='sun' /> : <FontAwesomeIcon icon='moon' />}
						</span>
					</Header>
					<AppBody>
						<UsersList
							openUsersList = {this.state.openUsersList}
							users = {this.state.users}
						/>
						<Wrapper>
							<MessageList
								messages = {this.state.messages}
							/>
							<MessageForm
								onMessageSubmit = 
									{ message => this.handleMessageSubmit(message)}
									name = {this.state.name}
									color = {this.state.color}
							/>
						</Wrapper>
					</AppBody>
					<GlobalStyle />
				</Container>
			</ThemeProvider>
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