const Router =require('express')
const router =new Router
const manualController = require('../controller/manual.controller')

router.post('/manual', manualController.createManual)
router.get('/manual', manualController.getManual)
router.get('/manual/:id', manualController.getOneManual)
router.put('/manual', manualController.updateManual)
router.delete('/manual/:id', manualController.deleteManual)



module.exports =router
