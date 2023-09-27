import { Model, createServer } from 'miragejs';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

createServer({
	models: {
		user: Model
	},

	seeds(server) {
		server.db.loadData({
			users: [
				{ id: 1, name: 'Michael Jordan' },
				{ id: 2, name: 'Kobe Bryant' },
				{ id: 3, name: 'LeBron James' },
				{ id: 4, name: 'Shaquille O\'Neal' }
			]
		});
	},

	routes() {
		this.urlPrefix = import.meta.env.DEV ? 'http://localhost:5173' : 'https://react-debounce-hook-example.netlify.app';

		this.get('/users', (schema, request) => {
			const { name } = request.queryParams;

			return schema.db.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
		});
	}
});

createRoot(document.getElementById('root')!).render(<App />);
