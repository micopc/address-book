const { Router } = require('express');
const controller = require('./contact.controller');

const router = new Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;