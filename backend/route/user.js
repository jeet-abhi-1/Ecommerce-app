const express = require("express");
const auth = require("../config/auth")
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);


module.exports = router;