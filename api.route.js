const express = require("express");
const userRoutes = require("./server/user/user.route");
const authRoutes = require("./server/auth/auth.route");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
