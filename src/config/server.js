const port = 3001

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const cors = require('./cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors)

app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`)
})

module.exports = app