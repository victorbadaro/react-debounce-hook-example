import { ElementRef, HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<ElementRef<'main'>> {
	children: ReactNode;
}
