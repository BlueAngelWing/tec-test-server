// server/index.js

import express from 'express';
import cors from 'cors';
import routes from './app/routes/routes.js';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});