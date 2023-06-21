const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getRequest = require('./routers/get');



app.listen(process.env.PORT || 8000, () => console.log("Server running."));

app.use(express.static('public'));

app.use(express.json());
app.use(bodyParser.json());
app.use(getRequest);