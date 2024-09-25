import Joi from 'joi';

export const taskValidationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(5).required(),
  completed: Joi.boolean(),
});
