const router = require('express').Router();
const schema = require('../schemas/dato');
const validator = require('../middleware/validator');

const {save,read} = require('../controllers/datosController');

router.post('/',validator(schema), save);
router.get('/',read)
module.exports = router;
