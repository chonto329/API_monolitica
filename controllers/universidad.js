const Universidad = require('../models/univesidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const id = req.body.id 
        const univerdidadDB = await Universidad.findOne({id})
        
        if(univerdidadDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            //nombre : nombre,
            //direccion : direccion,
            //telefono : telefono
        }
        const universidad= new Universidad(data)
        console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getTUniversidad = async (req = request, 
    res = response) => {
        try{
            const universidadBD = await Universidad.find()
            return res.json(universidadBD)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateUniversidadById = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const universidadBD = await Universidad.findById(id)
        if(!universidadBD){
            return res.json({msg: 'No existe la universidad'})
        }
        data.fechaCreacion = new Date()
        data.fechaActualizacion = new Date()
        console.log(data)
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.json(universidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}


module.exports = { createUniversidad, getTUniversidad, updateUniversidadById}