const Todo = require('./todo')

//metodos
// ISSO É UMA API RESTFULL
Todo.methods(['get','post','put','delete'])
Todo.updateOptions({new: true, runValidators: true}) // por padrão o update não valida algumas coisas, então usamos isso, quando atualizarmos alguma mudança no mongo ele retorna o registro atualizado, e o outro o node restful não valida as atualizações, então usamos issos para validarmos novamnete( ver o Schema no todo.js)

module.exports = Todo