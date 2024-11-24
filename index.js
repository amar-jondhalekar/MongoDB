const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users');
const dotenv = require('dotenv')

// load
dotenv.config();

const PORT = process.env.PORT;


// body parser 
app.use(express.json());

app.use('/api', users);

// -> /api/users

// connect to database 
connectDB();

app.get('/', (req, res) => {
    console.log('I am inside home page route handler');
    res.send("Hello, Welcome to Campuslight");
})


app.listen(PORT, () => {
    console.log('Server is Up');
})