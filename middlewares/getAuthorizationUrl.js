const ctrl = require('../controllers/auth');
const getAuthorizationUrl = async (req, res, next) => {
  try {
    req.authorizationUrl = await ctrl.Authorization();
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = getAuthorizationUrl;
