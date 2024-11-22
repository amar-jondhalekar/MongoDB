const express = require('express');
const app = express();
const PORT = 3000;
// To import mongoose 
const mongoose = require('mongoose');

// Establish mongoose mongodb node.js connection

const mongoose = async () => {
    try{
        const conn = await mongoose.connect(`mongodb://loacalhost:27017/test`, {
            useNewUrlParser:true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch(error){
        console.error(error.message);
        process.exit(1);
    }
}


app.get('/', (req, res) => {
    console.log('I am inside home page route handler');
    res.send("Hello, Welcome to Campuslight");
})


app.listen(PORT, () => {
    console.log('Server is Up');
})