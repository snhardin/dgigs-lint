const fs = require('fs');
const process = require('process');
const htmlhint = require('./web/htmlhint');

(function () {
    console.log('Starting build process...');

    try {
        console.log('Building htmlhint.json...');
        fs.writeFileSync('./web/htmlhint.json', JSON.stringify(htmlhint));
        console.log('Build complete!');
    } catch (err) {
        console.error('Error during build:', err);

        process.exit(1);
    }
}());
