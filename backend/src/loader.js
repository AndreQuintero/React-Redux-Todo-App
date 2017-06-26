// arquivo que carrega as dependencias de banco e servidor
const server = require('./config/server')  
require('./config/database')
require('./config/routes')(server) // server do config/server é necessário pq em routes a gente passa um parametro server na função

