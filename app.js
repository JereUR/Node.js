/* const http = require("http");
const server = http.createServer((req, res) => {
  res.end("I'm responding to your request");
});
const port = 3000;
server.listen(port, () => {
  console.log("Listening to requests");
}); */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { title: "My dynamic title" });
});

app.get("/services", (req, res) => {
  res.render("services", { servicesTitle: "My dynamic services title" });
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    errorTitle: "Error 404",
    errorDescription: "No page found",
  });
});

app.listen(port, () => {
  console.log("Server at your service in the port", port);
});
