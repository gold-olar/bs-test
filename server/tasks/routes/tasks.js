const { Router } = require("express");
const {
  createTask,
  fetchAllTasks,
  fetchTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.ctrl");
const { validateTaskCreation } = require("../middlewares/validator");

const router = Router();

router.get("/all", fetchAllTasks);

router.post("/create", validateTaskCreation, createTask);

router.get("/:taskId", fetchTask);

router.patch("/:taskId", updateTask);

router.delete("/:taskId", deleteTask);

module.exports = router;
