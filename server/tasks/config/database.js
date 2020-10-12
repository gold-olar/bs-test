if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://bstest-admin:bstest-admin123@ds149489.mlab.com:49489/bstest",
  };
} else {
  module.exports = { mongoURI: "mongodb://db:27017/bunny" };
}
