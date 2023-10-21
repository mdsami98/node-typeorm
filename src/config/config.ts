const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envValidation = Joi.object()
    .keys({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'stage')
            .required(),
        PORT: Joi.number().default(3000)
    })
    .unknown();

const { value: envVar, error } = envValidation
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    NODE_ENV: envVar.NODE_ENV,
    PORT: envVar.PORT
};
export default config;
