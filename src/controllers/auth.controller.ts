import type { Request, Response } from "express";
import type { CreateBusinessUserInput } from "../types/types.js";
import { log } from "node:console";

export const BusinessSignUp = (
  req: Request<{}, {}, CreateBusinessUserInput>,
  res: Response,
) => {
  const { businessName, description, password, email } = req.body;

  log({ businessName, description, password, email });

  res.status(200).json({message: "Login successful" });
};
