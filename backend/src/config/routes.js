const express = require('express') // express é um servidor web

module.exports = function(server){ // exporta a função das rotas para o loader
    
    //API Routes

    const router = express.Router()
    server.use('/api', router) //middleware/ toda vez que for digitado '/api' o router será chamado
    
    
    //TODO Routes
    const todoService = require('../api/todo/todoService') //importa o todoService
    todoService.register(router,'/todos') //register é um método do node restfull/ todoService usa todos os métodos declarados no todoService/ cria uma rota
}