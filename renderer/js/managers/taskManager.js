let tasks = [];

export function loadTasks() {
	const data = window.api.lireJson('data/tasks.json');
	tasks = data;
	return tasks;
}

