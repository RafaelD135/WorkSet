import { loadTasks } from '../managers/taskManager.js';
import { taskTypes } from '../managers/taskTypes.js';

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
		displayCreateTaskForm(container);
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
	return card;
}

function displayCreateTaskForm(container) {
	container.innerHTML = '';

	const formTitle = document.createElement('h1');
	formTitle.textContent = "Créer une nouvelle tâche";
	container.appendChild(formTitle);

	const form = document.createElement('form');
	form.id = 'task-form';

	const typeLabel = document.createElement('label');
	typeLabel.setAttribute('for', 'type');
	typeLabel.textContent = "Type de tâche :";
	form.appendChild(typeLabel);

	const typeSelect = document.createElement('select');
	typeSelect.name = 'type';
	typeSelect.id = 'type';

	taskTypes.forEach(taskType => {
		const option = document.createElement('option');
		option.value = taskType.type;
		option.textContent = taskType.label;
		typeSelect.appendChild(option);
	});

	form.appendChild(typeSelect);
	
	const fieldsContainer = document.createElement('div');
	fieldsContainer.id = 'fields-container';
	form.appendChild(fieldsContainer);

	typeSelect.addEventListener('change', () => {
		updateFields(fieldsContainer, typeSelect.value);
	});

	updateFields(fieldsContainer, typeSelect.value);

	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.textContent = "Créer la tâche";
	form.appendChild(submitButton);

	container.appendChild(form);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		const newTask = {
			type: formData.get('type'),
		};
	
		const selectedTaskType = taskTypes.find(taskType => taskType.type === newTask.type);
		selectedTaskType.fields.forEach(field => {
			newTask[field] = formData.get(field);
		});
	
		console.log('Tâche créée :', newTask);
		// saveTask(newTask);
		
		form.reset();
		container.innerHTML = '<p>Tâche créée avec succès !</p>';
	});
}

function updateFields(container, taskType) {
	container.innerHTML = '';

	const selectedTaskType = taskTypes.find(type => type.type === taskType);

	selectedTaskType.fields.forEach(field => {
		const label = document.createElement('label');
		label.textContent = field.label + ' :';

		const input = document.createElement('input');
		input.type = field.type;
		input.name = field.name;

		container.appendChild(label);
		container.appendChild(input);
	});
}