const express = require("express");
const twilo = require("./Twilio");
const app = express();
const PORT = 8000;

const client = twilo.client;
app.get("/", (req, res) => {
  res.send("Slavo3 Call Center");
});

// receive phone number
app.get("/login", (req, res) => {
  console.log("Login Page");
  const data = await client.sendVerifyAsync(process.env.MOBILE, "SMS")
  res.send(data)
});

// verify phone number
app.get("/verify", (res, req) => {});
app.listen(PORT, () => {
  console.log("Server is Running on ", PORT);
});
