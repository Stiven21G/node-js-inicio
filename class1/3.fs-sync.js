
const fs = require('node:fs')

const texto = fs.readFileSync('./archivo.txt','utf-8')
console.log('Primer texto: ' + texto)
console.log("HCAIENDO COSAS MIENTRAS SE EJECUTA")