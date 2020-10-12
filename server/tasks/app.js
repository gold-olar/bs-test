const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./config/database");

const tasksRouter = require("./routes/tasks");

const app = express();

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", tasksRouter);

app.use((_req, res) => {
  res.status(404).json({
    status: false,
    statusCode: 404,
    message: "api endpoint not found",
  });
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
