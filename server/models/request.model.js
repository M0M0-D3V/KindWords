const mongoose = require("mongoose");

const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

const RequestSchema = new mongoose.Schema(
  {
    // Schema for logged in user to be able to create Requests and put it in the "bulletin" for everyone else to View and/or Respond to..
    request: {
      type: String,
      required: [true, "Write about something that's troubling you."],
      minlength: [8, minlengthMsg],
      maxlength: [140, "Max length is 140 characters."],
    },
    requestBy: String,
    hidden: Boolean,
    meta: {
      flags: Number,
    },

    // Response is from others who have Viewed the Request and are writing a letter back to Requestor..
    // Response will be sent via axios.put to update an existing Request.
    response: [
      {
        body: {
          type: String,
          minlength: [8, minlengthMsg],
          maxlength: [255, "Max length is 255 characters."],
        },
        date: Date,
        respondBy: String,
        meta: {
          flags: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
