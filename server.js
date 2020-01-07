//server.js
const express = require("express");
// const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 2222;
const app = express();
// app.use(favicon(__dirname + "/build/favicon.ico"));

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));

// app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.get("/ping", function(req, res) {
  return res.send("pong");
});

console.log("Express server is running in port", port);
app.listen(port);
