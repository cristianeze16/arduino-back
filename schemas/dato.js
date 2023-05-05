const joi = require('joi');

const schema = joi.object({
	digital0: joi.number(),
	digital1: joi.number(),
	digital2: joi.number(),
	digital3: joi.number(),
	digital4: joi.number(),
	digital5: joi.number(),
	digital6: joi.number(),
	digital7: joi.number(),
	digital8: joi.number(),
	led: joi.number(),
  analog:joi.number(),
});

module.exports = schema;
