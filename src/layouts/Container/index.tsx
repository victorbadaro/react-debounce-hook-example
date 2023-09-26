import { ContainerProps } from './types';

import styles from './styles.module.css';

export function Container({ children, ...rest }: ContainerProps) {
	return (
		<main {...rest} className={styles.container}>
			{children}
		</main>
	);
}
