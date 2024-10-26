import express from "express";

const chatRoute = express.Router();

chatRoute.get("/", (_, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.send(`<script src="/socket.io/socket.io.js"></script>
      <input type="text" id="chatInput">
      <script>
        const socket = io(); // put URL as a parameter
        socket.emit("ping", ()=>{console.log("pong delivered to server")});
        socket.on("pong", ()=>{console.log("pong")});
      
        const input = document.getElementById("chatInput");
        input.onchange = () => {
          console.log(input.value);
          const message = document.createElement("p");
          message.innerHTML = input.value;
          document.body.insertBefore(message, document.body.lastElement);
          socket.emit("chat message", input.value, ()=>{
            console.log("chat message delivered")
          });
        }
      
        socket.on("chat message", (messageObject) => {
          const message = document.createElement("p");
          message.innerHTML = messageObject.name + ": " + messageObject.message;
          message.style.color = "blue";
          document.body.insertBefore(message, document.body.lastElement);
        })
      </script>`);
  } catch (error) {
    res.status(500);
    res.end(`Error: ${error}`);
  }
});

export default chatRoute;
