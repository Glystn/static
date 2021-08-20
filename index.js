/**
 * @format
 */
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(port, () => {});
