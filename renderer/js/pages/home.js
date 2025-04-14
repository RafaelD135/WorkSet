import { loadTasks } from '../managers/taskManager.js';
import { loadWorkspaces } from '../managers/workspaceManager.js';

export function render(container) {
	const workspaceContainer = document.createElement('div');
	workspaceContainer.id = 'workspace-list';
	container.appendChild(workspaceContainer);

	const tasksContainer = document.createElement('div');
	tasksContainer.id = 'task-list';
	container.appendChild(tasksContainer);

	const workspaces = loadWorkspaces();
	const tasks = loadTasks();

	displayWorkspaces(workspaces);
	displayTasks(tasks);
}

function displayWorkspaces(workspaces) {
	const workspaceContainer = document.getElementById('workspace-list');
	workspaceContainer.innerHTML = '';
	if (!Array.isArray(workspaces)) {
		workspaceContainer.innerHTML = '<p>No workspaces available.</p>';
	} else {
		workspaces = workspaces.slice(0,3);
		workspaces.forEach(workspace => {
			const card = createWorkspaceCard(workspace);
			workspaceContainer.appendChild(card);
		});
	}
}

function createWorkspaceCard(workspace) {
	const card = document.createElement('div');
	card.className = 'workspace-card';
	card.style.border = '5px solid black';
	card.innerHTML = `
		<h3>${workspace.name}</h3>
		<p>${workspace.description}</p>
	`;
	return card;
}

function displayTasks(tasks) {
	const taskContainer = document.getElementById('task-list');
	taskContainer.innerHTML = '';
	if(!Array.isArray(tasks)) {
		taskContainer.innerHTML = '<p>No tasks available</p>';
	} else {
		tasks = tasks.slice(0,3);
		tasks.forEach(task => {
			const card = createTaskCard(task);
			taskContainer.appendChild(card);
		})
	}
}

function createTaskCard(task) {
	const card = document.createElement('div');
	card.className = 'task-card';
	card.style.border = '5px solid red';

	let content = `<h4>${task.type}</h4>`;

	switch (task.type) {
		case 'Terminal':
		case 'VsCode':
		case 'FileExplorer':
			content += `<p><strong>Chemin :</strong> ${task.projectPath}</p>`;
			break;
		case 'WebPage':
			content += `<p><strong>URL :</strong> <a href="${task.url}" target="_blank">${task.url}</a></p>`;
			break;
		default:
			content += `<p>Tâche inconnue</p>`;
	}

	card.innerHTML = content;
	return card;
}