import type { Request, Response } from "express";

export const Login = (req: Request, res: Response) => {
    res.send("Login endpoint")
}