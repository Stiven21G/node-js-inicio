const express = require('express')
const app = express()
const { readFileSync } = require('fs')

const inicio = readFileSync('../InicioSesion/inicio.html')

const desiredPORT = process.env.PORT ??1234

app.get('/', (req, res) =>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(inicio)
        res.end()
    
})



app.listen(desiredPORT, () =>{
    console.log(`listening on port http://localhost:${desiredPORT}`)
})

















// const http = require('node:http')

// const desiredPORT = process.env.PORT ?? 1234

// const processRequest = ((req,res) => {
//     res.setHeader('Content-Type','utf-8')
//     const {method, url} = req

//     if(method === 'GET' && url === '/'){
//         res.statusCode = 200
//         res.end('jajajajajajajajajajjajaj ;)')

//     }
// })

// const server = http.createServer(processRequest)

// server.listen(desiredPORT, () =>{
//     console.log(`listening on port http://localhost:${desiredPORT}`)
// })

















