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

require("dotenv").config();

const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@nodetest.ohenaq9.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

//BD Conection
const mongoose = require("mongoose");
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Database"))
  .catch((e) => console.log(e));

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
