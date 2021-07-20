const express = require("express");
const { PrismaClient } = require("@prisma/client");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const webSockets = require("./services/webSockets");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const userController = require("./controllers/user");
const authController = require("./controllers/auth");
const messageController = require("./controllers/messages");

const prisma = new PrismaClient();
const port = 8000;

app.use(passport.initialize());
app.use("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", authController.login);

app.get("/user", userController.getAll);
app.get("/user/:id", userController.get);
app.post("/user", userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.remove);
app.get("/message", messageController.getAll);

io.on("connection", (socket) => webSockets(socket, io));

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
