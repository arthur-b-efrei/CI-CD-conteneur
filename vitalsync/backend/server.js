const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime(), version: "1.0.0" });
});

app.get("/api/activities", (req, res) => {
  res.json([{ id: 1, name: "Running", duration: 30 }]);
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));
