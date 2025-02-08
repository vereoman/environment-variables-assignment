const express = require('express');
const { resolve } = require('path');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Configuration:', config);
});
