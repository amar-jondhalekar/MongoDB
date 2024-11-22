const express = require('express');
const app = express();
const connectDB = require('./db');

const PORT = 3000;

// body parser 
app.use(express.json());

// connect to database 
connectDB();

app.get('/', (req, res) => {
    console.log('I am inside home page route handler');
    res.send("Hello, Welcome to Campuslight");
})


app.listen(PORT, () => {
    console.log('Server is Up');
})