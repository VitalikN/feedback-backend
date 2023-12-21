const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/feedback');
const { authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrl.getAll);

module.exports = router;
