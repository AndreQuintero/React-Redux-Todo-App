//mapea o objeto para o documento do mongo
//criação do banco

const restful = require('node-restful') // chama a api restful do node
const mongoose = restful.mongoose  // usa o node restful para o mongoose

const todoSchema = new mongoose.Schema({
    
    description: {type: String, required: true}, // dados do banco, no caso descrição-string
    done: {type: Boolean, required:true, default: false}, // se ele terminou ou não a tarefa
    createdAt: { type: Date, default: Date.now } // data da criação da tarefa, para dps fazer a consulta por data
})

module.exports = restful.model('Todo', todoSchema) // exporta/ nome do modelo, 