const express = require('express')
const auth = require('./auth')

module.exports = function(app) {
    // //definir URL base para todas as rotas
    // const router = express.Router()
    // app.use('/api', router)

    /*
    * ROTAS PROTEGIDAS POR TOKEN JWT  
    */
    const protectedApi = express.Router()
    app.use('/api', protectedApi)

    protectedApi.use(auth)

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')


    /*
    * ROTAS ABERTAS
    */
    const openApi = express.Router()
    app.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

}