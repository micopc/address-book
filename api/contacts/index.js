const { Router } = require('express');
const controller = require('./contact.controller');

const router = new Router();

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;