const mongoose = require('mongoose');

let connection = async () => {
	try {
		mongoose.connect(process.env.LINK_DB, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`Conectado a MongoDB en Puerto: ${process.env.PORT} `);
	} catch (error) {
		console.log(error.message);
	}
};

connection();
