const express = require("express");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {

  res.json([
    {
      id: 1,
      name: "Cow Milk",
      price: 65
    },
    {
      id: 2,
      name: "Buffalo Milk",
      price: 70
    }
  ]);

});

app.listen(3002, "0.0.0.0", () => {
  console.log("Product Service Running On Port 3002");
});