let router = require('express').Router();
let datosRoute = require('./datosRoute')

router.use('/api/datos',datosRoute)


module.exports = router;
