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

app.use('/api/v1/transactions', transactions);
app.use(express.json());

app.listen(PORT, console.log(`Server running on port ${PORT}`.bgBlack));