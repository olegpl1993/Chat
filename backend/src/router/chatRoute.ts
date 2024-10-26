import express from "express";

const chatRoute = express.Router();

chatRoute.get("/", (_, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <script src="/socket.io/socket.io.js"></script>
      <div style="text-align: center;">
        <input type="text" id="nameInput" placeholder="Введите ваше имя" style="margin-bottom: 10px"><br>
        <input type="text" id="chatInput" placeholder="Введите сообщение"><br>
        <div id="messages"></div>
      </div>

      <script>
        const socket = io();
        socket.emit("ping", () => console.log("ping"));
        socket.on("pong", () => console.log("pong"));

        const nameInput = document.getElementById("nameInput");
        const chatInput = document.getElementById("chatInput");

        chatInput.onkeypress = (event) => {
          if (event.key === 'Enter') {
            const name = nameInput.value || "Anonymous";
            const messageText = chatInput.value;

            socket.emit("chat message", { name, message: messageText }, () => {
              const message = document.createElement("p");
              message.innerHTML = \`\${name}: \${messageText}\`;
              message.style.color = "blue";
              document.getElementById("messages").appendChild(message);
              chatInput.value = '';
            });
          }
        };

        socket.on("chat message", (messageObject) => {
          const message = document.createElement("p");
          message.innerHTML = \`\${messageObject.name}: \${messageObject.message}\`;
          document.getElementById("messages").appendChild(message);
        });
      </script>
    `);
  } catch (error) {
    res.status(500).end(`Error: ${error}`);
  }
});

export default chatRoute;
