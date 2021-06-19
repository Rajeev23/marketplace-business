
const routes = require('express').Router();
const queryExecuter = require('../database/db');


routes.post('/createjobs', async (req, res) => {
	const { firstName, lastName, email, whyMessage} = req.body;
	const query = `INSERT INTO public.appliedjobs(
		firstName, lastName, email, whyMessage, created_at, updated_at)
VALUES ( '${firstName}', '${lastName}', '${email}', '${whyMessage}', now(), now())`;
	try {
		const result = await queryExecuter.executeQuery(query);
		if (result) {
			 res.status(200).send(result);
			// sendContactUsEmail(email,message,phone,name);
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
		   pass: 'Rajeev#23@cusat26'
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



routes.get('/jobs', async (req, res) => {
	// const { name } = req.body;
    const query = `select "id","postion", "jobtype", "location", "desceription" from public.jobs`;
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

module.exports = routes;
