let tasks = [];

export function loadTasks() {
	const data = window.api.lireJson('data/tasks.json');
	tasks = data;
	return tasks;
}

export function addTask(task) {
	task['id'] = crypto.randomUUID();
	tasks.push(task);
	saveTask();
}

export function saveTask() {
	window.api.ecrireJson('data/tasks.json', tasks);
}

export function launchTask(taskId) {
	const task = tasks.find(t => t.id === taskId);
	if (!task) {
		console.error(`Task with ID ${taskId} not found.`);
		return;
	}
	
	window.api.launchTask(task);
}