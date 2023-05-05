const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		analog: { type: Number, required: true },
		digital0: { type: String, required: true },
		digital1: { type: String, required: true },
		digital2: { type: String, required: true },
		digital3: { type: String, required: true },
		digital4: { type: String, required: true },
		digital5: { type: String, required: true },
		digital6: { type: String, required: true },
		digital7: { type: String, required: true },
		digital8: { type: String, required: true },
		led: { type: String, required: true },
	},
	{ timestamps: true }
);

const Estado = mongoose.model('Estado', schema);
module.exports = Estado;

