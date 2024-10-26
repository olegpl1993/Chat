import express from "express";

const testRoute = express.Router();

testRoute.get("/", (_, res) => {
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

export default testRoute;
