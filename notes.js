const fs = require('fs');
const path = require('path');

function deleteById(id, notes) {
    const deleted = notes.delete(notes => notes.id === id)[0];
    return deleted;
  }

  module.exports = deleteById;