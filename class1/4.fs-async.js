
//Los elementos asincronos como await llevan la extension mjs, debido a los modulos que se usan

const { readFile } = require('node:fs/promises')

//IIFE = Inmediatly Invoked Function Expression

//ASINCRONO SECUENCIAL
        ;(
            async () =>{
                const text = await readFile('./archivo.txt', 'utf-8')
                console.log("Primer Texto:",text)
                console.log("HACIENDO COSAS")

        }
        )();
