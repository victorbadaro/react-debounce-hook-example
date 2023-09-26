import { ElementRef, HTMLAttributes } from 'react';

export interface User {
	id: number;
	name: string;
}

export interface UsersProps extends HTMLAttributes<ElementRef<'div'>> { }
