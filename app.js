const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const salesforceRoutes = require('./routes/salesforceRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/salesforce', salesforceRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Authenticaton App!!");
})

module.exports = app;