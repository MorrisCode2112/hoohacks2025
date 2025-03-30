import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Define User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  stressLevel: Number, // 1-10 scale
  preferredMeditationType: String,
  goals: String,
});

const User = mongoose.model("User", UserSchema);

// API to save user data
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "✅ User data saved" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error saving user data" });
  }
});

// API to generate meditation script
app.post("/api/meditation-script", async (req, res) => {
  try {
    const { name, stressLevel, preferredMeditationType, goals } = req.body;

    let script = `Hello ${name}, welcome to your personalized meditation session.`;

    if (stressLevel > 7) {
      script += " Let's begin with deep breathing to release tension.";
    } else {
      script += " Let's start with a gentle relaxation exercise.";
    }

    script += ` Since you prefer ${preferredMeditationType}, we will focus on that technique today.`;
    script += ` Remember your goal: "${goals}". Let’s center our minds around this intention.`;

    res.json({ script });
  } catch (error) {
    res.status(500).json({ error: "❌ Error generating meditation script" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
