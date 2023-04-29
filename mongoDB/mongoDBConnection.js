const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = "mongodb+srv://junaid0000:junaid0000@cluster0.cribqct.mongodb.net/User";

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
