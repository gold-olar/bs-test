const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const { createProxyMiddleware } = require("http-proxy-middleware");
const db = require("./config/database");

require("dotenv").config();

const userRouter = require("./routes/user");

const app = express();

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(cors());

// Create Proxy and map requests to Tasks Servers
app.use(
  "/api/tasks",
  createProxyMiddleware({
    target: process.env.TASKS_BASEURL,
    changeOrigin: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((_req, res) => {
  res.status(404).json({
    status: false,
    statusCode: 404,
    message: "api endpoint not found",
  });
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
