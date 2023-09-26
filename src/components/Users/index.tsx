import { useState } from 'react';
import { UsersList } from '../UsersList';
import { UsersProps } from './types';

import styles from './styles.module.css';

export function Users({ ...rest }: UsersProps) {
	const [name, setName] = useState('');

	return (
		<div {...rest} className={styles['users-container']}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={event => setName(event.target.value)}
			/>

			<UsersList search={name} />
		</div>
	);
}
