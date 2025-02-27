const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");
const userRouter = require("./routes/userRoutes");
const socketIo = require("./socket");
const groupRouter = require("./routes/groupRoutes");
const messageRouter = require("./routes/messageRoutes");
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: ["http://localhost:5173","https://riftchat.netlify.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});
//middlewares
app.use(cors());
app.use(express.json());
//connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Mongodb connected failed", err));

//Initialize
socketIo(io);
//our routes
app.use("/api/users", userRouter);
app.use("/api/groups", groupRouter);
app.use("/api/messages", messageRouter);

//start the server
const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(`The server is running on http://localhost:${PORT}`)
);
