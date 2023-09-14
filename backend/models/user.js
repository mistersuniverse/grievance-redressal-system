const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
