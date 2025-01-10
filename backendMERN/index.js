const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Netlify!' });
});

// Export the app as a Netlify handler
module.exports.handler = serverless(app);