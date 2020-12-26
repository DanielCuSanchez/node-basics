const fs = require('fs');

//Variable inicial de DB
let listadoPorHacer = []

//Funciones DB
const guardarData = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./data-store/index.json',data,(err)=>{
        if(err) throw new Error('No se pudo guardar')
    });

}
const consultarData = ()=>{
    try {
        listadoPorHacer =  require('../data-store/index.json')
    } catch (error) {
        listadoPorHacer = []
    }
}
//Funciones de comandos
const crear = ( descripcion ) => {
    consultarData();
    let porHacer = {
        descripcion,
        completado: false
    };
    //console.log(listadoPorHacer)
    listadoPorHacer.push(porHacer);
    //console.log(listadoPorHacer)
    guardarData()
    return porHacer;
}
const listar = ()=>{
    consultarData();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    consultarData();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarData();
        return true;
    }
    return false;
}

const borrar = (descripcion)=>{
    consultarData();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer.splice(index,1);
        guardarData();
        return true;
    }
    return false;
}

module.exports =  { crear , listar, actualizar, borrar}