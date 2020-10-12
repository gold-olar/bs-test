process.env.NODE_ENV = "test";

const server = require("../app");
const chai = require("chai");
const chai_http = require("chai-http");
const mongoose = require("mongoose");

chai.should();
chai.use(chai_http);

describe("Tasks Service Tests", function () {
  this.timeout(0);
  describe("Create Task", async function () {
    await mongoose.connection.collections["tasks"].drop(function (err) {
      console.log("Tasks collection cleared for test");
    });

    it("Should return an error if description is missing in request body", (done) => {
      chai
        .request(server)
        .post("/api/tasks/create")
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it("Should create a new task and return a 201", (done) => {
      chai
        .request(server)
        .post("/api/tasks/create")
        .send({
          description: "Test Task",
          userId: "5f847f2196a8190024697629",
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe("Fetch Tasks", async function () {
    it("Should fetch all tasks", (done) => {
      chai
        .request(server)
        .get("/api/tasks/all")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Edit Tasks", async function () {
    let testData;
    before(() => {
      chai
        .request(server)
        .post("/api/tasks/create")
        .send({
          description: "Test if endpoint could edit",
          userId: "5f847f2196a8190024697629",
        })
        .end((err, res) => {
          testData = res.body.data.task;
        });
    });

    it("Should return an error if task does not exist", (done) => {
      chai
        .request(server)
        .patch("/api/tasks/5f847f2196a8190024697629")
        .send({
          description: "Anything",
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("Should edit a tasks data and return a 200", (done) => {
      chai
        .request(server)
        .patch(`/api/tasks/${testData?._id}`)
        .send({
          description: "Yes it does",
          state: "done",
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Delete Task", async function () {
    let testData;
    before(() => {
      chai
        .request(server)
        .post("/api/tasks/create")
        .send({
          description: "Test Taskkk",
          userId: "5f847f2196a8190024697629",
        })
        .end((err, res) => {
          testData = res.body.data.task;
        });
    });
    it("Should delete a task and return a 200", (done) => {
      chai
        .request(server)
        .delete(`/api/tasks/5f847f2196a8190024697629`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Fetch Task", async function () {
    let testData;
    before(() => {
      chai
        .request(server)
        .post("/api/tasks/create")
        .send({
          description: "Fetch This task",
          userId: "5f847f2196a8190024697629",
        })
        .end((err, res) => {
          testData = res.body.data.task;
        });
    });
    it("Should return an error if task does not exist", (done) => {
      chai
        .request(server)
        .get("/api/tasks/5f847f2196a8190024697629")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("Should fetch a task and return a 200", (done) => {
      chai
        .request(server)
        .get(`/api/tasks/${testData?._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
