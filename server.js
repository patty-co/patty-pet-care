const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

//Test the database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
})();


//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

//Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});