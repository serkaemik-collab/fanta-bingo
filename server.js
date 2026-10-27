const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zema Bingo</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #071426;
            color: white;
            text-align: center;
            padding: 60px 20px;
          }
          h1 { color: #39a0ff; font-size: 42px; }
          p { color: #d0d9e6; font-size: 18px; }
          button {
            background: #1685ff;
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 35px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>Zema Bingo</h1>
        <p>Welcome to Zema Bingo!</p>
        <button>Play</button>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Zema Bingo is running on port ${PORT}`);
});
