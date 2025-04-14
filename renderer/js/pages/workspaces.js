import { loadWorkspaces } from '../managers/workspaceManager.js';

export function render(container) {
	const workspaceContainer = document.createElement('div');
	workspaceContainer.id = 'workspace-list';
	container.appendChild(workspaceContainer);

	const workspaces = loadWorkspaces();

	displayWorkspaces(workspaces);
}

function displayWorkspaces(workspaces) {
	const workspaceContainer = document.getElementById('workspace-list');
	workspaceContainer.innerHTML = '';
	if (!Array.isArray(workspaces)) {
		workspaceContainer.innerHTML = '<p>No workspaces available.</p>';
	} else {
		workspaces.forEach(workspace => {
			const card = createWorkspaceCard(workspace);
			workspaceContainer.appendChild(card);
		});
	}
}

function createWorkspaceCard(workspace) {
	const card = document.createElement('div');
	card.className = 'workspace-card';
	card.style.border = '5px solid black';
	card.innerHTML = `
		<h3>${workspace.name}</h3>
		<p>${workspace.description}</p>
	`;
	return card;
}