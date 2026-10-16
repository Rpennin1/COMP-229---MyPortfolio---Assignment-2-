//import express from "express";
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import assetRouter from "./server/assets-router.js";
import connectDB from "./server/db.js";
import { UnauthorizedError } from "express-jwt";

import contactRouter from "./server/routes/contact.routes.js";
import projectRouter from "./server/routes/project.routes.js";
import educationRouter from "./server/routes/education.routes.js";
import userRouter from "./server/routes/user.routes.js";
import authRouter from "./server/routes/auth.routes.js";
//const assetsRouter = require("./server/assets-router");
app.use("/src", assetRouter);

app.use("/api/contacts", contactRouter);
app.use("/api/projects", projectRouter);
app.use("/api/qualifications", educationRouter);
app.use("/api/users", userRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

connectDB();


app.use((err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({
      message: "Invalid or expired authentication token.",
    });
  }

  console.error(err);
  return res.status(err.status || 500).json({
    message: err.message || "Internal server error.",
  });
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

export default app;