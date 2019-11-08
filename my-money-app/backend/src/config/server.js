const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.options('*',allowCors());
app.use(allowCors)

app.use(queryParser())

app.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = app