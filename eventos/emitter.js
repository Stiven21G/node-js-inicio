const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//PUEDEN HABER VARIOS COMMITER
customEmitter.on('response', () =>{
    console.log('data received')
})

customEmitter.on('response', () =>{
    console.log('HA')
})


customEmitter.emit('response')//SIEMPRE DEBE IR DE ULTIMAS