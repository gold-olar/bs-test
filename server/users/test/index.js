process.env.NODE_ENV = "test";

const server = require("../app");
const chai = require("chai");
const chai_http = require("chai-http");
const mongoose = require("mongoose");

chai.should();
chai.use(chai_http);

describe("User", function () {
  this.timeout(0);
  describe("Create User", async function () {
    await mongoose.connection.collections["users"].drop(function (err) {
      console.log("Users collection cleared for test");
    });
    it("Should return an error if name is missing in request body", (done) => {
      chai
        .request(server)
        .post("/api/users/create")
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it("Should create a new user and return a 201", (done) => {
      chai
        .request(server)
        .post("/api/users/create")
        .send({
          name: "Olamide Test",
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it("Should return an error if user aleady exists", (done) => {
      chai
        .request(server)
        .post("/api/users/create")
        .send({
          name: "Olamide Test",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe("Fetch Users", async function () {
    it("Should fetch all users", (done) => {
      chai
        .request(server)
        .get("/api/users/all")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Edit Users", async function () {
    it("Should return an error if user does not exist", (done) => {
      chai
        .request(server)
        .patch("/api/users/5f847f2196a8190024697629")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("Delete Users", async function () {
    it("Should return an error if user does not exist", (done) => {
      chai
        .request(server)
        .delete("/api/users/5f847f2196a8190024697629")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
