let workspaces = [];

export function loadWorkspaces() {
	const data = window.api.lireJson('data/workspaces.json');
	workspaces = data;
	return workspaces;
}

