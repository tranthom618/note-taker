const notesRoute = require('express').Router();
// const fs = require('fs');
const path = require('path');
// const { v4: uuidv4 } = require('uuid');
// const app = require('.');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  deleteFromFile,
  uuid,
} = require('../helpers/utils');

// GET Route for retrieving all the notes 
notesRoute.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// DELETE Route for a specific tip
// notesRoute.delete('/:id', (req, res) => {
//   const noteId = req.params.id;

//   fs.read('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       // Make a new array of all notes except the one with the ID provided in the URL
//       const result = json.filter((note) => note.id !== noteId);

//       // Save that array to the filesystem
//       fs.writeFile('./db/db.json', result);

//       // Respond to the DELETE request
//       res.json(`Item ${noteId} has been deleted 🗑️`);
//     });
// });

// POST Route for a new UX/UI tip
// notes.post('/', (req, res) => {
//   console.log(req.body);

//   const { username, topic, notes } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       note_id: uuidv4(),
//     };

//     readAndAppend(newTip, './db/notes.json');
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error in adding note');
//   }
// });

module.exports = notesRoute;
