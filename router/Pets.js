const express = require("express");
const router = express.Router();

const Pet = require("../models/pet");

router.get("/", async (req, res) => {
  try {
    const arrayPetsDB = await Pet.find();
    console.log(arrayPetsDB);

    res.render("pets", { arrayPets: arrayPetsDB });
  } catch (error) {
    console.log(error);
  }
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    /* const petDB = new Pet(body);
    await petDB.save(); */
    await Pet.create(body);
    res.redirect("/pets");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const petDB = await Pet.findOne({ _id: id });
    console.log(petDB);

    res.render("detail", {
      pet: petDB,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.render("detail", {
      error: true,
      message: "Selected ID not found",
    });
  }
});

module.exports = router;
