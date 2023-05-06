const Estado = require('../models/Estado');

// router.post('/', (req, res) => {
// 	const analog = req.body.analogValue;
//   const led = req.body.ledState;
// 	console.log(`valor analogico: ${analog}, estado del led: ${led}`);
// 	res.status(200).json({ message: 'Estado recibido correctamente.' });
// });

// const controller = {
// 	save: async (req, res) => {
// 		try {
// 			let estado = await Estado.create(req.body);
// 			console.log(req.body);
// 			res.status(200).json({
// 				id: estado._id,
// 				success: true,
// 				message: 'estado guardado exitosamente',
// 			});
// 		} catch (error) {
//       console.log(req.body)
// 			res.status(400).json({
// 				success: false,
// 				message: error.message,
// 			});
// 		}
// 	},
//   read: async(req,res)=>{
//     let {query}= req;
//     let newQuery = {};
//     console.log(query);
//     try {
//       let allEstado = await Estado.find(query,'-_id')
//       if(allEstado.length){
       
//         res.status(200).json({
//           response:allEstado,
//           success:true,
//           message:"La peticion de los estados fue exitosa"
//         })
//       }

//     } catch (error) {
//       res.status(400).json({
//         success:false,
//         message: error.message,
//       })
//     }
//   }
// };

// module.exports = controller;
const controller = {
	save: async (req, res) => {
		try {
			let estado = await Estado.create(req.body);
			console.log(req.body); // Agrega esta línea para imprimir los datos recibidos en la consola
			res.status(200).json({
				id: estado._id,
				success: true,
				message: 'estado guardado exitosamente',
			});
		} catch (error) {
			console.log(req.body); // Agrega esta línea para imprimir los datos recibidos en la consola
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},
	read: async (req, res) => {
		let { query } = req;
		let newQuery = {};
		console.log(query); // Agrega esta línea para imprimir los datos de consulta en la consola
		try {
			let allEstado = await Estado.find(query, '-_id');
			if (allEstado.length) {
				res.status(200).json({
					response: allEstado,
					success: true,
					message: 'La peticion de los estados fue exitosa',
				});
			}
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},
};

module.exports = controller;
