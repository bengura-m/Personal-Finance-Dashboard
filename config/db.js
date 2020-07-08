const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const connectDB = async () => {
    try {
        const connection = await mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personalfinancedashboard",
            { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
          );

        console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold);
    } catch(e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
