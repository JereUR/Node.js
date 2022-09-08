const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "My dynamic title" });
});

router.get("/services", (req, res) => {
  res.render("services", { servicesTitle: "My dynamic services title" });
});

module.exports = router;
