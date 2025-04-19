import { taskTypes } from '../managers/taskTypes.js';
import { addTask } from '../managers/taskManager.js';

export function renderCreateTaskForm(container) {
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

		console.log(newTask);
	
		const selectedTaskType = taskTypes.find(taskType => taskType.type === newTask.type);
		selectedTaskType.fields.forEach(field => {
			newTask[field.name] = formData.get(field.name);
			console.log(field, newTask[field]);
		});
	
		console.log('Tâche créée :', newTask);
		addTask(newTask);
		
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