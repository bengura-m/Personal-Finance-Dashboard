const path = require('path');
const express = require('express'); 
const dotenv = require('dotenv');
const morgan = require ('morgan');
const colors = require('colors');
const transactions = require('./routes/transactions');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');


connectDB();
dotenv.config({path:'./.env'});

console.log(require('dotenv').config())
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/transactions', transactions);


if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
    
  }

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));

    app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(PORT, console.log(`Server running on port ${PORT}`.bgBlack));