// FILE SYSTEM SE USA PARA LEER Y ECRIBIR ARCHIVOS

const { readFile, writeFile } =  require('fs').promises

// const util = require('util') 
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


//const { readFile } =  require('fs') //Declarar variable, en los parentesis va el nombre del metodo
//const fs = require('node:fs')Declarar variable,
//Crear funcion con la variable


const start = async () =>{
    try{
        const texto = await readFile('./archivo.txt','utf-8')
        const texto2 = await readFile('./archivo2.txt','utf-8')
        const crear = await writeFile('./escribir.txt',
            `ESTO ES INCREIBLE:--${texto}${texto2}`,{flag:'a'})
        console.log(texto,texto2)
    }catch(err){
        console.log(err)
    }
}

start()


const ht = reqi
// FUNCION PARA LEER ARCHIVOS PROMISE

// const getText = (path) =>{
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf-8', (err, text) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(text)
//             }
           
//           }); 
//     })    
// }

// OBT

// getText('./archivo.txt')
// .then(result=> console.log(result))
// .catch(err => console.log(err))  


// const start = async () =>{
//     try{
//         const texto = await getText('./archivo.txt')
//         const texto2 = await getText('./archivo2.txt')
//         console.log(texto,texto2)
//     }catch(err){
//         console.log(err)
//     }
// }

// start()