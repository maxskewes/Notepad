//Dependencies
fs = require("fs");

module.exports = app => {
  app.post("/api/notes", function(req, res) {
    let newArray = [];
    const notesDB = fs.readFileSync("./db/db.json");
    if (notesDB.length > 0) {
      newArray = JSON.parse(notesDB);
    }
    const newNote = {
      id: newArray.length + 1,
      title: req.body.title,
      text: req.body.text
    };
    newArray.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(newArray), () => {
      console.log("New note written to database.");
    });
    res.json(newNote);
  });
};