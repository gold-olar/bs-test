const BaseController = require("./base.ctrl");
const User = require("../models/User");

class UserController extends BaseController {
  constructor() {
    super();
  }

  async createUser(req, res) {
    const {
      body: { name },
    } = req;
    try {
      const existingUser = User.find({ name });
      if (existingUser) {
        return super.sendError(res, null, "User already exists !", 400);
      }

      const newUser = new User({ name });
      const savedUser = await newUser.save();

      super.sendSuccess(res, { user: savedUser }, "User Created !", 201);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async editUserData(req, res) {
    try {
      const {
        params: { userId },
      } = req;

      const user = await User.findOneAndUpdate({ _id: userId }, body, {
        new: true,
      });

      if (!user) {
        return super.sendError(res, null, "User must have been deleted !", 404);
      }

      return super.sendSuccess(res, { user }, "User Updated !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async getSingleUser(req, res) {
    const {
      params: { userId },
    } = req;

    try {
      const existingUser = await User.findOne({ _id: userId });

      if (!existingUser) {
        return super.sendError(res, null, "User not found.", 404);
      }

      return super.sendSuccess(
        res,
        { user: existingUser },
        "Fetched User !",
        200
      );
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async deleteUser(req, res) {
    const {
      params: { userId },
    } = req;

    try {
      const deletedUser = await User.findOneAndDelete({ _id: userId });

      if (!deletedUser) {
        return super.sendError(res, null, "User does not exist.", 404);
      }

      return super.sendSuccess(res, null, "User Deleted !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      if (!users) {
        return super.sendError(res, null, "There are no users yet !", 404);
      }
      return super.sendSuccess(res, { users }, "Fetched all users", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }
}

module.exports = new UserController();
