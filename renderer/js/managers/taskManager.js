let tasks = [];

export const taskTypes = [
	{
		type: 'Terminal',
		label: 'Terminal',
		fields: ['projectPath']
	},
	{
		type: 'WebPage',
		label: 'Page Web',
		fields: ['url']
	},
	{
		type: 'VsCode',
		label: 'VS Code',
		fields: ['projectPath']
	},
	{
		type: 'FileExplorer',
		label: 'Explorateur de fichiers',
		fields: ['projectPath']
	}
];

export function loadTasks() {
	const data = window.api.lireJson('data/tasks.json');
	tasks = data;
	return tasks;
}

