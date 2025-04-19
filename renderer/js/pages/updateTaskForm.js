import { taskTypes } from '../managers/taskTypes.js';
import { updateTask } from '../managers/taskManager.js';
import { renderTasks } from  './tasks.js';

export function renderUpdateTaskForm(container,task) {
	container.innerHTML = '';

	const formTitle = document.createElement('h1');
	formTitle.textContent = "Modifier une tâche";
	container.appendChild(formTitle);

	const form = document.createElement('form');
	form.id = 'task-form';
	form.className = 'task-form';

	const typeLabel = document.createElement('label');
	typeLabel.setAttribute('for', 'type');
	typeLabel.textContent = "Type de tâche :";
	form.appendChild(typeLabel);

	const typeInput = document.createElement('input');
	typeInput.type = 'text';
	typeInput.name = 'type';
	typeInput.id = 'type';
	typeInput.value = task.type;
	typeInput.disabled = true;
	form.appendChild(typeInput);

	const fieldsContainer = document.createElement('div');
	fieldsContainer.id = 'fields-container';

	const selectedTaskType = taskTypes.find(taskType => taskType.type === task.type);
	selectedTaskType.fields.forEach(field => {
		const fieldLabel = document.createElement('label');
		fieldLabel.setAttribute('for', field.name);
		fieldLabel.textContent = field.label + " :";
		fieldsContainer.appendChild(fieldLabel);

		const fieldInput = document.createElement('input');
		fieldInput.type = field.type;
		fieldInput.name = field.name;
		fieldInput.id = field.name;
		fieldInput.value = task[field.name] || '';
		fieldsContainer.appendChild(fieldInput);
	});

	form.appendChild(fieldsContainer);

	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.textContent = "Modifier la tâche";
	form.appendChild(submitButton);

	container.appendChild(form);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		const updatedTask = {
			type: task.type,
		};

		selectedTaskType.fields.forEach(field => {
			updatedTask[field.name] = formData.get(field.name);
		});

		updateTask(task.id, updatedTask);
		form.reset();
		renderTasks(container);
	});
}