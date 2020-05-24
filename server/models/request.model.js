const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    request: {
      type: String,
      required: [true, "Username name is required"],
      minlength: [8, "Message needs at least 8 characters."],
      maxlength: [255, "Max length is 255 characters."],
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

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
