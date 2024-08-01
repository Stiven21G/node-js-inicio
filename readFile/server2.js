const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('../public'))

app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'../InicioSesion/inicio.html'))
})


const desiredPORT = process.env.PORT ??1234

app.listen(desiredPORT, () =>{
    console.log(`listening on port http://localhost:${desiredPORT}`)
})



