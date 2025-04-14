export function render(container) {
	const title = document.createElement('h1');
	title.textContent = 'Paramètres';

	const info = document.createElement('p');
	info.textContent = 'Ici tu pourras gérer les options plus tard.';

	container.appendChild(title);
	container.appendChild(info);
}