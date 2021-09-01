//const { argv } = require('process');
//const { options } = require('yargs');
//const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
//console.log(process.argv);
//console.log(argv);
//console.log('Base Yargs', argv.base);

// const [,,arg3= 'base=5'] =process.argv;
// const [, base] = arg3.split('=');
//console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));

