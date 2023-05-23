const { Router } = require('express')
const { createUniversidad, getTUniversidad,updateUniversidadById} =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getTUniversidad)

// consultar todos
router.put('/:id', updateUniversidadById)


module.exports = router;