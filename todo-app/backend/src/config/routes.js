const express = require('express')

module.exports = function(server) {
    //API routes
    const routes = express.Router()
    server.use('/api', routes)

    //TODO routes
    const todoService = require('../api/todo/todoService')
    todoService.register(routes, '/todos')


}