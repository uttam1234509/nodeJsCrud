const mongoose = require("mongoose")

const appSchema = mongoose.Schema({
    username: String,
    age: Number,
    password: String
})

module.exports = mongoose.model("app", appSchema)