const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// Routes

// CRUD Operations

// View/Read

router.get('/users', async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// Create 

router.post('/users', async(req, res) => {
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name, age, weight});
        await User.save(newUser);
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});
