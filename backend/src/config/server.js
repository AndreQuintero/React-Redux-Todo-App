const port = 3005

const bodyParser = require('body-parser')  //faz o parser do corpo da requisição, 
const express = require('express') //servidor web, roda em cima do node
const server = express() //starta o server do express
const allowCors = require('./cors')

//MIDDLEWARES

server.use(bodyParser.urlencoded({ extended: true}))  //middlewares do express//sempre que chegar uma requisição de urlenconded, que é o padrão usado pra subimissão de formulários, quem vai fazer o parser é o body parser, e o extend suporta mais tipo de dados
server.use(bodyParser.json()) // faz o parser das requisições de formato json
server.use(allowCors)


server.listen(port, function(){ //registra a porta
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server