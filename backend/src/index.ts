import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import chatRoute from "./router/chatRoute";
import mainRoute from "./router/mainRoute";
import testRoute from "./router/testRoute";

const PORT = 4000;
const app = express();
app.use(cors());

// Routes
app.use("/", mainRoute);
app.use("/test", testRoute);
app.use("/chat", chatRoute);
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

// HTTP Server
const server = createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: ["https://chat.marker.cx.ua", "http://localhost:5173"],
  },
});

// WebSocket Events
io.on("connection", (socket) => {
  console.log(`User connected with id: ${socket.id}`);

  socket.on("ping", () => {
    console.log("Ping received from client");
    socket.emit("pong");
  });

  socket.on("chat message", (msg, callback) => {
    console.log("Message received:", msg);
    io.emit("chat message", { name: "User", message: msg });
    callback();
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});
