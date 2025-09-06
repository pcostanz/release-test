// Example API file for testing
// This file will trigger 'api' label when modified

const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/users", (req, res) => {
  res.json({ users: [] });
});

module.exports = app;
// 22
