const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      required: [true, "Pet Name is required"],
      unique: true
    },
    petType: {
      type: String,
      minlength: [3, "Type must be at least 3 characters long"],
      required: [true, "Pet type is required"],
    },
    petDescription: {
      type: String,
      minlength: [3, "Description must be at least 3 characters long"],
      required: [true, "Pet description is required"],
    },
    skillOne: {
      type: String,
    },
    skillTwo: {
      type: String,
    },
    skillThree: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
