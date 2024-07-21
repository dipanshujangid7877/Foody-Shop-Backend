const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // For form submissions
app.use(bodyParser.json()); // For JSON submissions
