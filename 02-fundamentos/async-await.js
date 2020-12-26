
const getNombres = ( )=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Daniel')
        },3000)
    })
}

const saludar = async()=>{
    const nombre = await getNombres()
    return `Hola ${nombre}`
}

saludar()
.then((msg)=> console.log(msg))
.catch((err)=>console.log(err))
