const TipoEtapas = require('../models/tipoEtapas')
const { request, response} = require('express')

// crear
const createTipoEtapas = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoEtapasDB = await TipoEtapas.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(tipoEtapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoEtapa= new TipoEtapas(data)
        console.log(tipoEtapa)
        await tipoEtapa.save()
        return res.status(201).json(tipoEtapa)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getTipoEtapas = async (req = request, 
    res = response) => {
        try{
            const tipoEtapasBD = await TipoEtapas.find()
            return res.json(tipoEtapasBD)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateTipoEtapasById = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const tipoEtapasBD = await TipoEtapas.findById(id)
        if(!tipoEtapasBD){
            return res.json({msg: 'No existe el tipo de etapa'})
        }
        data.fechaCreacion = new Date()
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEtapas = await TipoEtapas.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEtapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}


module.exports = { createTipoEtapas, getTipoEtapas, updateTipoEtapasById}