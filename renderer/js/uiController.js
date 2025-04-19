import * as home from './pages/home.js';
import * as settings from './pages/settings.js';
import * as workspaces from './pages/workspaces.js';
import * as tasks from './pages/tasks.js';

function switchView(view) {
	const container = document.getElementById('content');
	container.innerHTML = '';

	switch (view) {
		case 'home':
			home.renderHome(container);
			break;
		case 'settings':
			settings.renderSettings(container);
			break;
		case 'workspaces':
			workspaces.renderWorkspaces(container);
			break;
		case 'tasks':
			tasks.renderTasks(container);
			break;
	}
}

document.getElementById('btn-home').addEventListener('click', () => switchView('home'));
document.getElementById('btn-settings').addEventListener('click', () => switchView('settings'));
document.getElementById('btn-workspaces').addEventListener('click', () => switchView('workspaces'));
document.getElementById('btn-tasks').addEventListener('click', () => switchView('tasks'));

switchView('home');