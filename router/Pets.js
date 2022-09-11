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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const petDB = await Pet.findByIdAndDelete({ _id: id });

    if (petDB) {
      res.json({
        state: true,
        message: "Pet deleted",
      });
    } else {
      res.json({
        state: false,
        message: "Failed to delete",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const petDB = await Pet.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(petDB);

    res.json({
      state: true,
      message: "Edit completed",
    });
  } catch (error) {
    console.log(error);

    res.json({
      state: false,
      message: "Edit failed",
    });
  }
});

module.exports = router;
