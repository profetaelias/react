const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    // CORS preflight request
    // Antes das requisições propriamente ditas ocorrerem de fato, 
    // é realizada uma requisição do tipo OPTIONS para verificar se o CORS está ou não ativado. 
    // Dentro do auth.js não queremos bloquear requisições deste tipo, portanto passando direto para o próximo filtro. 
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        
        if (!token) {
            return res.status(403).send({ errors: ['No token provided'] })
        } 

        jwt.verify(token, env.authSecret, function(err, decoded) {
            if(err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}