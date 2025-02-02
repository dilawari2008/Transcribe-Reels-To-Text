import express, { Request, Response } from 'express';
import Config from './config';
import MongoDatabase from './db';
import InitRoutes from './routes';

const app = express();
const port = Config.service.port;

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

InitRoutes(app);


