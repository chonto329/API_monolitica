const { Schema, model} = require('mongoose')

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        default: "UNAL",
        required: [true, 'Nombre Requerido']
    },
    direccion: {
        type: String,
        default: "car 43 # 42-52",
        required: [true, 'Dirección Requerido']
    },
    telefono: {
        type: String,
        default: "3123013412",
        required: [true, 'Teléfono Requerido'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Universidad', UniversidadSchema)
