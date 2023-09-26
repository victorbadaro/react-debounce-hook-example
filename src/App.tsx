import { Users } from './components/Users';
import { Container } from './layouts/Container';

import './styles/global.css';

export function App() {
	return (
		<Container>
			<h1>React Debounce Hook Example</h1>
			<Users />
		</Container>
	);
}
