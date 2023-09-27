import { useEffect, useState } from 'react';
import { User, UsersListProps } from './types';

import styles from './styles.module.css';

export function UsersList({ search, ...rest }: UsersListProps) {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch(`/users?name=${search}`)
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(error => console.error(error));
	}, [search]);

	return (
		<ul {...rest} className={styles['users-list']}>
			{users.map(user => <li key={user.id}>{user.id} - {user.name}</li>)}
		</ul>
	);
}
