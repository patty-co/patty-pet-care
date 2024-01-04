const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


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