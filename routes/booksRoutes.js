const express = require("express");
const { findAllBooks } = require("../controllers/booksController");
const router = express.Router();

router.get("/books", findAllBooks);

module.exports = router;
