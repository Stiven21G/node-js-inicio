const fs = require('node:fs')

//const text = fs.readFileSync('./archivo.txt','utf-8') //Sincron0. ////readFile = asincrono

//ASINCRONO CON CALLBACK
fs.readFile('./archivo.txt', 'utf-8',(err, text) =>{
    console.log('TEXTO: ', text)
})
 console.log("HACIENDO COSAS")