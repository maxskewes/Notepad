fs = require("fs");

module.exports = app => {
  app.delete("/api/notes/:id", function(req, res) {
    const deleteNote = req.params.id - 1;
    const newNote = [];
    let note = fs.readFileSync("./db/db.json");
    note = JSON.parse(note);
    note.splice(deleteNote, 1);
    for (let i = 0; i < note.length; i++) {
      note[i].id = i + 1;
      newNote.push(note[i]);
    }
    fs.writeFile("./db/db.json", JSON.stringify(newNote), () => {
      console.log("Deleted Note");
    });
    res.json(newNote);
  });
};