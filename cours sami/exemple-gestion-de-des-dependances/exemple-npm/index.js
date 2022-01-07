const moduleCommander = require('commander');
const moduleChalk = require('colors');

moduleCommander.program.option('-v, --version', 'Affiche la version')
moduleCommander.program.parse(process.argv);
const options = moduleCommander.program.opts();

if (options.version) {
    console.log('Version 0.0.1 de mon outil en ligne de commande'.green);
}