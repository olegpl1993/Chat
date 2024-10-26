import express from "express";

const mainRoute = express.Router();

mainRoute.get("/", (_, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Open Chat</title>
        </head>
        <body>
        <div style="text-align: center;">
          <h1>Open Chat</h1>
          <button onclick="window.location.href='/chat'">Go to Chat</button>
        </div>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500);
    res.end(`Error: ${error}`);
  }
});

export default mainRoute;
