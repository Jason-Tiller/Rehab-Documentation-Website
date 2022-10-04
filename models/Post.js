const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  ptGoals: {
    type: String,
    required: true,
  },
  ptPhoneNum: {
    type: String,
    required: true,
  },
  ptEmail: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("Post", PostSchema);
