const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MongoDB;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected!"));
const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  number: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});
module.exports = mongoose.model("user", userSchema);
