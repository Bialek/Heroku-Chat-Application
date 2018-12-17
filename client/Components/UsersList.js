import React from 'react';

import { Users, UsersOnline, UserItem, UserList } from '../Styled-Components/UsersList';

const UsersList = props => (
	<Users openUsersList={props.openUsersList}>
		<UsersOnline>
			{props.users.length} people online
		</UsersOnline>
		<UserList> 
			{ props.users.map((user) => (
				<UserItem key={user.id} >
					{user.name}
				</UserItem>
			))}
		</UserList>
	</Users>
);

export default UsersList;