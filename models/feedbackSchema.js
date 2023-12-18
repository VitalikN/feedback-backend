const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { HandleMongooseError } = require('../helpers');

const feedbackSchema = new Schema(
  {
    feedback: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
const addSchemaFeedback = Joi.object({
  feedback: Joi.string().required(),
});
const updateSchemaFeedback = Joi.object({
  feedback: Joi.string(),
});
const schemas = {
  addSchemaFeedback,

  updateSchemaFeedback,
};

feedbackSchema.post('save', HandleMongooseError);

const Feedback = model('feedback', feedbackSchema);

module.exports = { Feedback, schemas };
