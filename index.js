const express = require('express');
const app = express();
const PORT = 3000;
// to import mongoose 
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    console.log('I am inside home page route handler');
    res.send("Hello, Welcome to Campuslight");
})


app.listen(PORT, () => {
    console.log('Server is Up');
})