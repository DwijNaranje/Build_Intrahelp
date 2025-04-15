const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  message: String,
  nda: Boolean,
  name: String,
  company: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ContactForm", ContactFormSchema);
