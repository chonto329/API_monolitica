const { Router } = require('express')
const {createTipoEtapas, getTipoEtapas, updateTipoEtapasById} =
 require('../controllers/tipoEtapas')

const router = Router()

// crear
router.post('/', createTipoEtapas)

// consultar todos
router.get('/', getTipoEtapas)

// consultar todos
router.put('/:id', updateTipoEtapasById)



module.exports = router;