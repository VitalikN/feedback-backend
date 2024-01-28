const express = require('express');

const ctrl = require('../../controllers/auth');
const {
  validateBody,
  authenticate,
  getAuthorizationUrl,
  handleRedirect,
} = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.get(
  '/linkedin/register',
  getAuthorizationUrl,

  (req, res) => {
    res.redirect(req.authorizationUrl);
  }
);

router.get('/linkedin/redirect', handleRedirect);

module.exports = router;
