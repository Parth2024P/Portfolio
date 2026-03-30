import dotenv from "dotenv";
dotenv.config(); // Load FIRST before anything else

const express_module = await import("express");
const cors_module = await import("cors");
const contactRoutes_module = await import("./routes/contact.js");
const projectRoutes_module = await import("./routes/projects.js");

const express = express_module.default;
const cors = cors_module.default;
const contactRoutes = contactRoutes_module.default;
const projectRoutes = projectRoutes_module.default;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend is running!" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
