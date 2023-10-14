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
const createNewBook = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBook = await Book.create({
      title: title,
      description: description,
    });

    res.status(201).json({
      code: 201,
      status: "success",
      error: false,
      message: "Book created successfully",
      data: {
        id: newBook.id,
        title: newBook.title,
        description: newBook.description,
        createdAt: newBook.createdAt,
        updatedAt: newBook.updatedAt,
      },
    });
  } catch (error) {
    console.log(error, "<- error createNewBook");
  }
};

// update book by id
const updateBookById = async (req, res) => {
  try {
    // get book id from params
    const { id } = req.params;
    // get title and description from body
    const { title, description } = req.body;
    // find book by id from params
    const book = await Book.findByPk(id);

    // if book not found or found
    if (!book) {
      res.status(404).json({
        code: 404,
        status: "error",
        error: true,
        message: `Book with id ${id} not found`,
      });
    }

    // update book data from body 
    book.title = title;
    book.description = description;
    book.updatedAt = new Date();

    // save book data to database
    await book.save();

    // response updated book
    res.status(200).json({
      code: 200,
      status: "success",
      error: false,
      message: "Book updated successfully",
      data: {
        id: id,
        title: title,
        description: description,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
      },
    });
  } catch (error) {
    console.log(error, "<- error updateBookById");
  }
};

module.exports = {
  findAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
};
