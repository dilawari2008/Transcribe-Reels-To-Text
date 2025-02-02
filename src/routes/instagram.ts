import { Router } from 'express';
import { forwardRequest } from '../common';
import InstagramController from '../modules/instagram/controller';

const InstagramRouter = Router({ mergeParams: true });

InstagramRouter.post('/media/:handle', forwardRequest(InstagramController.fetchMedia));

export default InstagramRouter;
