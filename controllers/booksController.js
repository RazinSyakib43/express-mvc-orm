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

const findAllBooks = (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success",
    error: false,
    message: "Books retrieved successfully",
    data: books,
  });
};


module.exports = {
    findAllBooks
}