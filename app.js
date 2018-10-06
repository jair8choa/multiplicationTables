const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(listar => console.log(`Listo!`.green))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`tabla-${base}-${limite}.txt fue creado!`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Valor no valido (listar O crear)'.red);
        break;
}