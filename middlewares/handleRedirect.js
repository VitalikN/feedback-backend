const ctrl = require('../controllers/auth');

const handleRedirect = async (req, res, next) => {
  try {
    const code = req.require.code;
    req.result = await ctrl.Redirect(code);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = handleRedirect;
