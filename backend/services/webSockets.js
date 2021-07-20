const messageService = require("./message");

const WebSockets = (socket, io) => {
  console.log("A user connected");

  socket.on("user-message", async (message) => {
    console.log("User message", message);
    const createdMessage = await messageService.create(message);
    io.emit("new-message", createdMessage);
  });
};

module.exports = WebSockets;
