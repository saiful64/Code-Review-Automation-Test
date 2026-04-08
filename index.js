const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

function getData(a, b) {
  console.log("start");
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

app.listen(3000, () => console.log("Server running"));
