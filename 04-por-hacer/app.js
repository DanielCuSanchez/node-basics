const { argv } = require('./config').argv
const colors = require('colors/safe');

const porHacer = require('./por-hacer')

const comando = argv._[0]

switch(comando){
    case 'crear':
        console.log('Comando: crear ----> Crea una tarea');
        let tarea = porHacer.crear( argv.descripcion );
        console.log(`Tarea ingresada: ${JSON.stringify(tarea)}`);
        break;
    case 'listar':
        console.log('Comando: listar ----> Lista las tareas');
        let listado = porHacer.listar();
        for (const tarea of listado){
            console.log(colors.green('--------------TAREA--------------'));
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Status: ${ tarea.completado ? colors.green(tarea.completado): colors.red(tarea.completado)}`);
            console.log('=================================');
        }
        break;
    case 'actualizar':
        console.log('Comando: actualizar ----> Actualiza una tarea');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Comando: borrar ----> Borra una tarea');

        const borrado = porHacer.borrar(argv.descripcion);
        
        console.log(`La tarea se borro: ${borrado ? colors.green(borrado): colors.red(borrado)}`);

        break;
    default: 'NINGUN COMANDO'
}
