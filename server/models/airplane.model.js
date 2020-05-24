const mongoose = require("mongoose");

const AirplaneSchema = new mongoose.Schema(
  {
    airplane: {
      type: String,
      maxlength: [70, "Max length is 70 characters."],
    },
    // reply: [
    //   {
    //     type: String,
    //     maxlength: [140, "Max length is 140 characters."],
    //   },
    // ],
  },
  { timestamps: true }
);

const Airplane = mongoose.model("Airplane", AirplaneSchema);

module.exports = Airplane;
