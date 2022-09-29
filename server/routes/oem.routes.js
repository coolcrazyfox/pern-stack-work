const Router =require('express')
const router =new Router
const oemController = require('../controller/oem.controller')

router.post('/oem', oemController.createOem)
router.get('/oem', oemController.getOemByManual)




module.exports =router
