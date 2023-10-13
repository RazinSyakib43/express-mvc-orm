const books = [
  {
    id: 1,
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship",
  },
  {
    id: 2,
    title: "Code Complete",
    description: "A Practical Handbook of Software Construction",
  },
  {
    id: 3,
    title: "Design Patterns",
    description: "Elements of Reusable Object-Oriented Software",
  },
];

// get all books
const findAllBooks = (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success",
    error: false,
    message: "Books retrieved successfully",
    data: books,
  });
};

// get book by id
const getBookById = (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    res.status(404).json({
      code: 404,
      status: "error",
      error: true,
      message: "Book not found",
    });
  }

  res.status(200).json({
    code: 200,
    status: "success",
    error: false,
    message: "Book retrieved successfully",
    data: book,
  });
};

module.exports = {
  findAllBooks,
  getBookById
};
