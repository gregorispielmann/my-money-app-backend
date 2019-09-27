const rest = require('node-restful')
const mongoose = rest.mongoose

const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        min: 0,
        required: true
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['RECEBIDO', 'PENDENTE', 'AGENDADO']
    }
  })

const debitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Informe um nome'],
    },
    value: {
        type: Number,
        min: 0,
        required: [true, 'Informe um valor']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
  })

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Informe um nome'],
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: [true, 'Informe um mês'],
    },
    year: {
        type: Number,
        min: 1970,
        max: 2100,
        required: [true, 'Informe um ano'],
    },
    credits: [creditSchema],
    debits: [debitSchema]
})

module.exports = rest.model('BillingCycle', billingCycleSchema)