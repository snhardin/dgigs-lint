const fs = require('fs');
const process = require('process');

function main () {
    const mode = process.argv[2];
    if (!mode) {
        console.error('Wrong number of arguments.');
        console.error('Usage: dgigs-lint <angular/typescript/javascript>');
        process.exit(1);

        return;
    }

    // As much as I'd love to use a switch-case, we need better scope management.
    if (mode === 'angular') {
        const options = require('./typescript');
        options.env.browser = true;

        const htmlhint = require('./web/htmlhint');

        fs.writeFileSync('.eslintrc.json', JSON.stringify(options));
        fs.writeFileSync('.htmlhintrc.json', JSON.stringify(htmlhint));
    } else if (mode === 'typescript') {
        const options = require('./typescript');
        options.env.node = true;

        fs.writeFileSync('.eslintrc.json', JSON.stringify(options));
    } else if (mode === 'javascript') {
        const options = require('./javascript');
        options.env.node = true;

        fs.writeFileSync('.eslintrc.json', JSON.stringify(options));
    } else {
        console.error('Unknown option.');
        console.error('Usage: dgigs-lint <angular/typescript/javascript>');
        process.exit(1);

        return;
    }

    console.log('Finished generating config files.');
}

main();
