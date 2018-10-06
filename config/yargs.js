const opts = {
    base: {
        demand: true,
        alias: 'b',
        desc: 'Numero base',
    },
    limite: {
        default: 10,
        alias: 'l',
        desc: 'Numero Limite',
    }
}

const argv = require('yargs')
    .command('listar', 'Muestra en consola', opts)
    .command('crear', 'Crea archivo .txt', opts)
    .help()
    .argv;

module.exports = {
    argv
}