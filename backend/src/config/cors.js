//serve para poder rodar o backend e o front end  em portas diferentes

//vamos criar um middleware

module.exports = function(req, res, next){ // requisição, resposta e o next, seerve para dizer se ele vai para o próximo middleware ou aborta
    res.header('Access-Control-Allow-Origin', '*')//permite qualquer origem
    res.header('Access-Control-Allow-Methods','GET ,POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next() //precisa do next para ir ao próximo middleware
}