const express = require("express");
const {
  findAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/booksController");
const router = express.Router();

router.get("/books", findAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createNewBook);
router.patch("/books/:id", updateBookById);
router.delete("/books/:id", deleteBookById);

module.exports = router;
