const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express();

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/nodejs', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("server is running");
}).catch((err) => {
    console.log("server is not running", err);
})

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.json({ "user": "server is running d" })
})

let port = 5555

require('./route/app.route')(app)

app.listen(port, () => {
    console.log(`server is running on the databse${port}`);
})