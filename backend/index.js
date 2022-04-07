const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const data = require("../backend/public/fruits.json");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("public"));

app.get("/fruits.json/:id", (req, res) => {
  const fruit = data.find((fruit) => fruit.id == parseInt(req.params.id));
  res.send(fruit);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
