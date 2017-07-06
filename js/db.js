var mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/test'

mongoose.connect(url)

mongoose.connection.on('connected',function(){
  console.log('DB connected on '+url)
})

mongoose.connection.on('error',function(err){
  console.log('DB error::: '+err)
})

mongoose.connection.on('disconnected',function(){
  console.log('DB disconnected.!.')
})

module.exports = mongoose