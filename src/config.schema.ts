import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  MONGO_URI: Joi.string().required(),
  // AWS_REGION: Joi.string().required(),
  // AWS_ACCESS_KEY_ID: Joi.string().required(),
  // AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  // AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
});
