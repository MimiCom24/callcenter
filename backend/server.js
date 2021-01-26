const express = require("express");
const twilio = require("./Twilio");
const cors = require("cors");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Slavo3 Call Center");
});

// receive phone number
app.post("/login", async (req, res) => {
  console.log("BODY: ", req.body.to);
  const { to, userName, channel } = req.body;
  const data = await twilio.sendVerifyAsync(to, channel);
  res.send(data);
});

// verify phone number
app.post("/verify", async (req, res) => {
  const { to, code } = req.body;
  const data = await twilio.verifyCodeAsync(to, code);
  return data;
});
app.listen(PORT, () => {
  console.log("Server is Running on ", PORT);
});
