const fs = require('fs');
const path = require('path');
const { contextBridge } = require('electron');
const { exec } = require('child_process');


contextBridge.exposeInMainWorld('api', {
	lireJson: (nomFichier) => {
		const filePath = path.join(__dirname, nomFichier);
		const data = fs.readFileSync(filePath, 'utf-8');
		return data.trim() ? JSON.parse(data) : {};
	},

	ecrireJson: (nomFichier, data) => {
		const filePath = path.join(__dirname, nomFichier);
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
	},

	launchTask: (task) => {
		if (task.type === 'VsCode') {
			exec(`code "${task.projectPath}"`);
		} else if (task.type === 'Terminal') {
			exec(`start cmd /K "cd ${task.projectPath}"`);
		} else if (task.type === 'WebPage') {
			exec(`start ${task.url}`);
		} else if (task.type === 'FileExplorer') {
			exec(`start "" "${task.projectPath}"`);
		} else {
			console.warn('Type de tâche non reconnu :', task.type);
		}
	}
});
