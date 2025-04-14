export const taskTypes = [
	{
		type: 'Terminal',
		label: 'Terminal',
		fields: [
			{ name: 'projectPath', type: 'text', label: 'Chemin du projet' },
		]
	},
	{
		type: 'WebPage',
		label: 'Page Web',
		fields: [
			{ name: 'url', type: 'url', label: 'URL de la page' }
		]
	},
	{
		type: 'VsCode',
		label: 'VS Code',
		fields: [
			{ name: 'projectPath', type: 'text', label: 'Chemin du projet' }
		]
	},
	{
		type: 'FileExplorer',
		label: 'Explorateur de fichiers',
		fields: [
			{ name: 'projectPath', type: 'text', label: 'Chemin du projet' }
		]
	}
];