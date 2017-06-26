const mongoose = require('mongoose')  // instância o mongoose mongodb, faz o mapeamento dos objetos js, e abri conexão com o mongo

mongoose.Promise = global.Promise // usa a api de promisses do node/ tira a advertência / não é importante nesse projeto

module.exports = mongoose.connect('mongodb://localhost/todo') //o bando é todo

