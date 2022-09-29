const Router =require('express')
const router =new Router
const oemController = require('../controller/oem.controller')


router.post('/oem', oemController.createOem)
router.get('/oem', oemController.getAllOem)
router.get('/oem/:id', oemController.getOneOem)
router.put('/oem', oemController.updateOem)
router.delete('/oem/:id', oemController.deleteOem)




module.exports =router
