const express = require('express')

module.exports = function(app){

    // BASE URL
    const router = express.Router()
    app.use('/api', router)


    //PAYMENT CYCLES ROUTES
    const BillingCycle = require('../api/billingCycles/billingCycleService')

    BillingCycle.register(router, '/billingCycles')


}