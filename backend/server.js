const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const ContactForm = require("./models/ContactForm");
const ConsultationForm = require("./models/ConsultationForm"); // Add this line

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

  // Root route
app.get("/", (req, res) => {
    res.send("🚀 Server is running...#");
  });

app.post("/api/contact", async (req, res) => {
  try {
    const form = new ContactForm(req.body);
    await form.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
  res.send("Contact endpoint ");
});

app.get("/api/contact", (req, res) => {
  res.send("Contact endpoint is live and ready for POST.");
});

// Add this new route
app.post("/api/consultation", async (req, res) => {
    try {
      const form = new ConsultationForm(req.body);
      await form.save();
      res.status(201).json({ message: "Consultation form submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
    res.send("inside consultation");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
