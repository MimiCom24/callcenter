const express = require("express");
const app = express();

app.get("test", (req, res) => {
  res.send("Slavo3 Call Center");
});

app.listen(8000, () => {
  console.log("Server is Running on 8000");
});
