const notes = require('express').Router();
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
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title: title,
      text: text,
      id: uuid()
      // id: uuid()
    };
    console.log(id);

    // Calls fs middleware
    readAndAppend('./db/db.json', newNote);

    res.json(`Note added successfully 🚀`);

  } else {
    res.error('Error in adding note');
  }
});

// DELETE Route for a specific tip
notes.delete('/:id', (req, res) => {
  const id = req.params.id;
  deleteFromFile('./db/db.json', id);

  // Respond to the DELETE request
  res.json(`Item ${id} has been deleted 🗑️`);
});

module.exports = notes;