let empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Lore'
    },
    {
        id: 1,
        nombre: 'Renato'
    }
]
let salarios = [
    {
        id: 1,
        salario: '$4000'
    },
    {
        id: 2,
        salario: '$8000'
    }
]

let getSalario = (empleado, callback)=>{
    const salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB) return callback(`El empleado [${empleado.nombre}] no se encontro su salario`)
    callback(null, salarioDB)
}

let getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id)
    if(!empleadoDB) return callback(`Empleado con ID [${id}] no encontrado`)
    callback(null, empleadoDB)
}

getEmpleado(2, (err, empleado)=>{
    if(err) return console.log(err)
    getSalario(empleado, (err, resp) =>{
        if(err) return console.log(err)
        console.log(`El empleado ${empleado.nombre} tiene como salario ${resp.salario}`)
    })
})