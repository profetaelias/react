const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//new é para que o mongo retorne o objeto atualizado após o update
//runValidators é para levar em consideração o validador definido no todo.js
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo