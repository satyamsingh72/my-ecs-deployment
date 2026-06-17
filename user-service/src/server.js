const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  res.json({
    token: "dummy-token",
    user: "Satyam"
  });
});

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Satyam"
    }
  ]);
});

app.listen(3001, "0.0.0.0", () => {
  console.log("User Service Running On Port 3001");
});