const express = require("express");
const {
  findAllBooks,
  getBookById,
  createNewBook,
} = require("../controllers/booksController");
const router = express.Router();

router.get("/books", findAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createNewBook);

module.exports = router;
