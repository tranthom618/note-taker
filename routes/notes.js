// Import Libraries
const notes = require('express').Router();
const path = require('path');

// Imports Helpers/util functions
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  deleteFromFile,
  uuid,
} = require('../helpers/utils');

// GET Route for retrieving all the notes 
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {

  // Retrieves the user input
  const { title, text } = req.body;

  // Creates variable to store new notes, while also assigning a unique id
  if (req.body) {
    const newNote = {
      title: title,
      text: text,
      id: uuid()
    };

    // Calls fs middleware and writes to json
    readAndAppend('./db/db.json', newNote);

    res.json(`Note added successfully 🚀`);

  } else {
    res.error('Error in adding note');
  }
});

// DELETE Route for a specific tip
notes.delete('/:id', (req, res) => {

  // Retrieves id from url
  const id = req.params.id;

  // deleteFromFile utility - Uses read and write functions from fs
  deleteFromFile('./db/db.json', id);

  // Respond to the DELETE request
  res.json(`Item ${id} has been deleted 🗑️`);
});

module.exports = notes;