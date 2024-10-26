import cors from "cors";
import express from "express";
import { Console } from "./modules/console.module";

const PORT = 4000;
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello from Backend</title>
        </head>
        <body>
          <h1>Hello from Backend</h1>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500);
    res.end(`Error: ${error}`);
  }
});

app.get("/test", async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        message: "Hello from Backend",
      })
    );
  } catch (error) {
    res.status(500);
    res.end(`Error: ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server start on: localhost:${PORT}`);
  Console();
});
