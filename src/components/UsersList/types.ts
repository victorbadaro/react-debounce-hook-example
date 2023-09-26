import { ElementRef, HTMLAttributes } from 'react';

export interface User {
	id: number;
	name: string;
}

export interface UsersListProps extends HTMLAttributes<ElementRef<'ul'>> {
	search: string;
}
