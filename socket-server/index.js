const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", process.env.FRONTEND],
    methods: ["GET", "POST"],
  },
});

// Set up a connection event listener
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle messages from clients
  socket.on("message", ({ room, message, user }) => {
    console.log(`Received message: ${message} in room: ${room}`);
    console.log(user)

    // Broadcast the message to all connected clients
    io.to(room).emit("message", { message, user });
  });

  // Handle room joining
  socket.on("joinRoom", (roomName) => {
    socket.leaveAll();

    socket.join(roomName);
    console.log(`User joined room: ${roomName}`);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  // Handle the typing... function
  socket.on("activity", ({ room, name }) => {
    console.log(`room: ${room} name: ${name}`);

    // socket.broadcast.emit("activity", `user: ${name} is Typing...`);
    socket.to(room).emit("activity", name);
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
