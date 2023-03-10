const fs = require('fs');
const util = require('util');
const path = require ('path');

// Function to generate unique id
function uuid () {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}

// fs.readFile Function
const readFromFile = util.promisify(fs.readFile);

// fs.writeToFile function
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

// fs.readAnd Append Function
const readAndAppend = (destination, content) => {
  fs.readFile(destination, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(destination, parsedData);
    }
  });
};

// Function to delete using fs.readFile, linear search, and writeToFile
const deleteFromFile = (destination, idDelete) => {
  fs.readFile(destination, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);

      // Linear search for loop
      for (let i = 0; i < parsedData.length; i++) {
        if (parsedData[i].id == idDelete ) {
            parsedData.splice(i, 1);
            console.log(parsedData);
            writeToFile(destination, parsedData);
          }
        }
      }
    });
  };

// Exports
module.exports = { readFromFile, writeToFile, readAndAppend, deleteFromFile, uuid };