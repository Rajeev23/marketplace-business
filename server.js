global.window = undefined; // throw something at anyone who says ...
// window.requestAnimationFrame(currTime + timeToCall);

const expressJS = require('express');
const next = require('next');
const api = require('./api');
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const db = require('./database/db');
// const initAuth0 = require("./lib/auth0");

const handle = app.getRequestHandler();

app.prepare().then(() => {
	const express = expressJS();
	express.use(expressJS.json());
	express.use(expressJS.urlencoded({ extended: true }));
	db.connect();
	// initAuth0.configure(express);


	express.use('/api', api);

	express.get('/', async (req, res) => {
		return app.render(req, res, '/index');
	})

	express.get('/contactus', async (req, res) => {
		return app.render(req, res, '/contactus');
	})
	express.get('/faq', async (req, res) => {
		return app.render(req, res, '/faq');
	})
	express.get('/jobs', async (req, res) => {
		return app.render(req, res, '/jobs');
	})
	express.get('/aboutus', async (req, res) => {
		return app.render(req, res, '/aboutus');
	})
	express.get('/missions', async (req, res) => {
		return app.render(req, res, '/missions');
	})
	



	express.all("*", (req, res) => {
		const nextRequestHandler = app.getRequestHandler();
		return nextRequestHandler(req, res);
	});

	express.listen(port, (err) => {
		if(err) throw err;
		console.log(`🤘 on http://localhost:${port}`);
	});
});

