
const PROTOCOL = "http";
const ORIGIN = "localhost";
const PORT = 3500;


const express = require("express");
const path = require("path");
const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");
const app = express();
app.use(express.static(STATIC));
// All GET request handled by INDEX file
app.get("*", function (req, res) {
    res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
    console.log("Server up and running on "+ PROTOCOL + "://" + ORIGIN + ":" + PORT + "/");
});