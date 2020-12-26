const opts = {
    base:{
        demandOption: true,
        alias: 'b'
    },
    limite:{
        demandOption: true,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar','lista la tabla de multiplicar',opts)
    .command('crear','crea la tabla de multiplicar',opts)
module.exports = { argv }