const express = require("express");

const app = express();

app.use(express.json());

app.get("/orders", (req, res) => {

  res.json([
    {
      id: 1001,
      product: "Cow Milk",
      quantity: 4
    }
  ]);

});

app.post("/orders", (req, res) => {

  res.json({
    message: "Order Created Successfully"
  });

});

app.listen(3003, "0.0.0.0", () => {
  console.log("Order Service Running On Port 3003");
});