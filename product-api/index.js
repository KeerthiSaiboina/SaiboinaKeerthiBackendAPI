const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/products/total-value", (req, res) => {
  const products = req.body;

  if (!Array.isArray(products) || products.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide an array of products." });
  }

  let totalValue = 0;

  products.forEach((product) => {
    const { price } = product;

    if (typeof price !== "number" || price < 0) {
      return res.status(400).json({
        error: `Invalid price for product: ${JSON.stringify(product)}`,
      });
    }

    totalValue += price;
  });

  res.json({ totalValue });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
