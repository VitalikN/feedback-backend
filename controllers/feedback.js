const { ctrlWrapper } = require('../helpers');
const { Feedback } = require('../models/feedbackSchema');

const getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const total = await Feedback.countDocuments();
  const result = await Feedback.find({}, '-createdAt -updatedAt', {
    skip,
    limit,
  });

  res.json({ total, data: result });
};
module.exports = {
  getAll: ctrlWrapper(getAll),
};
