// This holds backend
const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const pool = require("./db");

// This is rooting This code keep or not it was an example
// app.get("/", (req, res) => {
//   res.send("Hello Elina!");
// });

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todos");
    res.json(todos.rows);
  } catch (err) {
    console.log(error);
  }
});

app.listen(PORT, () => console - console.log("Server running on PORT ${PORT}"));
