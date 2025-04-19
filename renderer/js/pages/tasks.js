import { launchTask, loadTasks } from '../managers/taskManager.js';
import { renderCreateTaskForm } from './taskForm.js';

export function render(container) {
	const tasksContainer = document.createElement('div');
	tasksContainer.id = 'task-list';
	container.appendChild(tasksContainer);

	const tasks = loadTasks();

	displayTasks(tasks);

	const addTaskButton = document.createElement('button');
	addTaskButton.textContent = 'Ajouter une tâche';
	addTaskButton.className = 'add-task-button';

	addTaskButton.addEventListener('click', () => {
		renderCreateTaskForm(container);
	});
	
	tasksContainer.appendChild(addTaskButton);
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

	const launchButton = document.createElement('button');
	launchButton.textContent = 'Lancer';
	launchButton.onclick = () => {
		launchTask(task.id);
	}

	card.appendChild(launchButton);

	return card;
}