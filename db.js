// To import mongoose 
const mongoose = require('mongoose');

// Establish mongoose mongodb node.js connection

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://amarjondhalekar221297:jYMGGazQCVRySIS5@cluster0.bazyj.mongodb.net/`, {
            useNewUrlParser:true,
        });
        console.log(`MongoDB Connected`);
    } catch(error){
        console.error(error.message);
        process.exit(1);
    }
}