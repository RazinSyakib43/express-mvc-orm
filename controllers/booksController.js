const { Book } = require("../models");

// get all books
const findAllBooks = async (req, res) => {
  try {
    const data = await Book.findAll();

    res.status(200).json({
      code: 200,
      status: "success",
      error: false,
      message: "Books retrieved successfully",
      data: data,
    });
  } catch (error) {
    console.log(error, "<- error findAllBooks");
  }
};

// get book by id
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);

        if (!book) {
          res.status(404).json({
            code: 404,
            status: "error",
            error: true,
            message: `Book with id ${id} not found`,
          });
        } else {
          res.status(200).json({
            code: 200,
            status: "success",
            error: false,
            message: "Book retrieved successfully",
            data: book,
          });
        }
    } catch (error) {
        console.log(error, "<- error getBookById");
    }
};

// post new book
const createNewBook = (req, res) => {
  const { title, description } = req.body;

  // get new id for new book
  const lastItemBookId = books[books.length - 1].id;
  const newIdBook = lastItemBookId + 1;

  const newBookData = {
    id: newIdBook,
    title: title,
    description: description,
  };
  books.push(newBookData);

  res.status(201).json({
    code: 201,
    status: "success",
    error: false,
    message: "Book created successfully",
    data: newBookData,
  });
};

module.exports = {
  findAllBooks,
  getBookById,
  createNewBook,
};
