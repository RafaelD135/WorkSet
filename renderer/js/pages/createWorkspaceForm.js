import { tasks } from '../managers/taskManager.js';
import { addWorkspace } from '../managers/workspaceManager.js';

export function renderCreateWorkspaceForm(container) {
	container.innerHTML = '';

	const formTitle = document.createElement('h1');
	formTitle.textContent = "Créer un nouvel espace de travail";
	container.appendChild(formTitle);

	const form = document.createElement('form');
	form.id = 'workspace-form';

	const titleLabel = document.createElement('label');
	titleLabel.setAttribute('for', 'title');
	titleLabel.textContent = "Nom de l'espace de travail :";
	form.appendChild(titleLabel);

	const titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.name = 'title';
	titleInput.id = 'title';
	form.appendChild(titleInput);

	const descriptionLabel = document.createElement('label');
	descriptionLabel.setAttribute('for', 'description');
	descriptionLabel.textContent = "Description :";
	form.appendChild(descriptionLabel);

	const descriptionInput = document.createElement('textarea');
	descriptionInput.name = 'description';
	descriptionInput.id = 'description';
	form.appendChild(descriptionInput);

	const selectedTaskTitle = document.createElement('h3');
	selectedTaskTitle.textContent = "Tâches sélectionnées :";
	form.appendChild(selectedTaskTitle);

	const selectedTaskList = document.createElement('ul');
	selectedTaskList.id = 'selected-task-list';
	form.appendChild(selectedTaskList);

	const addTaskButton = document.createElement('button');
	addTaskButton.type = 'button';
	addTaskButton.textContent = "Ajouter une tâche";
	addTaskButton.className = 'add-task-button';
	form.appendChild(addTaskButton);

	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.textContent = "Créer l'espace de travail";
	form.appendChild(submitButton);

	container.appendChild(form);

	const taskSelector = document.createElement('div');
	taskSelector.id = 'task-selector';
	taskSelector.style.display = 'none';
	
	const taskSelectorTitle = document.createElement('h3');
	taskSelectorTitle.textContent = "Sélectionner une tâche :";
	taskSelector.appendChild(taskSelectorTitle);

	const availableTaskList = document.createElement('ul');
	availableTaskList.id = 'available-task-list';
	taskSelector.appendChild(availableTaskList);

	const closeButton = document.createElement('button');
	closeButton.type = 'button';
	closeButton.textContent = "Fermer";
	closeButton.className = 'close-button';
	taskSelector.appendChild(closeButton);

	container.appendChild(taskSelector);

	addTaskButton.addEventListener('click', () => {
		openTaskSelector(selectedTaskList,availableTaskList,taskSelector,closeButton);
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		const newWorkspace = {
			name: formData.get('title'),
			description: formData.get('description'),
			tasks: Array.from(selectedTasksIds),
		};

		console.log(newWorkspace);
		addWorkspace(newWorkspace);

		form.reset();
		selectedTasksIds.clear();
		selectedTaskList.innerHTML = '';
		availableTaskList.innerHTML = '';
		taskSelector.style.display = 'none';
		container.innerHTML = '<p>Tâche créée avec succès !</p>';
	});
}

const selectedTasksIds = new Set();

function openTaskSelector(selectedTaskList,availableTaskList,taskSelector,closeButton) {
	availableTaskList.innerHTML = '';
	tasks.forEach(task => {
		if(!selectedTasksIds.has(task.id)) {
			console.log(selectedTasksIds.has(task.id));
			const li = document.createElement('li');
			li.textContent = task.type;
			
			const addButton = document.createElement('button');
			addButton.textContent = 'Ajouter';
			addButton.addEventListener('click', () => addTaskToWorkspace(task));
			li.appendChild(addButton);
			availableTaskList.appendChild(li);
		}
	});
	taskSelector.style.display = 'block';

	closeButton.addEventListener('click', () => {
		taskSelector.style.display = 'none';
	});

	function addTaskToWorkspace(task) {
		selectedTasksIds.add(task.id);
		console.log(selectedTasksIds);
		const li = document.createElement('li');
		li.textContent = task.type;
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Retirer';
		removeButton.addEventListener('click', () => {
			selectedTasksIds.delete(task.id);
			selectedTaskList.removeChild(li);
		});
		li.appendChild(removeButton);
		selectedTaskList.appendChild(li);
		openTaskSelector(selectedTaskList,availableTaskList,taskSelector,closeButton);
	}
}