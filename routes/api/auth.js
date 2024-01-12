const express = require('express');

const ctrl = require('../../controllers/auth');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.get('/linkedin/register', (req, res) => {
  return res.redirect(ctrl.Authorization());
});
router.get('/linkedin/redirect', async (req, res) => {
  return res.json(ctrl.Redirect(req.require.code));
});
module.exports = router;
