const express = require("express");
const router = express.Router();
const booksRoutes = require("./booksRoutes");

// books router endpoints
router.use("/api/v1", booksRoutes);

module.exports = router;
