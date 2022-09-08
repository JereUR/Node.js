const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pets", {
    arrayPets: [
      { id: "#1", name: "Rocko", description: "Rocko description " },
      {
        id: "#2",
        name: "Locki",
        description: "Locki description ",
      },
    ],
  });
});

module.exports = router;
