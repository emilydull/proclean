import { Router } from 'express';
import { sendEmail } from '../services/email.svc';

const router = Router();

router.post('/', (req, res) => {
	sendEmail('justin.foster.contact@gmail.com', req.body.from, 'New Message from a client!', req.body.message)
	.then((response) => {
		res.sendStatus(201);
	}).catch((e) => {
		console.log(e);
		res.sendStatus(500);
	}) 
});

export default router;