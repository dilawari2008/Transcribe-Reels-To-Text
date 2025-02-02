import { Router } from 'express';
import { forwardRequest } from '../common';
import TextSpeechController from '../modules/text-speech/text-speech.controller';

const TextSpeechRouter = Router({ mergeParams: true });

TextSpeechRouter.post('/mp4-to-mp3/:handle', forwardRequest(TextSpeechController.mp4ToMp3));

export default TextSpeechRouter;
