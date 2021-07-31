// file to assign ID's and delete note based on ID... 

const fs = require('fs');
const path = require('path');

function deleteById(id, notes) {
    const deleted = notes.remove(notes => notes.id === id)[0];
    return deleted;
  }

  module.exports = deleteById;