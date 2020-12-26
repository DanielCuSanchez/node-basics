const fs = require('fs');
const colors = require('colors/safe')

const listarTabla = (base, limite)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('NO ES UN NUMERO')
            return
        }
        let data = ''
        console.log(colors.green('-----------------'))
        console.log(`Tabla ${base} creada`)
        console.log(colors.green('-----------------'))
        for (let i = 1 ; i <= limite; i++){
            data += `${base} x ${i} = ${base * i}\n`
        }
        resolve(data)
    })
}


const crearTabla = ( base )=>{
    return new Promise((resolve, reject)=>{

        if( !Number(base)) {
            reject('NO ES UN NUMERO')
            return
        }

        let data = ''
        for (let i = 1 ; i <= 10; i++){
            data += `${base} x ${i} = ${base * i}\n`
        }

        fs.writeFile(`./multiplicar/tabla/archivo-tabla${base}.txt`,data,(err)=>{
            if(err)
                reject(`EL ERROR: ${err}`)
            else
                resolve(colors.green(`Archivo tabla ${base} has sido creado`))
        })
    })
}

module.exports = { crearTabla, listarTabla}