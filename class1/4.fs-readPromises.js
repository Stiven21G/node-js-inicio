const fs = require('node:fs/promises')

//const text = fs.readFileSync('./archivo.txt','utf-8') //Sincron0. ////readFile = asincrono
//ASINCRONO CON PROMISES
fs.readFile('./archivo.txt', 'utf-8')
.then(text =>{
    console.log(text)
})
 console.log("HACIENDO COSAS")