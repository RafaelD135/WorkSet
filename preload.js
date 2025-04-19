const fs = require('fs');
const path = require('path');
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
	lireJson: (nomFichier) => {
		const filePath = path.join(__dirname, nomFichier);
		const data = fs.readFileSync(filePath, 'utf-8');
		return data.trim() ? JSON.parse(data) : {};
	},

	ecrireJson: (nomFichier, data) => {
		const filePath = path.join(__dirname, nomFichier);
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
	}
});
