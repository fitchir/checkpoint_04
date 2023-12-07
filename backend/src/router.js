const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const auth = require("./middlewares/auth");

router.get("/user", auth.checkIfIsAllowed, userControllers.getAllusers);
router.post(
  "/user",
  auth.validateUser,
  auth.hashPassword,
  userControllers.postUser
);
router.put("/user/:id", auth.hashPassword, userControllers.updateUser);
router.post("/login", auth.checkEmailIfExist, userControllers.verifyPassword);
module.exports = router;
