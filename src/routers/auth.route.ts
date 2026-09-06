import express from "express";
import { BusinessSignUp } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";
import { createBusinessAcctValidate } from "../middleware/auth.middleware.js";
import { createBusinessUser } from "../validators/validators.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  createBusinessAcctValidate(createBusinessUser),
  BusinessSignUp,
);

// authRouter.get(
//   "/google",
//   passport.authenticate("google", { scope: ["email", "profile"] }),
// );

// authRouter.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false,
//   }),
//   (req, res) => {
//     console.log(req.user);

//     const token = jwt.sign(
//       { user: req.user },
//       process.env.JWT_SECRET as string,
//       {
//         expiresIn: "1h",
//       },
//     );

//     console.log(token);

//     res.redirect("/");
//   },
// );

export default authRouter;
