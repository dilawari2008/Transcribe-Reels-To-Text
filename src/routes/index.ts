import { Express, Router } from 'express';
import InstagramRouter from './instagram';
import TextSpeechRouter from './text-speech';

const WrapperRouter = Router({ mergeParams: true });

WrapperRouter.get('/ping', (req, res) => {
  res.send("pong");
});

WrapperRouter.use('/instagram', InstagramRouter);
WrapperRouter.use('/text-speech', TextSpeechRouter);

const InitRoutes = (app: Express) => {
  app.use('/app', WrapperRouter);
};

export default InitRoutes;
