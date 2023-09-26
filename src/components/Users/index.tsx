import { useEffect, useState } from 'react';
import { User, UsersProps } from './types';

import styles from './styles.module.css';

export function Users({ ...rest }: UsersProps) {
	const [name, setName] = useState('');
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch(`http://localhost:3000/users?name_like=${name}`)
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(error => console.error(error));
	}, [name]);

	return (
		<div {...rest} className={styles['users-container']}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={event => setName(event.target.value)}
			/>

			<ul>
				{users.map(user => <li key={user.id}>{user.id} - {user.name}</li>)}
			</ul>
		</div>
	);
}
