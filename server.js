import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS for your Netlify frontend
app.use(cors({
  origin: "https://events-quotes.netlify.app",   // allow requests from your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],     // allowed HTTP methods
  credentials: true                              // allow cookies/headers if needed
}));

app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) {
      throw new Error(`ZenQuotes error: ${response.status}`);
    }
    const data = await response.json();
    res.json(data[0]); // send back just the first quote object
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
