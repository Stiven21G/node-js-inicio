const os = require('node:os')

console.log("nombre del sistema " + os.platform())
console.log("Vesion del sistema " +os.release())
console.log("Arquitectura " +os.arch())
console.log("CPUS " +os.cpus())
console.log("Memoria Libre " +os.freemem() /1024 /1024)
console.log("Memoria Libre " +os.totalmem() /1024 /1024)
console.log("uptime " + os.uptime() /60 / 60)