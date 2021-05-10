#!/usr/bin/env node

const fs = require('fs');
const html = require('./html');

const htmlFilePath = './.htmlhintrc';

(function () {
	const mode = process.argv[2];
	if (!mode) {
		console.error('Wrong number of arguments.');
		console.error('Usage: dgigs-lint <html>');
		process.exit(1);
	}

	switch (mode.toLowerCase()) {
		case 'html':
			try {
				fs.writeFileSync(htmlFilePath, JSON.stringify(html));
				console.log('Wrote .htmlhintrc file to disk');
			} catch (err) {
				console.error(`Error while writing ${htmlFilePath} file:`, err);
			}

			break;

		default:
			console.error(`Unknown option ${mode}`);
			console.error('Usage: dgigs-lint <html>');

			break;
	}
}());
