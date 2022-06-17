// requiring all the files
const express = require("express");
const parser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "images/favicon.ico")));
app.set("view engine", "ejs");

// making the constants
const day1 = ` "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cum, p"`;
let posts = [];

// cancel and publish buttons used in new.ejs view

// routing starts here
app.listen("3000", (req, res) => {
  console.log("Hey i am working on port 3000");
});

app.get("/", (req, res) => {
  res.render("app", {
    para1: day1,
    posts: posts,
  });
});

app.post("/contact", (req, res) => {
  res.render("contact");
});
app.post("/about", (req, res) => {
  res.render("about");
});

app.post("/home", (req, res) => {
  res.redirect("/");
});

app.post("/main", (req, res) => {
  res.render("main", { content: day1 });
});

app.post("/more", (req, res) => {
  // req.body.read
  if (req.body.read === "day1") {
    res.render("main", { content: day1 });
  } else {
    res.render("main", { content: day2 });
  }
});

app.post("/new", (req, res) => {
  res.render("new");
});

app.post("/", (req, res) => {
  if (req.body.cancel === "cancelled") {
    res.redirect("/");
  } else {
    const blog = req.body.blog;
    posts.push(blog);
    res.redirect("/");
  }
});
