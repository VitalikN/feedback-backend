const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/feedback');
const { authenticate } = require('../../middlewares');

router.get('/', ctrl.getAll);

module.exports = router;
