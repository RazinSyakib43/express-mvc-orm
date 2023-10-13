const express = require("express");
const { findAllBooks, getBookById } = require("../controllers/booksController");
const router = express.Router();

router.get("/books", findAllBooks);
router.get("/books/:id", getBookById);

module.exports = router;
