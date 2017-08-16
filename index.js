var express = require('express')

var bodyParser = require('body-parser')
var dbConnect = require('./config/db/mlab-config')
var port = 3000
var server = express()
server.listen(port,()=>{
  console.log('Listening on port: ', port)
})
//require your dependencies


//tell your server what it needs to use

server.use(express.static(__dirname + '/public' ))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true})) 


//register your todos routes as api/routes

var toDosRouter = require('./routes/todos')
server.use('/api/todos', toDosRouter)


//start your server listening....



