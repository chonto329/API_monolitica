const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
const universidad = require('./routes/universidad')
const tipoEtapas = require('./routes/tipoEtapas')

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/clientes', cliente)
app.use('/api/universidades', universidad)
app.use('/api/tipoetapas', tipoEtapas)

module.exports = app