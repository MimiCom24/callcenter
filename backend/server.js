const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Slavo3 Call Center");
});

app.listen(PORT, () => {
  console.log("Server is Running on ", PORT);
});
