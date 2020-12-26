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

const getEmpleado = async (id) =>{
    const empleadoDB = await empleados.find(e => e.id === id)
    if(!empleadoDB) {
        throw new Error(`No encontramos el empleado con id[${id}]`)
    }else{
        return empleadoDB
    }
}
const getSalario = async(empleado)=>{

    const {nombre, id} = empleado;
    const salarioDB = await salarios.find(s => s.id === id);
    if(!salarioDB){
        throw new Error(`Empleado [${nombre}] no tiene salario`)
    }else{
        return `El salario de [${nombre}] es [${salarioDB.salario}]`
    }

}

const getInformacion = async (id) =>{
    const empleado = await getEmpleado(id)
    const response = await getSalario(empleado)
    console.log(empleado,response)
}

getInformacion(1)
