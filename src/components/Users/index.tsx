import { useDebounce } from '@/hooks/useDebounce';
import { useState } from 'react';
import { UsersList } from '../UsersList';
import { UsersProps } from './types';

import styles from './styles.module.css';

export function Users({ ...rest }: UsersProps) {
	const [search, setSearch] = useState('');
	const debouncedName = useDebounce(search, 400);

	return (
		<div {...rest} className={styles['users-container']}>
			<input
				type="text"
				placeholder="Name"
				value={search}
				onChange={event => setSearch(event.target.value)}
			/>

			<UsersList search={debouncedName} />
		</div>
	);
}
