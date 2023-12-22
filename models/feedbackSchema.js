const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { HandleErrorMongoose } = require('../helpers');

const feedbackSchema = new Schema(
  {
    feedback: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      require: true,
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

feedbackSchema.post('save', HandleErrorMongoose);

const Feedback = model('feedback', feedbackSchema);

module.exports = { Feedback, schemas };
