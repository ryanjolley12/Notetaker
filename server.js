// fs library and Node API path
const fs = require("fs");
const path = require("path");

// require express
const express = require("express");
const notes = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express(); 

// parse incoming data for server to accept POSt request
app.use(express.urlencoded({ extended: true }));

// PARSE incoming JSON
app.use(express.json());
app.use(express.static("public"));

// ----------------------------------------------------------------------------------
// GET routes

// SERVES ROUTE TO INDEX.HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// SERVES ROUTE TO NOTES.HTML
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// API GET
app.get("/api/notes", (req, res) => {
    console.log(notes);
    return res.json(notes); // returns db.db.json data in JSON

});

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});

// WILDCARD ROUTE
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


// listen() on server
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}`);
});