const routes = require('express').Router();
const queryExecuter = require('../database/db');
const { apiHelperFunction } = require('../database/apiHelper');

routes.post('/leadgen', async (req, res) => {
	const { email,source} = req.body;
	const query = `INSERT INTO public.newsletter(
		 email,source, created_at, updated_at)
VALUES (  '${email}','${source}', now(), now())`;
	try {
		const result = await queryExecuter.executeQuery(query);
		if (result) {
			 res.status(200).send(result);
		}
	} catch(err) {
		console.log('error', err);
		return res.status(500).send('something went wrong');
	}
	console.log('query>>>', query);
	
})


module.exports = routes;
