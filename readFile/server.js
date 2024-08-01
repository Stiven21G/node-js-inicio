const express = require('express')
const app = express()
const {readFile} = require('fs').promises

const metodo = async (path) =>{
   try{
    const archivo = await readFile(path,) 
    return archivo
   }
   catch(err){
    console.log(err)
   }
  
}

    // const metodo = (path) =>{
    //     return new Promise ((resolve,reject) =>{
    //         readFile(path,'utf-8', (err,data)=>{
    //             if(err){
    //                 reject (err)
    //             }else{
    //                 return resolve (data)
    //             }
                
    //         })
    //     })
    // }

const desiredPORT = process.env.PORT ??1234

app.get('/',async (req, res) =>{

    const path = await metodo('../InicioSesion/inicio.html')

    res.writeHead(200,{'Content-Type':'text/html'})
     res.write(path)
     res.end()   
})
app.get('/styles.css',async (req, res) =>{

    const path = await metodo('../InicioSesion/styles.css')

    res.writeHead(200,{'Content-Type':'text/css'})
     res.write(path)
     res.end()   
})
//REGISTRO

app.get('/registro',async (req, res) =>{

    const path = await metodo('../registro/registro.html')

    res.writeHead(200,{'Content-Type':'text/html'})
     res.write(path)
     res.end()   
})
app.get('/styles.css',async (req, res) =>{

    const path = await metodo('../Registro/styles.css')

    res.writeHead(200,{'Content-Type':'text/css'})
     res.write(path)
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

















