const routes = require('express').Router();
const queryExecuter = require('../database/db');
const { apiHelperFunction } = require('../database/apiHelper');
const axios = require('axios');
var nodemailer = require('nodemailer');

routes.post('/create', async (req, res) => {
	const { name, email, phone, message} = req.body;
	const query = `INSERT INTO public.contactus(
		 name, email, phone, message, created_at, updated_at)
VALUES ( '${name}', '${email}', '${phone}', '${message}', now(), now())`;
	try {
		const result = await queryExecuter.executeQuery(query);
		if (result) {
			 res.status(200).send(result);
			sendContactUsEmail(email,message,phone,name);
				return result;
		}
	} catch(err) {
		console.log('error', err);
		return res.status(500).send('something went wrong');
	}
	console.log('query>>>', query);
	
})
function sendContactUsEmail(email, message, phone, name) {
	
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		   user: 'rajeev23cusat@gmail.com',
		   pass: ''
		}
	});
	const mailOptions = {
		from: '"Rajeev Nayan" <rajeev23cusat@gmail.com>',
		to: `${email}`,
		subject: 'Thanks you choosing us',
		text: `Hi ${name},Our team will connect you as soon as possible, Thanks, Team`,
	  };
	  
	  transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  });

}





routes.get('/verify', async (req, res) => {
	// const { name } = req.body;
    const query = `select "name", "phone", "message" from public.contactus`;
    // console.log('query >>> ', query);
	try {
        const result = await queryExecuter.executeQuery(query);
        console.log('result >>>> '. result);
		if (result) {
           
                res.status(200).send(result);
            
		}
	} catch(err) {
		console.log('error', err);
		return res.status(500).send('something went wrong', err);
	}
})

// routes.get('/verify', async (req, res) => {
// 	// const { date } = req.body;
// 	const query = `select "name", "phone" from contactus;`;
// 	try {
// 		const result =   await queryExecuter.executeQuery(query);
// 		if (result) {
// 			 res.status(200).send(result);
// 		}
// 	} catch(err) {
// 		console.log('error', err);
// 		return res.status(500).send('something went wrong');
// 	}
// 	console.log('query>>>', query);
	
// })






module.exports = routes;



