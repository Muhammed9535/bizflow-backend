import { ZodError, ZodType } from "zod";
import type { NextFunction, Request, Response } from "express";

export const createBusinessAcctValidate = <T extends ZodType>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.message });
      } else {
        next(error);
      }
    }
  };
};
