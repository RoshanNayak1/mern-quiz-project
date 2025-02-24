const mongoose = require( 'mongoose');

const connecDB = async()=>{
    try {
        await mongoose.connect (process.env.MONGO_URI);
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.log('MongoDB connection FAIL');
        process.exit(1);
    }
}

module.exports = connecDB;