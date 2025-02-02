import { Request, Response } from "express";
import TextToSpeechService from "./text-to-speech.service";

const mp4ToMp3 = async (req: Request, res: Response) => {
  res.send(await TextToSpeechService.mp4ToMp3(req.params.handle));
};

const TextSpeechController = {
  mp4ToMp3,
};

export default  TextSpeechController;