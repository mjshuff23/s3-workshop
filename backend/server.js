import express from 'express';
import { generateUploadURL } from './s3.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static('frontend'));

app.get('/s3Url', async (req, res) => {
  console.log('TEST');
  const url = await generateUploadURL();
  res.send({ url });
});

app.listen(8080, () => console.log('Listening on port 8080'));
