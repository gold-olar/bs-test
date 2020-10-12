const { Router } = require("express");
const {
  createTask,
  fetchAllTasks,
  fetchTask,
  updateTask,
  deleteTask,
  deletUsersTasks,
} = require("../controllers/task.ctrl");
const { validateTaskCreation } = require("../middlewares/validator");

const router = Router();

router.get("/all", fetchAllTasks);

router.post("/create", validateTaskCreation, createTask);

router.get("/:taskId", fetchTask);

router.patch("/:taskId", updateTask);

router.delete("/:taskId", deleteTask);

router.delete("/delete-many", deletUsersTasks);

module.exports = router;
