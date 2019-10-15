const express = require('express')

module.exports = function(app) {
    //definir URL base para todas as rotas
    const router = express.Router()
    app.use('/api', router)

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}