import React from 'react';

import { Users, UsersOnline, UserItem } from '../Styled-Components/UsersList';

const UsersList = props => (
	<Users>
		<UsersOnline>
			{props.users.length} people online
		</UsersOnline>
		<ul> 
			{ props.users.map((user) => (
				<UserItem key={user.id} >
					{user.name}
				</UserItem>
			))}
		</ul>
	</Users>
);

export default UsersList;