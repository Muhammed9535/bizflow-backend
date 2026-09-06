import "dotenv/config";
import express from "express";
import authRouter from "./routers/auth.route.js";
import passport from "./config/passport.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("come here fbdjk");
});

app.use("/api/auth/v1", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
