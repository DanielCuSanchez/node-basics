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

const getEmpleado = (id) =>{
    return new Promise((resolve, reject)=>{
        const empleadoDB = empleados.find(e => e.id === id)
        if(!empleadoDB) {
            reject(`No encontramos el empleado con id[${id}]`)
        }else{
            resolve(empleadoDB)
        }
    })
}
const getSalario = (empleado)=>{
    return new Promise((resolve, reject)=>{
        const {nombre, id} = empleado;
        const salarioDB = salarios.find(s => s.id === id);
        if(!salarioDB){
            reject(`Empleado [${nombre}] no tiene salario`)
        }else{
            resolve(`El salario de [${nombre}] es [${salarioDB.salario}]`)
        }
    })
}
getEmpleado(1)
.then(empleado => {
    console.log(empleado)
    return getSalario(empleado)
})
.then(salario => console.log(salario))
.catch(e => console.log(e))