import express from "express";
import { Login } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";

const authRouter = express.Router();

authRouter.route("/login").post(Login);

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);


authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    console.log(req.user);
    console.log(req);

    res.redirect("/");
    
  },
);

export default authRouter;
