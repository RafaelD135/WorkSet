import { loadTasks } from '../managers/taskManager.js';

export function render(container) {
	const tasksContainer = document.createElement('div');
	tasksContainer.id = 'task-list';
	container.appendChild(tasksContainer);

	const tasks = loadTasks();

	displayTasks(tasks);
}

function displayTasks(tasks) {
	const taskContainer = document.getElementById('task-list');
	taskContainer.innerHTML = '';
	if(!Array.isArray(tasks)) {
		taskContainer.innerHTML = '<p>No tasks available</p>';
	} else {
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