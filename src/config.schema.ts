import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  MONGO_URI: Joi.string().required(),
});

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
});
