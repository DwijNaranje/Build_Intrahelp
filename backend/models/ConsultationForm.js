// models/ConsultationForm.js
const mongoose = require("mongoose");

const consultationFormSchema = new mongoose.Schema({
  message: String,
  name: String,
  company: String,
  email: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model("ConsultationForm", consultationFormSchema);
