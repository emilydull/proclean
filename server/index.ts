import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import apiRouter from './api';
import stateRouting from './middleware/routing.mw';

let clientPath = path.join(__dirname, '../client');

// Statically serve the client folder (middleware)
let app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser()); // lets server read the cookie
app.use('/api', apiRouter);
// Parse any incoming json data


app.use((req, res, next) => {
    next();
})

app.get('*', stateRouting);

app.listen(process.env.PORT || 3000, () => {
    console.log("I'm listening"!);
});
