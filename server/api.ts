import * as express from 'express';
import contactFormController from './controllers/contactform.ctrl';

let router = express.Router();

router 
	.use('/contactforms', contactFormController)


export default router;