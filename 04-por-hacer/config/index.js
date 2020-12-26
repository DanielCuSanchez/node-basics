const optCrear = {
    descripcion:{
        demandOption: true,
        alias: 'd'
    }
}
const optActualizar = {
    descripcion:{
        demandOption: true,
        alias: 'd'
    },
    completado:{
        alias: 'c',
        default: true
    }
}
const optBorrar = {
    descripcion:{
        demandOption: true,
        alias: 'd'
    }
}
const argv = require('yargs')
.command('crear','crea una tarea',optCrear )
.command('actualizar','actualiza  una tarea',optActualizar )
.command('borrar','borra  una tarea',optBorrar )

module.exports = { argv }