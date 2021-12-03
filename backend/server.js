import express from 'express';
import { generateUploadURL } from './s3.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('frontend'));

app.post('/s3Url', async (req, res) => {
  const { fileExtension } = req.body;
  const url = await generateUploadURL(fileExtension);
  res.send({ url });
});

app.listen(8080, () => console.log('Listening on port 8080'));
