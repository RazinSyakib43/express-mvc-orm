const express = require("express");
const {
  findAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
} = require("../controllers/booksController");
const router = express.Router();

router.get("/books", findAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createNewBook);
router.patch("/books/:id", updateBookById);

module.exports = router;
