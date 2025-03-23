const express = require("express");
const {
  handleUserRegister,
  handleUserLogin,
  handleGetAllUsers,
  handleUpdateUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, handleGetAllUsers);
router.put("/:id", protect, handleUpdateUser);
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
module.exports = router;
