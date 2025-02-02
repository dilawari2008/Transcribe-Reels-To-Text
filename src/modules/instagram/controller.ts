import { Request, Response } from "express";
import InstagramService from "./service";

const fetchMedia = async (req: Request, res: Response) => {
  res.send(await InstagramService.fetchMedia(req.params.handle));
};

const InstagramController = {
  fetchMedia,
};

export default InstagramController;