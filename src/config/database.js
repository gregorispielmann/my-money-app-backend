const mongoose = require('mongoose')

// avoid warnings
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'
module.exports = mongoose.connect(url, { useNewUrlParser: true })

// traduzir mensagem de erro
mongoose.Error.messages.general.required = 'Atributo {PATH} é obrigatório!'
mongoose.Error.messages.Number.min = 'O valor {VALUE} é menor que o limite mínimo {MIN}'
mongoose.Error.messages.Number.max = 'O valor {VALUE} é maior que o limite máximo {MAX}'
mongoose.Error.messages.String.enum = '{VALUE} não é válido'


