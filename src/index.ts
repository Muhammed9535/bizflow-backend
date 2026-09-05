import "dotenv/config";
import express from "express";
import authRouter from "./routers/auth.route.js";
import passport from "./config/passport.js";

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(passport.initialize());
app.get("/", (req, res) => {
  res.send("hello world");
});


console.log("made some changes in the github trying to see how it works");

console.log("edited in github")

console.log("this is another one");




app.use("/api/auth/v1", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
