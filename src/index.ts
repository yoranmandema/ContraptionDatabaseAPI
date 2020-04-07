import express from 'express';
import { rootHandler, helloHandler } from './handlers';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

console.log(process.env.PORT);
 
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});