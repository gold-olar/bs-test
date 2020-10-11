const { Router } = require("express");
const {
  getAllUsers,
  deleteUser,
  createUser,
  getSingleUser,
  editUserData,
} = require("../controllers/user.ctrl");

const router = Router();

// Create, Fetch user, Update User, Delete User, Fetch Allusers

router.get("/all", getAllUsers);

router.post("/create", createUser);

router.get("/:userId", getSingleUser);

router.patch("/:userId", editUserData);

router.delete("/:userId", deleteUser);

module.exports = router;
