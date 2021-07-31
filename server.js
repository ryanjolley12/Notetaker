const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// fs library and Node API path
const fs = require('fs');
const path = require('path');

// require express
const express = require('express');
const { notes } = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express(); 

app.use(express.static('public'));

// parse incoming data for server to accept POSt request
app.use(express.urlencoded({ extended: true }));

// PARSE incoming JSON
app.use(express.json());

// ----------------------------------------------------------------------------------
// GET routes

// SERVES ROUTE TO INDEX.HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// SERVES ROUTE TO NOTES.HTML
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// WILDCARD ROUTE
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// listen() on server
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}`);
});