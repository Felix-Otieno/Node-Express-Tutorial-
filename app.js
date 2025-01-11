const path = require("node:path");
const express = require("express");
const app = express();

// Setup the views folder and the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
  });
  