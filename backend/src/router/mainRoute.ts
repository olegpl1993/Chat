import express from "express";

const mainRoute = express.Router();

mainRoute.get("/", (_, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello from Backend</title>
        </head>
        <body>
          <h1 style="text-align: center;">Hello from Backend</h1>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500);
    res.end(`Error: ${error}`);
  }
});

export default mainRoute;
