"use strict";

const express = require("express");
const app = express();

// counters MUST be before the route
let index = 0;
let page1 = 0;
let page2 = 0;

// serve static files (your html) from this folder
app.use(express.static(__dirname));

app.get("/hits/:page", (req, res) => {
  const requestedPage = req.params.page;

  if (requestedPage === "index") {
    index += 1;
    res.send(String(index));
  } else if (requestedPage === "page1") {
    page1 += 1;
    res.send(String(page1));
  } else if (requestedPage === "page2") {
    page2 += 1;
    res.send(String(page2));
  } else {
    res.status(404).send("No such page");
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
