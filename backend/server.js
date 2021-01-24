const express = require("express");
const twilio = require("./Twilio");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Slavo3 Call Center");
});

// receive phone number
app.get("/login", async (req, res) => {
  const data = await twilio.sendVerifyAsync(process.env.MOBILE, "sms");
  res.send(data);
  console.log("Login Page");
});

// verify phone number
app.get("/verify", async (req, res) => {
  console.log("Verify");
  const data = await twilio.verifyCodeAsync(process.env.MOBILE, req.query.code);
  return data;
});
app.listen(PORT, () => {
  console.log("Server is Running on ", PORT);
});
