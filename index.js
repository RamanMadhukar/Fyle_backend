const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const routes = require('./routes/routes')

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, function () {
    console.log(`server started at port ${port}`);
})
