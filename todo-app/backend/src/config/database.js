const mongoose = require('mongoose')

//informando que o mongoose deve usar a api de promise do próprio node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')

