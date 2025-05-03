let workspaces = [];

export function loadWorkspaces() {
	const data = window.api.lireJson('data/workspaces.json');
	workspaces = data;
	return workspaces;
}

export function addWorkspace(workspace) {
	workspace['id'] = crypto.randomUUID();
	workspaces.push(workspace);
	saveWorkspaces();
}

export function saveWorkspaces() {
	window.api.ecrireJson('data/workspaces.json', workspaces);
}