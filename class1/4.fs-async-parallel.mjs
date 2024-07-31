
//Los elementos asincronos como await llevan la extension mjs, debido a los modulos que se usan

import { readFile } from 'node:fs/promises'

//IIFE = Inmediatly Invoked Function Expression

//ASINCRONO PARALELO
 Promise.all([   
   readFile('./archivo.txt','utf-8'),
   readFile('./archivo2.txt','utf-8')
  ]).then(([text,secondText]) =>{
    console.log('Primero ',text)
    console.log('Segundo',secondText)
  })