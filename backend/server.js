const express = require("express");
const twilio = require("./Twilio");
const http = require("http");
const socketIo = require("socket.io");

const PORT = 8000;
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("Socket Disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Slavo3 Call Center");
});

// receive phone number
app.post("/login", async (req, res) => {
  const { to, userName, channel } = req.body;
  const data = await twilio.sendVerifyAsync(to, channel);
  res.send(data);
});

// verify phone number
app.post("/verify", async (req, res) => {
  const { to, code } = req.body;
  const data = await twilio.verifyCodeAsync(to, code);
  console.log("DATA: ", data);
  res.send(data);
});

app.listen(PORT, () => {
  console.log("Server is Running on ", PORT);
});
