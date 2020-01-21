// Dependancies
const path = require("path");
const fs = require("fs");

// Route
module.exports = app => {

// API notes
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
};