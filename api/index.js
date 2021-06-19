const routes = require('express').Router();
const contactus = require('./contactus');
const newsletter = require('./newsletter');
const jobs = require('./jobs');



routes.use('/contactus', contactus);
routes.use('/newsletter', newsletter);
routes.use('/jobs', jobs);



routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;