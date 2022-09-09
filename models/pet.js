const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: String,
  description: String,
});

//Model create
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
