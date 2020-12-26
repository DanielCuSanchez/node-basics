const { argv } = require('./config/yargs').argv
const { crearTabla, listarTabla  } = require('./multiplicar')
//console.log(argv.base, argv.limite)

let comando = argv._[0]

switch(comando){
    case 'listar':
        console.log('LISTAR');
        listarTabla(argv.base, argv.limite)
            .then(msj => console.log(msj))
            .catch(e => console.log(e))
    break;
    case 'crear':
        console.log('CREAR');
        crearTabla(argv.base)
            .then(msj => console.log(msj))
            .catch(e => console.log(e))
    break;
    default: console.log('COMANDO NO RECONOCIDO')
}


// let base =10



