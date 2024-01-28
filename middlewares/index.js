const validateBody = require('./validateBody');

const authenticate = require('./authenticate');
const getAuthorizationUrl = require('./getAuthorizationUrl');

const handleRedirect = require('./handleRedirect');
module.exports = {
  validateBody,
  authenticate,
  getAuthorizationUrl,
  handleRedirect,
};
