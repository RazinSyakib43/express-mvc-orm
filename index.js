const express = require("express");
const app = express();

const router = require("./routes/index");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// Just get welcome message
app.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    status: "success",
    error: false,
    message: "Welcome to our API",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
