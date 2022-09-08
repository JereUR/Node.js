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

//Web Routes
app.use("/", require("./router/WebRoutes"));
app.use("/pets", require("./router/Pets"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    errorTitle: "Error 404",
    errorDescription: "No page found",
  });
});

app.listen(port, () => {
  console.log("Server at your service in the port", port);
});
