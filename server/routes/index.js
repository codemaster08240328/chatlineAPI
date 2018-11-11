const callStartController = require('../controllers').callStart;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Chatline API!'
	}));

	app.post('/api/calling_start', callStartController.list);


	
}