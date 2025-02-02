import { NextFunction, Request, Response } from 'express';

export const forwardRequest = (handler: (req: Request, res: Response) => Promise<any>) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await handler(req, res);
  } catch (e) {
    next(e);
  }
};
