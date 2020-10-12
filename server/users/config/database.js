if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://bstest-admin:bstest-admin123@ds149489.mlab.com:49489/bstest",
  };
} else if (process.env.NODE_ENV === "test") {
  module.exports = { mongoURI: "mongodb://db:27017/bunny-test" };
} else {
  module.exports = { mongoURI: "mongodb://db:27017/bunny" };
}
